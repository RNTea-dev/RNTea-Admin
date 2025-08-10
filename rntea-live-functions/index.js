const functions = require("firebase-functions");
const fetch = require("node-fetch");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const { RecaptchaEnterpriseServiceClient } = require("@google-cloud/recaptcha-enterprise");

require("dotenv").config();

admin.initializeApp();
const db = admin.firestore();

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

const recaptchaClient = new RecaptchaEnterpriseServiceClient();
functions.setGlobalOptions({ maxInstances: 10 });

const EXPLICIT_WORDS = ["fuck", "shit", "asshole", "bitch", "cunt", "damn", "hell"];
const MAX_CHAR_LIMIT = 250;

// --- HIPAA helpers ---
function quickScan(text) {
  const flags = [];
  if (/\b\d{3}-\d{2}-\d{4}\b/.test(text)) flags.push({ type: "SSN", phrase: "###-##-####" });
  if (/\b(?:\(\d{3}\)\s*|\d{3}[-.\s])\d{3}[-.\s]\d{4}\b/.test(text)) flags.push({ type: "Phone", phrase: "Phone Number" });
  if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(text)) flags.push({ type: "Email", phrase: "Email Address" });
  if (/\b\d{5}(?:-\d{4})?\b/.test(text)) flags.push({ type: "ZIP", phrase: "US ZIP" });
  if (/\b\d{1,2}[\/-]\d{1,2}[\/-](?:\d{2}|\d{4})\b/.test(text)) flags.push({ type: "Date", phrase: "Exact Date" });
  if (/\b[A-Z][a-z]{2,}\s+[A-Z][a-z]{2,}\b/.test(text)) flags.push({ type: "Name", phrase: "Full Name" });
  return flags;
}

const SCHEMA_PROMPT = `
Return ONLY valid JSON with:
{
  "score": number,                         // 0-100
  "status": "Safe" | "Caution" | "Block",
  "flagged_phrases": string[],             // detected PHI snippets
  "redacted_text": string,                 // replace spans with [REDACTED:<TYPE>]
  "countsByType": { [type: string]: number }
}
Rules:
- Consider HIPAA's 18 identifiers (names, address<state, full dates, phone, email, SSN, MRN, account, license, vehicle IDs, device serials, URLs/IP, biometric, face photos, and any unique code).
- "Block" when direct identifiers are present; "Caution" for possibly identifying info; else "Safe".
- Output JSON ONLY, no prose or markdown.
`;


function filterContent(content) {
  if (typeof content !== "string") return { isValid: false, message: "Content must be a string." };

  const lowerCaseContent = content.toLowerCase();
  for (const word of EXPLICIT_WORDS) {
    if (lowerCaseContent.includes(word)) {
      return { isValid: false, message: "Content contains inappropriate language." };
    }
  }

  if (content.length > MAX_CHAR_LIMIT) {
    return { isValid: false, message: `Content exceeds ${MAX_CHAR_LIMIT} character limit.` };
  }
  return { isValid: true, message: "Content is valid." };
}

function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  return parseFloat((totalStars / reviews.length).toFixed(1));
}

