// src/components/AuthModal.jsx
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { FirebaseContext } from '../App';
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    setDoc
} from 'firebase/firestore';
import {
    fetchSignInMethodsForEmail,
    RecaptchaVerifier, // NEW: Import RecaptchaVerifier
    signInWithPhoneNumber // NEW: Import signInWithPhoneNumber
} from 'firebase/auth';

const AuthModal = ({ onClose }) => {
    const {
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithApple,
        linkAnonymousWithEmailPassword,
        linkAnonymousWithApple,
        auth, // Access auth instance to check if user is anonymous
        currentUserId, // To display user ID
        signInWithGoogle,
        db, // Access db instance from context
        appId // Access appId from context
    } = useContext(FirebaseContext);

    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input
    const [message, setMessage] = useState(''); // Local message for modal
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [currentStep, setCurrentStep] = useState(0); // State for carousel step (0: email, 1: password/confirm, 2: phoneNumber)

    // NEW states for phone verification
    const [verificationId, setVerificationId] = useState(null); // Stores confirmationResult after sending OTP
    const [otp, setOtp] = useState(''); // User entered OTP
    const [isSendingOtp, setIsSendingOtp] = useState(false); // Loading state for sending OTP
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false); // Loading state for verifying OTP


    const showLocalMessage = useCallback((text, type) => {
        setMessage(text);
        setMessageType(type);
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 5000);
    }, []);

    const isAnonymous = auth?.currentUser?.isAnonymous;

    // Function to check if email already exists
    const checkEmailExists = useCallback(async (emailToCheck) => {
        console.log("checkEmailExists: Checking email:", emailToCheck); // Debug log
        console.log("checkEmailExists: Current auth object:", auth); // Debug log
        if (!auth) {
            console.error("Firebase Auth not initialized for email check.");
            return false;
        }
        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, emailToCheck);
            console.log("checkEmailExists: Sign-in methods for email:", signInMethods); // Debug log
            return signInMethods.length > 0; // True if any sign-in methods exist for this email
        } catch (error) {
            console.error("Error checking email existence:", error);
            console.error("Full error object:", JSON.stringify(error, null, 2)); // Debug log
            return false;
        }
    }, [auth]);

    // NEW: useEffect for reCAPTCHA initialization
    useEffect(() => {
        if (!isLogin && currentStep === 2 && auth && !window.recaptchaVerifier) {
            console.log("Initializing reCAPTCHA Verifier...");
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible', // or 'normal' if you want a visible checkbox
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    console.log("reCAPTCHA callback fired:", response);
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    showLocalMessage('reCAPTCHA expired. Please try sending the code again.', 'error');
                    setVerificationId(null); // Reset verification flow
                }
            });
            window.recaptchaVerifier.render().then((widgetId) => {
                console.log("reCAPTCHA rendered with widget ID:", widgetId);
            });
        }

        // Cleanup function
        return () => {
            if (window.recaptchaVerifier) {
                console.log("Destroying reCAPTCHA Verifier...");
                // window.recaptchaVerifier.clear(); // This method is not always available or necessary with invisible reCAPTCHA
                delete window.recaptchaVerifier; // Clean up the global reference
            }
        };
    }, [isLogin, currentStep, auth, showLocalMessage]);


    // Function to handle sending the OTP
    const handleSendOtp = useCallback(async () => {
        setMessage('');
        if (!phoneNumber.trim()) {
            showLocalMessage('Please enter your phone number.', 'error');
            return;
        }
        // NEW: Basic client-side validation for E.164 format
        if (!phoneNumber.startsWith('+') || phoneNumber.trim().length < 10) { // Minimal length check
            showLocalMessage('Phone number must start with a "+" and include country code (e.g., +11234567890).', 'error');
            return;
        }

        if (!auth) {
            showLocalMessage('Authentication service not ready.', 'error');
            return;
        }
        if (!window.recaptchaVerifier) {
            showLocalMessage('reCAPTCHA not initialized. Please try again.', 'error');
            return;
        }

        setIsSendingOtp(true);
        try {
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
            setVerificationId(confirmation);
            showLocalMessage('Verification code sent!', 'success');
        } catch (error) {
            console.error("Error sending OTP:", error);
            showLocalMessage(`Failed to send code: ${error.message}`, 'error');
            setVerificationId(null); // Reset if sending fails
        } finally {
            setIsSendingOtp(false);
        }
    }, [phoneNumber, auth, showLocalMessage]);

    // Function to handle verifying the OTP
    const handleVerifyOtp = useCallback(async () => {
        setMessage('');
        if (!otp.trim()) {
            showLocalMessage('Please enter the verification code.', 'error');
            return;
        }
        if (!verificationId) {
            showLocalMessage('No verification request found. Please send the code first.', 'error');
            return;
        }

        setIsVerifyingOtp(true);
        try {
            const userCredential = await verificationId.confirm(otp);
            const user = userCredential.user;

            if (db && user && appId) {
                try {
                    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid), {
                        email: user.email,
                        phoneNumber: phoneNumber,
                        // createdAt: serverTimestamp()
                    }, { merge: true });
                    console.log("User profile with phone number info saved.");
                } catch (dbError) {
                    console.error("Error saving user phone number info:", dbError);
                    showLocalMessage('Account created, but failed to save phone number.', 'warning');
                }
            } else {
                console.warn("Firestore DB, user, or appId not available, phone number info not saved.");
            }

            showLocalMessage('Phone number verified and account created!', 'success');
            onClose();

        } catch (error) {
            console.error("Error verifying OTP:", error);
            showLocalMessage(`Failed to verify code: ${error.message}`, 'error');
        } finally {
            setIsVerifyingOtp(false);
        }
    }, [otp, verificationId, db, appId, phoneNumber, showLocalMessage, onClose]);


    // Function to handle moving to the next step in the sign-up carousel
    const handleNextStep = useCallback(async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        console.log("handleNextStep: Current step:", currentStep, "isLogin:", isLogin);

        if (currentStep === 0) {
            // Validate email for the first step
            if (!email) {
                showLocalMessage('Please enter your email.', 'error');
                return;
            }
            // Check if email already exists before proceeding to the next step for sign-up
            if (!isLogin) { // Only perform this check if we are in sign-up mode
                const emailExists = await checkEmailExists(email);
                console.log("handleNextStep: Email exists check result:", emailExists);
                if (emailExists) {
                    showLocalMessage('This email is already registered. Please sign in or use a different email.', 'error');
                    return;
                }
            }
        } else if (currentStep === 1) {
            // Validate password and confirmation for the second step
            if (!password || !confirmPassword) {
                showLocalMessage('Please enter and confirm your password.', 'error');
                return;
            }
            if (password !== confirmPassword) {
                showLocalMessage('Passwords do not match.', 'error');
                return;
            }
        } else if (currentStep === 2) {
            // This step now triggers OTP sending, not final sign-up
            if (!phoneNumber.trim()) {
                showLocalMessage('Please enter your phone number.', 'error');
                return;
            }
            // If OTP not yet sent, send it.
            if (!verificationId) {
                await handleSendOtp();
            }
            return; // Always return here, as the next action is OTP input/verification
        }

        // If validation passes and not on the final step, move to the next step
        if (currentStep < 2) {
            setCurrentStep(prev => prev + 1);
        }
        // Final sign-up is now handled by handleVerifyOtp, not directly by handleNextStep
    }, [email, password, confirmPassword, phoneNumber, currentStep, isLogin, showLocalMessage, checkEmailExists, handleSendOtp, verificationId]);


    // Function to handle moving to the previous step in the sign-up carousel
    const handlePrevStep = useCallback(() => {
        setMessage(''); // Clear previous messages
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            setVerificationId(null); // Reset phone verification if going back
            setOtp(''); // Clear OTP if going back
        }
    }, [currentStep]);


    // The main form submission handler
    const handleAuthAction = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setMessage(''); // Clear previous messages

        if (isLogin) {
            // Login logic (remains the same)
            if (!email || !password) {
                showLocalMessage('Please enter both email and password.', 'error');
                return;
            }
            if (isAnonymous) {
                const user = await linkAnonymousWithEmailPassword(email, password);
                if (user) {
                    showLocalMessage('Anonymous account linked and signed in!', 'success');
                    onClose();
                } else {
                    try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password);
                        showLocalMessage('Signed in successfully!', 'success');
                        onClose();
                    } catch (signInError) {
                        showLocalMessage(`Login Failed: ${signInError.message}`, 'error');
                    }
                }
            } else {
                const user = await signInWithEmailPassword(email, password);
                if (user) {
                    showLocalMessage('Signed in successfully!', 'success');
                    onClose();
                }
            }
        } else {
            // Sign Up logic: This button handles all actions based on step
            if (currentStep < 2) { // If not on the last step yet
                await handleNextStep(e); // Advance step or send OTP
            } else if (currentStep === 2 && !verificationId) { // On phone step, but OTP not sent yet
                 await handleSendOtp(); // Send OTP
            } else if (currentStep === 2 && verificationId) { // On phone step, OTP sent, now verify
                await handleVerifyOtp(); // Verify OTP
            }
        }
    };


    // Google Sign-in handler
    const handleGoogleSignIn = async () => {
        const user = await signInWithGoogle();
        if (user) {
            onClose();
        }
    };

    // Apple Sign-in handler
    const handleAppleSignIn = async () => {
        const user = await signInWithApple();
        if (user) {
            onClose();
        }
    };

    // Function to toggle between login and signup forms
    const toggleAuthMode = useCallback(() => {
        setIsLogin(prev => !prev);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNumber('');
        setMessage('');
        setMessageType('');
        setCurrentStep(0); // Reset carousel step when switching modes
        setVerificationId(null); // Reset phone verification state
        setOtp(''); // Clear OTP
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear(); // Clear reCAPTCHA if toggling mode
            delete window.recaptchaVerifier; // Remove global reference
        }
    }, []);


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4 font-inter">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold transition-transform duration-200 transform hover:scale-110"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </h2>

                {message && (
                    <div className={`p-3 mb-4 rounded-md text-center text-sm font-medium
                        ${messageType === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleAuthAction} className="space-y-4">
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentStep * 100}%)` }}
                        >
                            {/* Step 0: Email */}
                            <div className="w-full flex-shrink-0 space-y-4 p-4">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent focus:shadow-md"
                                        placeholder="your.email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Step 1: Password and Confirm Password */}
                            <div className="w-full flex-shrink-0 space-y-4 p-4">
                                <div>
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent focus:shadow-md"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent focus:shadow-md"
                                        placeholder="********"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required={!isLogin}
                                    />
                                </div>
                            </div>

                            {/* Step 2: Phone Number Input & OTP Verification */}
                            <div className="w-full flex-shrink-0 space-y-4 p-4">
                                {!verificationId ? ( // Show phone input if OTP not sent
                                    <div className="relative">
                                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent focus:shadow-md"
                                            placeholder="e.g., +11234567890" // Updated placeholder
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            required={!isLogin}
                                            disabled={isSendingOtp} // Disable while sending OTP
                                        />
                                        <p className="text-xs text-gray-500 mt-1">For human verification purposes only! Include country code (e.g., +1).</p> {/* Updated instruction */}
                                        <div id="recaptcha-container" className="mt-4"></div> {/* reCAPTCHA container */}
                                    </div>
                                ) : ( // Show OTP input if OTP sent
                                    <div className="relative">
                                        <label htmlFor="otp" className="block text-gray-700 text-sm font-medium mb-2">Enter Verification Code</label>
                                        <input
                                            type="text"
                                            id="otp"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent focus:shadow-md"
                                            placeholder="e.g., 123456"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                            disabled={isVerifyingOtp} // Disable while verifying OTP
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Code sent to {phoneNumber}.</p>
                                        <button
                                            type="button"
                                            onClick={handleSendOtp} // Allow resending code
                                            disabled={isSendingOtp || isVerifyingOtp}
                                            className="w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mt-2"
                                        >
                                            {isSendingOtp ? 'Sending...' : 'Resend Code'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel Indicators */}
                    {!isLogin && (
                        <div className="flex justify-center space-x-2 mt-4">
                            {[0, 1, 2].map((stepIdx) => (
                                <span
                                    key={stepIdx}
                                    className={`block w-3 h-3 rounded-full transition-colors duration-300
                                        ${currentStep === stepIdx ? 'bg-[#CC5500] scale-125' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'}`}
                                    onClick={() => setCurrentStep(stepIdx)}
                                    aria-label={`Go to step ${stepIdx + 1}`}
                                ></span>
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons for Signup Carousel (Previous only) */}
                    {!isLogin && (
                        <div className="flex justify-start mt-4"> {/* Changed to justify-start as 'Next' is now main submit */}
                            {currentStep > 0 && (
                                <button
                                    type="button"
                                    onClick={handlePrevStep}
                                    className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                >
                                    Previous
                                </button>
                            )}
                        </div>
                    )}

                    {/* Main Auth Button (Sign In or dynamic Sign Up action) */}
                    <button
                        type="submit" // This button will now always submit the form
                        className={`w-full font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-4
                            ${isLogin
                                ? 'bg-[#FFDEB5] text-gray-800 hover:bg-[#FFC982]' // Beige for Sign In
                                : 'bg-[#CC5500] text-white hover:bg-[#A84500]' // Burnt orange for Sign Up actions
                            }`}
                        disabled={
                            (isLogin && (isSendingOtp || isVerifyingOtp)) || // Disable login if OTP process is active
                            (!isLogin && currentStep === 2 && !verificationId && isSendingOtp) || // Disable send code button while sending
                            (!isLogin && currentStep === 2 && verificationId && isVerifyingOtp) // Disable verify code button while verifying
                        }
                    >
                        {isLogin
                            ? 'Sign In'
                            : currentStep === 0
                                ? 'Next'
                                : currentStep === 1
                                    ? 'Next'
                                    : currentStep === 2 && !verificationId
                                        ? (isSendingOtp ? 'Sending Code...' : 'Send Code')
                                        : (isVerifyingOtp ? 'Verifying...' : 'Verify Code')
                        }
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={toggleAuthMode} // Use the new toggleAuthMode function
                            className="text-[#CC5500] hover:underline font-semibold transition-colors duration-200" // Burnt orange for toggle button
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                    {isLogin && (
                        <button
                            onClick={() => showLocalMessage('Password reset functionality not yet implemented.', 'info')}
                            className="text-[#CC5500] hover:underline text-sm mt-2 transition-colors duration-200" // Burnt orange for Forgot Password
                        >
                            Forgot Password?
                        </button>
                    )}
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6 space-y-4">
                    <p className="text-center text-gray-600">Or continue with</p>
                    <div className="flex justify-center gap-4">
                        {/* Google Sign-in Button */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-full shadow-md hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.0003 4.75C14.0273 4.75 15.8053 5.438 17.1523 6.694L18.9643 4.882C17.0183 3.033 14.6063 2 12.0003 2C8.87533 2 6.07133 3.453 4.38633 5.859L6.04633 7.153C6.88233 5.761 8.39633 4.75 12.0003 4.75Z" fill="#EA4335"/>
                                <path d="M23.4999 12.272C23.4999 11.492 23.4249 10.721 23.2999 9.969H12.2009V14.51H18.7959C18.5919 15.534 17.9739 16.395 17.1199 16.989L18.7959 18.293C19.8669 17.335 20.6699 16.035 21.1899 14.51L23.4999 12.272Z" fill="#4285F4"/>
                                <path d="M6.04625 16.847L4.38625 18.141C5.97125 20.547 8.87525 22 12.0003 22C14.5943 22 17.0003 20.967 18.9353 19.14L17.1433 17.714C15.8053 18.528 14.0273 19.002 12.0003 19.002C8.39633 19.002 6.88233 17.991 6.04625 16.847Z" fill="#34A853"/>
                                <path d="M4.70725 14.51L2.39725 16.75C1.61525 15.226 1.12725 13.626 1.12725 12C1.12725 10.374 1.61525 8.774 2.39725 7.25L4.70725 9.488C4.24925 10.492 3.99925 11.25 3.99925 12C3.99925 12.75 4.24925 13.508 4.70725 14.51Z" fill="#FBBC04"/>
                            </svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
