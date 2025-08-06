import * as functions from "firebase-functions";
import fetch from "node-fetch";
import admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";


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

functions.setGlobalOptions({maxInstances: 10});


const EXPLICIT_WORDS = [
  "fuck", "shit", "asshole", "bitch", "cunt", "damn", "hell",
];
const MAX_CHAR_LIMIT = 250;

/**
 * Filters content for expletives and enforces a character limit.
 * @param {string} content - The string content to filter.
 * @return {{isValid: boolean, message: string}} - Object indicating validity
 * and a message.
 */
function filterContent(content) {
  if (typeof content !== "string") {
    return {isValid: false, message: "Content must be a string."};
  }

  const lowerCaseContent = content.toLowerCase();

  for (const word of EXPLICIT_WORDS) {
    if (lowerCaseContent.includes(word)) {
      return {
        isValid: false,
        message: "Content contains inappropriate language.",
      };
    }
  }

  if (content.length > MAX_CHAR_LIMIT) {
    return {
      isValid: false,
      message: `Content exceeds ${MAX_CHAR_LIMIT} character limit.`,
    };
  }

  return {isValid: true, message: "Content is valid."};
}

/**
 * Calculates the average rating for a given array of reviews.
 * @param {Array<Object>} reviews - An array of review objects, each with a
 * 'stars' property.
 * @return {number} The calculated average rating, or 0 if no reviews.
 */
function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) {
    return 0;
  }
  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  return parseFloat((totalStars / reviews.length).toFixed(1));
}


export const addReview = functions.https.onCall(async (data, context) => {
  logger.info(
      "addReview function called",
      {data, auth: context.auth},
  );

  if (!context.auth) {
    logger.warn("Unauthenticated call to addReview");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be logged in to leave a review.",
    );
  }

  const {hospitalId, doctorId, stars, comment} = data;
  const userId = context.auth.uid;

  if (!hospitalId || typeof hospitalId !== "string" ||
        !doctorId || typeof doctorId !== "string" ||
        !stars || typeof stars !== "number" || stars < 1 || stars > 5 ||
        typeof comment !== "string") {
    logger.error("Invalid input for addReview",
        {hospitalId, doctorId, stars, comment});
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing or invalid review data.",
    );
  }

  const filteredComment = filterContent(comment);
  if (!filteredComment.isValid) {
    logger.error("Inappropriate content detected in review",
        {userId, comment});
    throw new functions.https.HttpsError(
        "invalid-argument",
        filteredComment.message,
    );
  }

  const doctorRef = db.collection("artifacts")
      .doc(process.env.APP_ID)
      .collection("public").doc("data")
      .collection("hospitals").doc(hospitalId)
      .collection("doctors").doc(doctorId);

  const newReview = {
    userId: userId,
    comment: filteredComment.isValid ? comment :
            filteredComment.message,
    stars: stars,
    date: new Date().toISOString(),
    comments: [],
  };

  try {
    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(doctorRef);

      if (!doc.exists) {
        logger.error("Doctor document does not exist for review",
            {hospitalId, doctorId});
        throw new functions.https.HttpsError(
            "not-found",
            "Doctor not found.",
        );
      }

      const currentReviews = doc.data().reviews || [];
      currentReviews.push(newReview);

      const newAverageRating = calculateAverageRating(currentReviews);

      transaction.update(doctorRef, {
        reviews: currentReviews,
        averageRating: newAverageRating,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    logger.info("Review added successfully", {userId, doctorId, stars});
    return {status: "success", message: "Review added successfully!"};
  } catch (error) {
    logger.error("Error adding review:", error);
    if (error.code) {
      throw error;
    }
    throw new functions.https.HttpsError(
        "internal",
        "Failed to add review.",
        error.message,
    );
  }
});