exports.addReview = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "You must be logged in to leave a review.");

  const { hospitalId, doctorId, stars, comment } = data;
  const userId = context.auth.uid;

  if (!hospitalId || !doctorId || !stars || typeof stars !== "number" || stars < 1 || stars > 5 || typeof comment !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "Missing or invalid review data.");
  }

  const filteredComment = filterContent(comment);
  if (!filteredComment.isValid) throw new functions.https.HttpsError("invalid-argument", filteredComment.message);

  const doctorRef = db.collection("artifacts").doc(process.env.APP_ID).collection("public").doc("data").collection("hospitals").doc(hospitalId).collection("doctors").doc(doctorId);

  const newReview = { userId, comment, stars, date: new Date().toISOString(), comments: [] };

  await db.runTransaction(async (transaction) => {
    const doc = await transaction.get(doctorRef);
    if (!doc.exists) throw new functions.https.HttpsError("not-found", "Doctor not found.");

    const currentReviews = doc.data().reviews || [];
    currentReviews.push(newReview);
    const newAverageRating = calculateAverageRating(currentReviews);

    transaction.update(doctorRef, {
      reviews: currentReviews,
      averageRating: newAverageRating,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  return { status: "success", message: "Review added successfully!" };
});

exports.addCommentToReview = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "You must be logged in to add a comment.");

  const { hospitalId, doctorId, reviewIndex, commentText } = data;
  const userId = context.auth.uid;

  if (!hospitalId || !doctorId || typeof reviewIndex !== "number" || reviewIndex < 0 || !commentText) {
    throw new functions.https.HttpsError("invalid-argument", "Missing or invalid comment data.");
  }

  const filteredComment = filterContent(commentText);
  if (!filteredComment.isValid) throw new functions.https.HttpsError("invalid-argument", filteredComment.message);

  const doctorRef = db.collection("artifacts").doc(process.env.APP_ID).collection("public").doc("data").collection("hospitals").doc(hospitalId).collection("doctors").doc(doctorId);

  const newComment = { userId, text: commentText, date: new Date().toISOString() };

  await db.runTransaction(async (transaction) => {
    const doc = await transaction.get(doctorRef);
    if (!doc.exists) throw new functions.https.HttpsError("not-found", "Doctor not found.");

    const currentReviews = doc.data().reviews || [];
    if (reviewIndex >= currentReviews.length) throw new functions.https.HttpsError("invalid-argument", "Review not found.");

    currentReviews[reviewIndex].comments = currentReviews[reviewIndex].comments || [];
    currentReviews[reviewIndex].comments.push(newComment);

    transaction.update(doctorRef, {
      reviews: currentReviews,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  return { status: "success", message: "Comment added successfully!" };
});

exports.sendContactEmail = functions.https.onCall(async (data) => {
  const { name, email, subject, message, recaptchaToken } = data;
  if (!name || !email || !subject || !message || !recaptchaToken) throw new functions.https.HttpsError("invalid-argument", "Missing required fields.");

  const projectPath = recaptchaClient.projectPath(process.env.GCP_PROJECT_ID);
  const request = {
    assessment: {
      event: {
        token: recaptchaToken,
        siteKey: process.env.RECAPTCHA_SITE_KEY,
      },
    },
    parent: projectPath,
  };

  const [response] = await recaptchaClient.createAssessment(request);
  if (!response.tokenProperties.valid || response.riskAnalysis.score < 0.5) throw new functions.https.HttpsError("unauthenticated", "reCAPTCHA verification failed.");

  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: "rnteallc@gmail.com",
    subject: `RNTea Contact Form: ${subject}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  await mailTransport.sendMail(mailOptions);
  return { success: true, message: "Your message has been sent successfully!" };
});
exports.checkHIPAA = functions.https.onCall(async (data, context) => {
  const text = (data.text || "").trim();
  logger.info("HIPAA function received text:", { len: text.length });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    logger.error("Gemini API key is missing from environment variables.");
    // If we have obvious PHI from regex, return conservative Block; else Safe
    const regexFlags = [];
    // Keep this minimal path consistent with your main regex set
    if (/\b\d{3}-\d{2}-\d{4}\b/.test(text)) regexFlags.push("SSN");
    if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(text)) regexFlags.push("Email Address");
    if (/\b[A-Z][a-z]{2,}\s+[A-Z][a-z]{2,}\b/.test(text)) regexFlags.push("Full Name");
    if (regexFlags.length) {
      return {
        score: 90,
        status: "Block",
        flagged_phrases: regexFlags,
        redacted_text: text.replace(/\S/g, "•"),
        countsByType: regexFlags.reduce((acc, lab) => (acc[lab] = (acc[lab] || 0) + 1, acc), {})
      };
    }
    return { score: 10, status: "Safe", flagged_phrases: [], redacted_text: text, countsByType: {} };
  }

  // -------------------------
  // Your original regex checks
  // (kept the same patterns you had)
  // -------------------------
  const regexFlags = [];
  const dobRegex = /\b(?:0?[1-9]|1[0-2])[\/-](?:0?[1-9]|[12][0-9]|3[01])[\/-](?:\d{2}|\d{4})\b/;
  if (dobRegex.test(text)) regexFlags.push("Date of Birth");
  const ssnRegex = /\b\d{3}-\d{2}-\d{4}\b/;
  if (ssnRegex.test(text)) regexFlags.push("SSN");
  const definitiveNameRegex = /(Patient['’]s?\s+)(\b[A-Z][a-z]+(?:\s+\b[A-Z][a-z]+)+)/;
  const nm = text.match(definitiveNameRegex);
  if (nm && nm[2]) regexFlags.push(`Full Name: ${nm[2].trim()}`);
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (emailRegex.test(text)) regexFlags.push("Email Address");
  const addressRegex = /\b\d{1,5}\s+[A-Za-z0-9'.\-\s]{3,}\s(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)\b/;
  if (addressRegex.test(text)) regexFlags.push("Street Address");
  const mrnRegex = /\b(?:MRN|Medical\s*Record)\s*:?[\sA-Za-z0-9-]{4,}\b/i;
  if (mrnRegex.test(text)) regexFlags.push("Medical Record Number");
  const zipRegex = /\b\d{5}(?:-\d{4})?\b/;
  if (zipRegex.test(text)) regexFlags.push("Zip Code");

  logger.info("regexFlags", { regexFlags });

  // NOTE: Option B — DO NOT early-return here.
  // We still call the LLM, then override the final result if regex caught PHI.

  try {
    // -------------------------
    // LLM call (Generative Language API)
    // -------------------------
    const prompt = `
You are an expert in HIPAA compliance. Review the following text and assess if it contains any Protected Health Information (PHI) such as:
- Full names
- Birth dates
- Medical record numbers
- Specific locations
- Contact details (email, phone, address)
- Dates of service
- Any info that could identify a patient directly or indirectly

Respond strictly in JSON:
{
  "score": 0-100,
  "status": "Safe" | "Caution" | "Block" | "Warning" | "Flagged",
  "flagged_phrases": [list of exact strings],
  "redacted_text": string,
  "countsByType": { "<Type>": number }
}

Text to evaluate:
"""${text}"""
`.trim();

    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        // schema hint helps but isn't guaranteed; we still normalize below
        responseSchema: {
          type: "OBJECT",
          properties: {
            score: { type: "NUMBER" },
            status: { type: "STRING", enum: ["Safe", "Caution", "Block", "Warning", "Flagged"] },
            flagged_phrases: { type: "ARRAY", items: { type: "STRING" } },
            redacted_text: { type: "STRING" },
            countsByType: { type: "OBJECT" }
          },
          required: ["score", "status", "flagged_phrases"]
        },
        temperature: 0
      }
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();
    const jsonString = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    // -------------------------
    // Normalize + Option B override
    // -------------------------
    let parsedResult = {};
    if (jsonString) {
      try {
        parsedResult = JSON.parse(jsonString);
      } catch (e) {
        logger.warn("Gemini returned non-JSON text; continuing with empty object.", {
          preview: String(jsonString).slice(0, 120)
        });
        parsedResult = {};
      }
    }

    // Map statuses like "Warning"/"Flagged" to our standard set
    const normalizeStatus = (s) => {
      if (!s) return "Safe";
      const t = String(s).toLowerCase();
      if (t === "warning") return "Caution";
      if (t === "flagged") return "Block";
      if (t === "caution" || t === "block" || t === "safe") return s[0].toUpperCase() + s.slice(1).toLowerCase();
      return "Safe";
    };

    let out = {
      score: Number(parsedResult?.score ?? 5),
      status: normalizeStatus(parsedResult?.status),
      flagged_phrases: Array.isArray(parsedResult?.flagged_phrases) ? parsedResult.flagged_phrases : [],
      redacted_text: typeof parsedResult?.redacted_text === "string" ? parsedResult.redacted_text : undefined,
      countsByType: (parsedResult && typeof parsedResult.countsByType === "object") ? parsedResult.countsByType : {}
    };

    // --- Option B override: if regex saw direct identifiers, force higher risk ---
    if (regexFlags.length) {
      // merge regex hits
      const merged = new Set(out.flagged_phrases.concat(regexFlags));
      out.flagged_phrases = Array.from(merged);

      // force Block + high score
      out.status = "Block";
      out.score = Math.max(out.score || 0, 90);

      // counts
      out.countsByType = out.countsByType || {};
      regexFlags.forEach((label) => {
        const key =
          /SSN/i.test(label) ? "SSN" :
          /Email/i.test(label) ? "Email" :
          /Phone/i.test(label) ? "Phone" :
          /Zip/i.test(label) ? "ZIP" :
          /Date/i.test(label) ? "Date" :
          /Full Name|Name/i.test(label) ? "Name" :
          /Address/i.test(label) ? "Address" :
          /Medical Record/i.test(label) ? "MRN" :
          "Other";
        out.countsByType[key] = (out.countsByType[key] || 0) + 1;
      });

      // redaction fallback if LLM didn't provide one
      if (!out.redacted_text) {
        out.redacted_text = text.replace(/\S/g, "•");
      }
    }

    // final defaults
    if (!out.redacted_text) out.redacted_text = text;
    if (!Array.isArray(out.flagged_phrases)) out.flagged_phrases = [];
    if (!out.countsByType || typeof out.countsByType !== "object") out.countsByType = {};

    logger.info("✅ Returning normalized HIPAA result", {
      status: out.status,
      score: out.score,
      regexHits: regexFlags.length,
      flagged: out.flagged_phrases.length
    });
    return out;
  } catch (err) {
    logger.error("Gemini API Moderation error:", { message: err?.message, stack: err?.stack });

    // Conservative fallback on error
    if (regexFlags.length) {
      return {
        score: 90,
        status: "Block",
        flagged_phrases: regexFlags,
        redacted_text: text.replace(/\S/g, "•"),
        countsByType: regexFlags.reduce((acc, lab) => (acc[lab] = (acc[lab] || 0) + 1, acc), {})
      };
    }
    return { score: 10, status: "Safe", flagged_phrases: [], redacted_text: text, countsByType: {} };
  }
});
