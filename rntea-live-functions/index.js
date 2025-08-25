const functions = require("firebase-functions");
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
  const crypto = require("crypto");           // safe hash for correlation (no PHI)
  const tStart = Date.now();
  const version = "hipaa-b-override:v1.6-verbose";

  // --- unwrap Firebase Callable payloads consistently ---
  function unwrapText(payload) {
    if (!payload) return "";
    if (typeof payload === "string") return payload;
    if (typeof payload.text === "string") return payload.text;
    if (payload.data && typeof payload.data.text === "string") return payload.data.text; // handles { data: { text } }
    return "";
  }

  const textRaw = unwrapText(data);
  const text = (textRaw || "").trim();

  // --- input metadata (never log raw text) ---
  const inputLen = text.length;
  const inputHash = crypto.createHash("sha256").update(text).digest("hex").slice(0, 12); // short hash

  logger.info("[HIPAA] param snapshot", {
    version,
    topLevelKeys: Object.keys(data || {}),
    hasNestedData: !!data?.data,
    typeofTextTop: typeof data?.text,
    typeofTextNested: typeof data?.data?.text,
    inputLen,
    inputHash
  });


  logger.info("[HIPAA] start", {
    version,
    inputLen,
    inputHash,
    isAuthed: !!context?.auth,
    project: process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT || "unknown",
    // region is not directly exposed; default Firebase is us-central1
    regionGuess: "us-central1",
    node: process.version,
  });

  // --- API key check ---
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    logger.error("[HIPAA] missing GEMINI_API_KEY", { version, inputHash });
    return {
      score: 10,
      status: "Safe",
      flagged_phrases: [],
      redacted_text: text,
      countsByType: {},
      debug: { version, used: "fallback_safe_no_api_key", inputLen, inputHash }
    };
  }

  // --- Regex pass (collect matches, not just labels) ---
  const findAll = (re) => {
    const out = [];
    try {
      const g = re.flags.includes("g") ? re : new RegExp(re.source, re.flags + "g");
      for (const m of text.matchAll(g)) out.push(m[0]);
    } catch { /* ignore bad regex */ }
    return out;
  };

  const patterns = {
    SSN: /\b\d{3}-\d{2}-\d{4}\b/,
    Email: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    Phone: /\b(?:\(\d{3}\)\s*|\d{3}[-.\s])\d{3}[-.\s]\d{4}\b/,
    ZIP: /\b\d{5}(?:-\d{4})?\b/,
    Date: /\b\d{1,2}[\/-]\d{1,2}[\/-](?:\d{2}|\d{4})\b/,
    Name: /\b[A-Z][a-z]{2,}\s+[A-Z][a-z]{2,}(?:\s+[A-Z][a-z]{2,})*\b/,
    Address: /\b\d{1,5}\s+[A-Za-z0-9'.\-\s]{3,}\s(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)\b/i,
    MRN: /\b(?:MRN|Medical\s*Record)\s*:?[\sA-Za-z0-9-]{4,}\b/i
  };

  const regexMatches = {};
  Object.entries(patterns).forEach(([type, re]) => {
    const hits = findAll(re);
    if (hits.length) regexMatches[type] = hits;
  });

  const regexFlags = Object.keys(regexMatches);
  const regexHitCount = regexFlags.reduce((n, k) => n + regexMatches[k].length, 0);

  logger.info("[HIPAA] regex summary", {
    version,
    inputHash,
    types: regexFlags,
    counts: Object.fromEntries(Object.entries(regexMatches).map(([k, v]) => [k, v.length])),
    totalHits: regexHitCount
  });

  // --- Build LLM request (Generative Language API) ---
  const prompt = `
You are a HIPAA compliance assistant. Inspect the text and output ONLY JSON:

{
  "score": 0-100,
  "status": "Safe" | "Caution" | "Block" | "Warning" | "Flagged",
  "flagged_phrases": string[],
  "redacted_text": string,
  "countsByType": { "<Type>": number }
}

Rules:
- Consider HIPAA's 18 identifiers.
- "Block" for direct identifiers (names + exact dates + addresses + phone/SSN/etc.).
- Use [REDACTED:<TYPE>] in "redacted_text".
- JSON only, no prose.

Text:
"""${text}"""
`.trim();

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0
    }
  };

  const modelId = "gemini-2.5-flash-preview-05-20";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;

  logger.info("[HIPAA] LLM request: sending", {
    version,
    inputHash,
    modelId,
    urlHost: "generativelanguage.googleapis.com",
    payloadBytes: Buffer.byteLength(JSON.stringify(payload), "utf8")
  });

  // --- Call LLM with timing + header capture ---
  const tLLM0 = Date.now();
  let response, status, requestId, textPreview;
  try {
    response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    status = response.status;
    requestId = response.headers.get("x-request-id") || response.headers.get("x-guploader-uploadid") || null;
  } catch (e) {
    logger.error("[HIPAA] LLM network error", { version, inputHash, err: e?.message });
    // Fallback logic
    const debug = { version, used: "fallback_regex_network_error", inputLen, inputHash, err: e?.message, llmMs: Date.now() - tLLM0 };
    if (regexFlags.length) {
      const counts = {};
      regexFlags.forEach((k) => counts[k] = regexMatches[k].length);
      return {
        score: 90, status: "Block",
        flagged_phrases: regexFlags, redacted_text: text.replace(/\S/g, "•"),
        countsByType: counts, debug
      };
    }
    return { score: 10, status: "Safe", flagged_phrases: [], redacted_text: text, countsByType: {}, debug };
  }

  const tLLM1 = Date.now();
  logger.info("[HIPAA] LLM response: received", {
    version,
    inputHash,
    status,
    requestId,
    llmMs: tLLM1 - tLLM0
  });

  if (!response.ok) {
    let bodyPreview = "";
    try { bodyPreview = (await response.text()).slice(0, 200); } catch {}
    logger.error("[HIPAA] LLM non-200", { version, inputHash, status, requestId, bodyPreview });
    const debug = { version, used: "fallback_regex_http_error", status, requestId, llmMs: tLLM1 - tLLM0, inputHash };
    if (regexFlags.length) {
      const counts = {};
      regexFlags.forEach((k) => counts[k] = regexMatches[k].length);
      return {
        score: 90, status: "Block",
        flagged_phrases: regexFlags, redacted_text: text.replace(/\S/g, "•"),
        countsByType: counts, debug
      };
    }
    return { score: 10, status: "Safe", flagged_phrases: [], redacted_text: text, countsByType: {}, debug };
  }

  // --- Parse and normalize LLM JSON ---
  const tParse0 = Date.now();
  let resultJson = {};
  try {
    const result = await response.json();
    const jsonString = result?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    textPreview = String(jsonString).slice(0, 120);
    resultJson = JSON.parse(jsonString);
  } catch (e) {
    logger.warn("[HIPAA] LLM parse warning", { version, inputHash, requestId, warn: e?.message });
    resultJson = {};
  }
  const tParse1 = Date.now();

  const normalizeStatus = (s) => {
    const t = String(s || "Safe").toLowerCase();
    if (t === "warning") return "Caution";
    if (t === "flagged") return "Block";
    return ["safe", "caution", "block"].includes(t) ? (t[0].toUpperCase() + t.slice(1)) : "Safe";
  };

  let out = {
    score: Number(resultJson?.score ?? 5),
    status: normalizeStatus(resultJson?.status),
    flagged_phrases: Array.isArray(resultJson?.flagged_phrases) ? resultJson.flagged_phrases : [],
    redacted_text: typeof resultJson?.redacted_text === "string" ? resultJson.redacted_text : undefined,
    countsByType: (resultJson && typeof resultJson.countsByType === "object") ? resultJson.countsByType : {}
  };

  // --- Option B override (regex → force Block) ---
  let usedPath = "llm_only";
  if (regexFlags.length) {
    // merge phrases (avoid logging their content!)
    const merged = new Set(out.flagged_phrases.concat(regexFlags));
    out.flagged_phrases = Array.from(merged);

    // force Block + high score
    out.status = "Block";
    out.score = Math.max(out.score || 0, 90);

    // counts
    out.countsByType = out.countsByType || {};
    regexFlags.forEach((type) => {
      out.countsByType[type] = (out.countsByType[type] || 0) + (regexMatches[type]?.length || 1);
    });

    // redaction fallback
    if (!out.redacted_text) out.redacted_text = text.replace(/\S/g, "•");
    usedPath = "llm+override";
  }

      // --- Clean up and limit flagged phrases (dedupe, trim, drop trivial but keep short ID types) ---
    if (!Array.isArray(out.flagged_phrases)) out.flagged_phrases = [];

    const SHORT_TYPE_KEEP = /^(SSN|DOB|MRN|ZIP)$/i;

    out.flagged_phrases = Array.from(new Set(out.flagged_phrases))
      .map(s => (typeof s === "string" ? s.trim() : ""))
      .filter(s => {
        if (!s) return false;
        if (SHORT_TYPE_KEEP.test(s)) return true;       // keep short critical types
        if (/^\d{1,3}$/.test(s)) return false;          // drop bare 1–3 digit tokens like "123"
        return s.length >= 4;                           // keep normal terms/phrases
      })
      .slice(0, 12);

      const rank = (s) => {
      const t = s.toLowerCase();
      if (/(ssn|mrn)/.test(t)) return 1;
      if (/(email|phone|address)/.test(t)) return 2;
      if (/(name|date|dob|zip)/.test(t)) return 3;
      return 4;
    };
    out.flagged_phrases.sort((a, b) => rank(a) - rank(b));



  // --- Final defaults ---
  if (!out.redacted_text) out.redacted_text = text;
  if (!Array.isArray(out.flagged_phrases)) out.flagged_phrases = [];
  if (!out.countsByType || typeof out.countsByType !== "object") out.countsByType = {};

  // --- Final log (do not include PHI) ---
  const tEnd = Date.now();
  logger.info("[HIPAA] done", {
    version,
    inputHash,
    status: out.status,
    score: out.score,
    regexTypes: regexFlags,
    regexHitCount,
    usedPath,
    timings: {
      totalMs: tEnd - tStart,
      llmMs: tLLM1 - tLLM0,
      parseMs: tParse1 - tParse0
    },
    requestId
  });

  // --- Return with debug (no PHI) ---
  return {
    ...out,
    debug: {
      version,
      inputLen,
      inputHash,
      used: usedPath,
      modelId,
      requestId,
      timings: { totalMs: tEnd - tStart, llmMs: tLLM1 - tLLM0, parseMs: tParse1 - tParse0 },
      regex: {
        types: regexFlags,
        counts: Object.fromEntries(Object.entries(regexMatches).map(([k, v]) => [k, v.length])),
        totalHits: regexHitCount
      }
    }
  };
});
