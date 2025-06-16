// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

// Initialize Firebase Admin SDK
admin.initializeApp();

// --- IMPORTANT ---
// Make sure you have 'node-fetch' installed in your functions directory:
// 1. Navigate to the functions directory: cd functions
// 2. Install node-fetch: npm install node-fetch@2
// 3. Go back to your project root: cd ..
// ---

/**
 * Cloud Function to handle contact form submissions and verify reCAPTCHA.
 * This function is callable from your client-side application.
 */
exports.submitContactForm = functions.https.onCall(async (data, context) => {
  // Extract data sent from the client
  const {name, email, subject, message, recaptchaToken} = data;

  // 1. Basic validation of incoming data
  if (!name || !email || !subject || !message || !recaptchaToken) {
    // Use HttpsError to send structured errors back to the client
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing form data or reCAPTCHA token.",
    );
  }

  // 2. Retrieve the reCAPTCHA Secret Key from Firebase environment config
  const secretKey = functions.config().recaptcha.secretkey;
  if (!secretKey) {
    functions.logger.error(
        "reCAPTCHA secret key not configured in Firebase functions config.",
    );
    throw new functions.https.HttpsError(
        "internal",
        "Server configuration error. Please try again later.",
    );
  }

  // 3. Prepare the URL for Google's reCAPTCHA verification API
  const verificationUrl =
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}` +
    `&response=${recaptchaToken}`;

  try {
    // 4. Send the reCAPTCHA token to Google for verification
    const recaptchaResponse = await fetch(verificationUrl, {
      method: "POST", // Google's API expects a POST request
    });
    const recaptchaData = await recaptchaResponse.json(); // Parse the JSON

    // 5. Check if reCAPTCHA verification was successful
    if (!recaptchaData.success) {
      functions.logger.warn(
          "reCAPTCHA verification failed:",
          email,
          recaptchaData["error-codes"],
      );
      // Return an authentication error if reCAPTCHA fails
      throw new functions.https.HttpsError(
          "unauthenticated",
          "reCAPTCHA verification failed. Please re-verify.",
      );
    }

    // Optional: For reCAPTCHA v3, you would also check recaptchaData.score here
    // if (recaptchaData.score < 0.5) {
    //     functions.logger.warn(
    //         'reCAPTCHA score too low:', email, recaptchaData.score // Line 56
    //     );
    //     throw new functions.https.HttpsError('permission-denied',
    //         'reCAPTCHA score too low. Please try again.');
    // }

    // 6. If reCAPTCHA is successful, proceed to process the form data
    // Example: Save the contact form submission to a Firestore collection
    const contactFormRef = admin.firestore().collection("contactSubmissions");
    await contactFormRef.add({
      name: name,
      email: email,
      subject: subject,
      message: message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      // Optionally, include reCAPTCHA score if using v3
      // recaptchaScore: recaptchaData.score,
    });

    // 7. Return a success response to the client
    return {success: true, message: "Contact form submitted successfully!"};
  } catch (error) {
    // Catch any errors during the process (fetch, Firestore, HttpsError)
    functions.logger.error(
        "Form submission/reCAPTCHA verification error:",
        error,
    );

    // Re-throw specific HttpsErrors so the client receives them
    if (error instanceof functions.https.HttpsError) {
      throw error;
    }
    // For unexpected errors, return a generic internal error message
    throw new functions.https.HttpsError(
        "internal",
        "An unexpected server error occurred. Please try again.",
    );
  }
});
