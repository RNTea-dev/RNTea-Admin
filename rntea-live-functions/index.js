/**
 * Firebase Cloud Functions for RNTea Application
 *
 * This file contains callable Cloud Functions to securely handle:
 * 1. Adding new reviews to doctors.
 * 2. Adding comments to existing reviews.
 *
 * All sensitive write operations are performed on the server-side
 * to ensure data integrity and enforce security rules.
 */

// Import necessary Firebase modules
const functions = require("firebase-functions");
const admin = require("firebase-admin"); // Firebase Admin SDK
const logger = require("firebase-functions/logger"); // For structured logging

// Initialize Firebase Admin SDK
// This allows your functions to interact with Firestore, Auth, etc.,
// with elevated privileges.
admin.initializeApp();

// Get a reference to the Firestore database
const db = admin.firestore();

// --- Constants and Utility Functions (Server-Side) ---
// These are duplicated from the frontend but are essential for
// server-side validation.
const EXPLICIT_WORDS = [
  "fuck", "shit", "asshole", "bitch", "cunt", "damn", "hell",
]; // Add more as needed
const MAX_CHAR_LIMIT = 250; // Max characters for comments and reviews

/**
 * Filters content for expletives and enforces a character limit.
 * This is a server-side version for security and redundancy.
 * @param {string} content - The string content to filter.
 * @return {{isValid: boolean, message: string}} - Object indicating validity
 * and a message.
 */
function filterContent(content) {
  if (typeof content !== "string") {
    return {isValid: false, message: "Content must be a string."};
  }

  const lowerCaseContent = content.toLowerCase();

  // Check for expletives
  for (const word of EXPLICIT_WORDS) {
    if (lowerCaseContent.includes(word)) {
      return {
        isValid: false,
        message: "Content contains inappropriate language.",
      };
    }
  }

  // Check character limit
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
  // Return average rounded to 1 decimal place
  return parseFloat((totalStars / reviews.length).toFixed(1));
}

// --- Callable Cloud Functions ---

/**
 * Callable Cloud Function to add a new review for a doctor.
 * This function performs server-side validation and atomic update.
 *
 * @param {Object} data - The data sent from the client.
 * @param {string} data.hospitalId - ID of the hospital.
 * @param {string} data.doctorId - ID of the doctor.
 * @param {number} data.stars - Star rating for the review (1-5).
 * @param {string} data.comment - The review text.
 * @param {Object} context - The Cloud Function context, containing
 * authentication info.
 * @return {Object} A success or error message.
 */
exports.addReview = functions.https.onCall(async (data, context) => {
  logger.info("addReview function called", {data, auth: context.auth});

  // 1. Authentication Check: Ensure the user is logged in.
  if (!context.auth) {
    logger.warn("Unauthenticated call to addReview");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be logged in to leave a review.",
    );
  }

  const {hospitalId, doctorId, stars, comment} = data;
  const userId = context.auth.uid; // Get authenticated user's ID

  // 2. Input Validation
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

  // 3. Content Filtering (Server-Side)
  const filteredComment = filterContent(comment);
  if (!filteredComment.isValid) {
    logger.error("Inappropriate content detected in review",
        {userId, comment});
    throw new functions.https.HttpsError(
        "invalid-argument",
        filteredComment.message,
    );
  }

  // Define the path to the doctor document
  const doctorRef = db.collection("artifacts")
      .doc(functions.config().app_id) // Access app_id from functions config
      .collection("public").doc("data")
      .collection("hospitals").doc(hospitalId)
      .collection("doctors").doc(doctorId);

  const newReview = {
    userId: userId, // Store the UID of the user who left the review
    // Use original if valid, else filtered message
    comment: filteredComment.message.isValid ? comment :
            filteredComment.message,
    stars: stars,
    date: new Date().toISOString(), // Store as ISO string
    comments: [], // Initialize with an empty comments array
  };

  try {
    // Use a transaction to ensure atomic updates for reviews and average rating
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

      // Get current reviews or an empty array
      const currentReviews = doc.data().reviews || [];
      currentReviews.push(newReview); // Add the new review

      const newAverageRating = calculateAverageRating(currentReviews);

      // Update the doctor document
      transaction.update(doctorRef, {
        reviews: currentReviews,
        averageRating: newAverageRating,
        // Timestamp of last update
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    logger.info("Review added successfully", {userId, doctorId, stars});
    return {status: "success", message: "Review added successfully!"};
  } catch (error) {
    logger.error("Error adding review:", error);
    if (error.code) { // If it's an HttpsError, re-throw it
      throw error;
    }
    // Generic error for unexpected issues
    throw new functions.https.HttpsError(
        "internal",
        "Failed to add review.",
        error.message,
    );
  }
});

/**
 * Callable Cloud Function to add a comment to an existing review for a doctor.
 * This function performs server-side validation and transactional update.
 *
 * @param {Object} data - The data sent from the client.
 * @param {string} data.hospitalId - ID of the hospital.
 * @param {string} data.doctorId - ID of the doctor.
 * @param {number} data.reviewIndex - The index of the review to comment on.
 * @param {string} data.commentText - The text of the new comment.
 * @param {Object} context - The Cloud Function context, containing
 * authentication info.
 * @return {Object} A success or error message.
 */
exports.addCommentToReview = functions.https.onCall(async (data, context) => {
  logger.info("addCommentToReview function called", {data, auth: context.auth});

  // 1. Authentication Check: Ensure the user is logged in.
  if (!context.auth) {
    logger.warn("Unauthenticated call to addCommentToReview");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be logged in to add a comment.",
    );
  }

  const {hospitalId, doctorId, reviewIndex, commentText} = data;
  const userId = context.auth.uid; // Get authenticated user's ID

  // 2. Input Validation
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

  // 3. Content Filtering (Server-Side)
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
      .doc(functions.config().app_id)
      .collection("public").doc("data")
      .collection("hospitals").doc(hospitalId)
      .collection("doctors").doc(doctorId);

  const newComment = {
    userId: userId,
    // Use original if valid, else filtered message
    text: filteredComment.message.isValid ? commentText :
            filteredComment.message,
    date: new Date().toISOString(),
  };

  try {
    // Use a transaction to ensure atomicity and prevent race conditions when
    // updating nested arrays
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

      // Check if reviewIndex is valid
      if (reviewIndex >= currentReviews.length || reviewIndex < 0) {
        logger.error("Invalid review index for comment",
            {reviewIndex, totalReviews: currentReviews.length});
        throw new functions.https.HttpsError(
            "invalid-argument",
            "Review not found at the specified index.",
        );
      }

      // Get the target review and ensure its comments array exists
      const targetReview = currentReviews[reviewIndex];
      if (!targetReview.comments) {
        targetReview.comments = []; // Initialize if it doesn't exist
      }

      // Add the new comment
      targetReview.comments.push(newComment);

      // Update the doctor document with the modified reviews array
      transaction.update(doctorRef, {
        reviews: currentReviews,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

    logger.info("Comment added successfully", {userId, doctorId, reviewIndex});
    return {status: "success", message: "Comment added successfully!"};
  } catch (error) {
    logger.error("Error adding comment:", error);
    if (error.code) { // If it's an HttpsError, re-throw it
      throw error;
    }
    throw new functions.https.HttpsError(
        "internal",
        "Failed to add comment.",
        error.message,
    );
  }
});