export const addCommentToReview = functions.https.onCall(async (data, context) => {
  logger.info("addCommentToReview function called", {data, auth: context.auth});

  if (!context.auth) {
    logger.warn("Unauthenticated call to addCommentToReview");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be logged in to add a comment.",
    );
  }

  const {hospitalId, doctorId, reviewIndex, commentText} = data;
  const userId = context.auth.uid;

  if (!hospitalId || typeof hospitalId !== "string" ||
        !doctorId || typeof doctorId !== "string" ||
        typeof reviewIndex !== "number" || reviewIndex < 0 ||
        !commentText || typeof commentText !== "string") {
    logger.error("Invalid input for addCommentToReview",
        {hospitalId, doctorId, reviewIndex, commentText});
    throw new functions.https.HttpsError(
            "invalid-argument",
            "Missing or invalid comment data.",
        );
  }

  const filteredComment = filterContent(commentText);
  if (!filteredComment.isValid) {
    logger.error("Inappropriate content detected in comment",
        {userId, commentText});
    throw new functions.https.HttpsError(
        "invalid-argument",
        filteredComment.message,
    );
  }

  const doctorRef = db.collection("artifacts")
      .doc(process.env.APP_ID)
      .collection("public").doc("data")
      .collection("hospitals").doc(hospitalId)
      .collection("doctors").doc(doctorId);

  const newComment = {
    userId: userId,
    text: filteredComment.isValid ? commentText :
            filteredComment.message,
    date: new Date().toISOString(),
  };

  try {
    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(doctorRef);

      if (!doc.exists) {
        logger.error("Doctor document does not exist for comment",
            {hospitalId, doctorId});
        throw new functions.https.HttpsError(
            "not-found",
            "Doctor not found.",
        );
      }

      const currentReviews = doc.data().reviews || [];

      if (reviewIndex >= currentReviews.length || reviewIndex < 0) {
        logger.error("Invalid review index for comment",
            {reviewIndex, totalReviews: currentReviews.length});
        throw new functions.https.HttpsError(
            "invalid-argument",
            "Review not found at the specified index.",
        );
      }

      const targetReview = currentReviews[reviewIndex];
      if (!targetReview.comments) {
        targetReview.comments = [];
      }

      targetReview.comments.push(newComment);

      transaction.update(doctorRef, {
        reviews: currentReviews,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    logger.info("Comment added successfully", {userId, doctorId, reviewIndex});
    return {status: "success", message: "Comment added successfully!"};
  } catch (error) {
    logger.error("Error adding comment:", error);
    if (error.code) {
      throw error;
    }
    throw new functions.https.HttpsError(
        "internal",
        "Failed to add comment.",
        error.message,
    );
  }
});

export const sendContactEmail = functions.https.onCall(async (data, context) => {
  logger.info("sendContactEmail function called", {data});

  const {name, email, subject, message, recaptchaToken} = data;

  if (!name || !email || !subject || !message || !recaptchaToken) {
    logger.error(
        "Invalid input for sendContactEmail: Missing required fields " +
        "or reCAPTCHA token.",
    );
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing required form fields or reCAPTCHA token.",
    );
  }

  try {
    if (!process.env.GCP_PROJECT_ID ||
        !process.env.RECAPTCHA_SITE_KEY) {
      logger.error(
          "Firebase Functions config missing GCP Project ID or " +
          "reCAPTCHA Site Key.",
      );
      throw new functions.https.HttpsError(
          "internal",
          "Server configuration error: reCAPTCHA keys missing.",
      );
    }

    const projectPath = recaptchaClient.projectPath(
        process.env.GCP_PROJECT_ID,
    );
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

    if (!response.tokenProperties.valid) {
      logger.warn(
          "reCAPTCHA verification failed:",
          response.tokenProperties.invalidReason,
      );
      throw new functions.https.HttpsError(
          "unauthenticated",
          "reCAPTCHA verification failed. Invalid token.",
      );
    }

    if (response.riskAnalysis.score < 0.5) {
      logger.warn(
          "reCAPTCHA score too low:",
          response.riskAnalysis.score,
          "for action:",
          response.tokenProperties.action,
      );
      throw new functions.https.HttpsError(
          "unauthenticated",
          "reCAPTCHA score too low. Likely a bot.",
      );
    }

    logger.info(
        "reCAPTCHA verification successful. Score:",
        response.riskAnalysis.score,
    );
  } catch (recaptchaError) {
    logger.error(
        "Error during reCAPTCHA verification on server:",
        recaptchaError,
    );
    throw new functions.https.HttpsError(
        "internal",
        "Server-side reCAPTCHA verification failed.",
        recaptchaError.message,
    );
  }

  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: "rnteallc@gmail.com",
    subject: `RNTea Contact Form: ${subject}`,
    html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            <br/>
            <p>This message was sent from the RNTea contact form.</p>
        `,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    logger.info("Contact email sent successfully to rnteallc@gmail.com");
    return {success: true, message: "Your message has been sent successfully!"};
  } catch (error) {
    logger.error("Error sending contact email:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Failed to send message via email service.",
        error.message,
    );
  }
});

// ✅ HIPAA PHI Detection Function
export const checkHIPAA = functions.https.onCall(async (data, context) => {
  const { text } = data;

  if (!text || typeof text !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "Text is required.");
  }

  try {
    // 🔗 Replace this with your actual Cloud Run Presidio URL
    const PRESIDIO_API_URL = "https://presidio-analyzer-806310857835.us-central1.run.app/analyze";


    const response = await fetch(PRESIDIO_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, language: "en" }),
    });

    if (!response.ok) {
      throw new Error(`Presidio API error: ${response.statusText}`);
    }

    const entities = await response.json();

    // ✅ Risk scoring logic
    let score = 0;
    const weights = {
      PERSON: 20,
      DATE_TIME: 20,
      PHONE_NUMBER: 30,
      US_SSN: 50,
      LOCATION: 15,
      EMAIL_ADDRESS: 25,
    };

    entities.forEach((entity) => {
      score += weights[entity.entity_type] || 10;
    });

    if (score > 100) score = 100;

    return {
      score,
      status:
        score >= 75
          ? "Critical"
          : score >= 50
          ? "High"
          : score >= 25
          ? "Moderate"
          : "Safe",
      entities,
    };
  } catch (error) {
    console.error("Error checking HIPAA compliance:", error);
    throw new functions.https.HttpsError("internal", "Failed to check HIPAA compliance.");
  }
});
