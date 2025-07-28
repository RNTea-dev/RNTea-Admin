// src/components/AuthModal.jsx
import React, { useState, useContext, useCallback, useEffect, useRef } from 'react';
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
    RecaptchaVerifier,
    signInWithPhoneNumber,
    updateProfile, // Import updateProfile
    createUserWithEmailAndPassword // Import createUserWithEmailAndPassword
} from 'firebase/auth';

const AuthModal = ({ onClose }) => {
    const {
        signUpWithEmailPassword: signUpWithEmailPasswordFromContext, // Renamed to avoid conflict
        signInWithEmailPassword,
        signInWithApple,
        linkAnonymousWithEmailPassword,
        linkAnonymousWithApple,
        auth,
        currentUserId,
        signInWithGoogle,
        db,
        appId
    } = useContext(FirebaseContext);

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+1'); // Initialize with +1
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [currentStep, setCurrentStep] = useState(0); // 0: Email/Username, 1: Password, 2: Phone/OTP

    const [verificationId, setVerificationId] = useState(null);
    const [otp, setOtp] = useState('');
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    // Use useRef to manage reCAPTCHA instance and its widget ID
    const recaptchaVerifierRef = useRef(null);
    const recaptchaWidgetIdRef = useRef(null);


    const showLocalMessage = useCallback((text, type) => {
        setMessage(text);
        setMessageType(type);
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 5000);
    }, []);

    const isAnonymous = auth?.currentUser?.isAnonymous;

    const checkEmailExists = useCallback(async (emailToCheck) => {
        console.log("checkEmailExists: Checking email:", emailToCheck);
        console.log("checkEmailExists: Current auth object:", auth);
        if (!auth) {
            console.error("Firebase Auth not initialized for email check.");
            return false;
        }
        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, emailToCheck);
            console.log("checkEmailExists: Sign-in methods for email:", signInMethods);
            return signInMethods.length > 0;
        } catch (error) {
            console.error("Error checking email existence:", error);
            console.error("Full error object:", JSON.stringify(error, null, 2));
            return false;
        }
    }, [auth]);

    // MODIFIED: useEffect for reCAPTCHA initialization and cleanup
    useEffect(() => {
        // Only initialize reCAPTCHA if we are in signup mode, on the phone step,
        // auth is available, and reCAPTCHA is not yet initialized.
        if (!isLogin && currentStep === 2 && auth && !recaptchaVerifierRef.current) {
            console.log("AuthModal: Initializing reCAPTCHA Verifier...");

            // Ensure grecaptcha script is loaded and ready before creating RecaptchaVerifier
            if (typeof window.grecaptcha === 'undefined' || !window.grecaptcha.ready) {
                console.warn("AuthModal: grecaptcha script not fully loaded yet. Retrying initialization...");
                const timeoutId = setTimeout(() => {
                    // Trigger a re-render to re-evaluate this useEffect
                    setCurrentStep(prev => prev); // No actual step change, just to trigger re-render
                }, 500);
                return () => clearTimeout(timeoutId); // Cleanup timeout
            }

            window.grecaptcha.ready(() => {
                if (recaptchaVerifierRef.current) { // Double-check inside ready callback
                    console.log("AuthModal: reCAPTCHA Verifier already exists, skipping re-initialization.");
                    return;
                }

                console.log("AuthModal: grecaptcha is ready. Creating RecaptchaVerifier...");
                try {
                    const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                        'size': 'invisible', // Invisible reCAPTCHA
                        'callback': (response) => {
                            console.log("AuthModal: reCAPTCHA callback fired (solved):", response);
                        },
                        'expired-callback': () => {
                            console.log("AuthModal: reCAPTCHA expired.");
                            showLocalMessage('Verification expired. Please try again.', 'error');
                            setVerificationId(null);
                            // Do NOT reset grecaptcha here, let the main cleanup handle it or user re-send
                        },
                        'error-callback': (error) => {
                            console.error("AuthModal: reCAPTCHA error callback:", error);
                            showLocalMessage('Verification error. Please try again.', 'error');
                            setVerificationId(null);
                            // Do NOT reset grecaptcha here
                        }
                    });
                    recaptchaVerifierRef.current = verifier; // Store the verifier instance in the ref

                    verifier.render().then((widgetId) => {
                        console.log("AuthModal: reCAPTCHA rendered with widget ID:", widgetId);
                        recaptchaWidgetIdRef.current = widgetId; // Store the widget ID in the ref
                    }).catch(error => {
                        console.error("AuthModal: Error rendering reCAPTCHA:", error);
                        showLocalMessage('Failed to initialize verification. Please refresh.', 'error');
                        recaptchaVerifierRef.current = null; // Clear ref on error
                        recaptchaWidgetIdRef.current = null; // Clear widget ID ref on error
                    });
                } catch (error) {
                    console.error("AuthModal: Error creating RecaptchaVerifier instance:", error);
                    showLocalMessage('Failed to initialize verification. Check console.', 'error');
                }
            });
        }

        // Cleanup function for reCAPTCHA when the component unmounts
        return () => {
            if (recaptchaVerifierRef.current) {
                console.log("AuthModal: Cleaning up reCAPTCHA Verifier on component unmount.");
                if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current); // Reset the widget
                }
                recaptchaVerifierRef.current = null; // Clear the ref
                recaptchaWidgetIdRef.current = null; // Clear the widget ID ref
            }
        };
    }, [isLogin, currentStep, auth, showLocalMessage]);


    const handleSendOtp = useCallback(async () => {
        setMessage('');
        setPhoneNumberError('');
        setUsernameError(''); // Clear username error here too

        // Username is now collected in step 0, but re-validate for phone sign-up path
        if (!username.trim()) {
            setUsernameError('Please enter a username.');
            return;
        }
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Please enter your phone number.');
            return;
        }
        // Validate that the phone number starts with +1 and has more digits
        if (!phoneNumber.startsWith('+1') || phoneNumber.trim().length < 10) { // Minimum length for +1 and 7 digits
            setPhoneNumberError('Phone number must start with "+1" and include at least 7 digits after.');
            return;
        }


        if (!auth) {
            showLocalMessage('Authentication service not ready.', 'error');
            return;
        }
        // Ensure reCAPTCHA is initialized and ready using the ref
        if (!recaptchaVerifierRef.current) {
            showLocalMessage('Verification system not ready. Please wait a moment and try again.', 'error');
            console.error("AuthModal: reCAPTCHA verifier not available.");
            return;
        }

        setIsSendingOtp(true);
        try {
            // Explicitly trigger reCAPTCHA verification if it's invisible
            if (recaptchaVerifierRef.current.size === 'invisible' && recaptchaWidgetIdRef.current !== null) {
                // Execute the reCAPTCHA to get a token
                await window.grecaptcha.execute(recaptchaWidgetIdRef.current);
            }

            // signInWithPhoneNumber will use the reCAPTCHA token internally
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifierRef.current);
            setVerificationId(confirmation);
            showLocalMessage('Verification code sent! Please check your phone.', 'success');
        } catch (error) {
            console.error("Error sending OTP:", error);
            let errorMessage = 'Failed to send code. Please try again.';
            if (error.code === 'auth/invalid-phone-number') {
                errorMessage = 'Invalid phone number format. Please ensure it includes the country code (e.g., +11234567890).';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many requests. Please try again later.';
            } else if (error.code === 'auth/captcha-check-failed') {
                errorMessage = 'Security check failed. Please try again.';
            }
            showLocalMessage(errorMessage, 'error');
            setVerificationId(null);
            // Do NOT reset grecaptcha here. The instance is needed for `confirm`.
            // The reCAPTCHA will automatically reset itself after a successful `execute` or on error/expiration.
        } finally {
            setIsSendingOtp(false);
        }
    }, [phoneNumber, username, auth, showLocalMessage]);

    const handleVerifyOtp = useCallback(async () => {
        setMessage('');
        setOtpError('');
        if (!otp.trim()) {
            setOtpError('Please enter the verification code.');
            return;
        }
        if (!verificationId) {
            showLocalMessage('No verification request found. Please send the code first.', 'error');
            return;
        }

        setIsVerifyingOtp(true);
        try {
            let userCredential;

            // If it's a new signup (not linking an anonymous account), create the user first
            if (!isLogin) {
                // Determine if it's an email/password signup or phone-only signup
                if (email && password) {
                    // Email/Password signup + Phone verification
                    userCredential = await createUserWithEmailAndPassword(auth, email, password);
                } else {
                    // Phone-only signup (user already created by signInWithPhoneNumber)
                    userCredential = await verificationId.confirm(otp);
                }
            } else {
                // This path is for linking an anonymous account with phone number
                userCredential = await verificationId.confirm(otp);
            }

            const user = userCredential.user;

            // Set user's display name after successful verification/creation
            if (user && username.trim()) {
                await updateProfile(user, { displayName: username.trim() });
                console.log("User display name updated after sign-up/link:", username);
            }

            // Save user profile to Firestore
            if (db && user && appId) {
                try {
                    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid), {
                        email: user.email || null,
                        phoneNumber: phoneNumber,
                        username: username, // Store username in Firestore user profile
                        createdAt: new Date(),
                    }, { merge: true });
                    console.log("User profile with phone number and username info saved.");
                } catch (dbError) {
                    console.error("Error saving user phone number and username info:", dbError);
                    showLocalMessage('Account created, but failed to save phone number and username.', 'warning');
                }
            } else {
                console.warn("Firestore DB, user, or appId not available, phone number and username info not saved.");
            }

            showLocalMessage('Account created and phone number verified!', 'success');

            // Centralized reCAPTCHA cleanup after successful verification and modal close.
            if (recaptchaVerifierRef.current) {
                if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                }
                recaptchaVerifierRef.current = null;
                recaptchaWidgetIdRef.current = null;
            }
            onClose(); // Call onClose to close the modal

        } catch (error) {
            console.error("Error verifying OTP or creating user:", error);
            let errorMessage = 'Failed to verify code. Please try again.';
            if (error.code === 'auth/invalid-verification-code') {
                errorMessage = 'Invalid verification code. Please check the code and try again.';
            } else if (error.code === 'auth/code-expired') {
                errorMessage = 'The verification code has expired. Please resend the code.';
            } else if (error.message === 'No reCAPTCHA clients.') {
                 errorMessage = 'Security verification failed. Please try to send the code again.';
            } else if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'This email is already registered. Please sign in or use a different email.';
            }
            showLocalMessage(errorMessage, 'error');
            setOtpError('Verification failed. Please try again.');
        } finally {
            setIsVerifyingOtp(false);
        }
    }, [otp, verificationId, db, appId, phoneNumber, username, showLocalMessage, onClose, auth, isLogin, email, password]);


    const handleNextStep = useCallback(async (e) => {
        e.preventDefault();
        setMessage('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setPhoneNumberError('');
        setOtpError('');
        setUsernameError('');

        console.log("handleNextStep: Current step BEFORE update:", currentStep, "isLogin:", isLogin);

        if (currentStep === 0) { // Email & Username step
            if (!email) {
                setEmailError('Please enter your email.');
                return;
            }
            if (!username.trim()) { // Username is mandatory from step 0
                setUsernameError('Please enter a username.');
                return;
            }
            if (!isLogin) { // Only check email existence for signup
                const emailExists = await checkEmailExists(email);
                console.log("handleNextStep: Email exists check result:", emailExists);
                if (emailExists) {
                    setEmailError('This email is already registered. Please sign in or use a different email.');
                    return;
                }
            }
            setCurrentStep(prev => prev + 1); // Move to password step
        } else if (currentStep === 1) { // Password & Confirm Password step
            if (!password) {
                setPasswordError('Please enter your password.');
                return;
            }
            if (password.length < 6) {
                setPasswordError('Password must be at least 6 characters long.');
                return;
            }
            if (!confirmPassword) {
                setConfirmPasswordError('Please confirm your password.');
                return;
            }
            if (password !== confirmPassword) {
                setConfirmPasswordError('Passwords do not match.');
                return;
            }
            setCurrentStep(prev => prev + 1); // Move to phone verification step
        } else if (currentStep === 2) { // Phone Number & OTP step
            // This step's logic is handled by handleSendOtp and handleVerifyOtp
            // The submit button will trigger handleAuthAction which calls these
            if (!phoneNumber.trim()) {
                setPhoneNumberError('Please enter your phone number.');
                return;
            }
            if (!verificationId) { // If OTP not sent yet, send it
                 if (!recaptchaVerifierRef.current) {
                    showLocalMessage('Verification system not ready. Please wait a moment and try again.', 'error');
                    console.error("AuthModal: reCAPTCHA verifier not available in handleNextStep.");
                    return;
                }
                await handleSendOtp();
            }
        }
        console.log("handleNextStep: Current step AFTER update:", currentStep);
    }, [email, password, confirmPassword, phoneNumber, username, currentStep, isLogin, checkEmailExists, handleSendOtp, verificationId, showLocalMessage]);


    const handlePrevStep = useCallback(() => {
        setMessage('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setPhoneNumberError('');
        setOtpError('');
        setUsernameError('');

        console.log("handlePrevStep: Current step BEFORE update:", currentStep);
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            setVerificationId(null);
            setOtp('');
            // Only reset grecaptcha if moving *away* from the phone step (i.e., currentStep was 2)
            if (currentStep === 2 && recaptchaVerifierRef.current) {
                if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                }
            }
        }
        console.log("handlePrevStep: Current step AFTER update:", currentStep);
    }, [currentStep]);


    const handleAuthAction = async (e) => {
        e.preventDefault();
        setMessage('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setPhoneNumberError('');
        setOtpError('');
        setUsernameError('');

        if (isLogin) {
            if (!email) {
                setEmailError('Please enter your email.');
                return;
            }
            if (!password) {
                setPasswordError('Please enter your password.');
                return;
            }

            try {
                if (isAnonymous) {
                    await linkAnonymousWithEmailPassword(email, password);
                } else {
                    await signInWithEmailPassword(email, password);
                }
                // Ensure reCAPTCHA is cleared on successful login
                if (recaptchaVerifierRef.current) {
                    if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                        window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                    }
                    recaptchaVerifierRef.current = null;
                    recaptchaWidgetIdRef.current = null;
                }
            } catch (error) {
                console.error("Unexpected error during sign-in process:", error);
                showLocalMessage(`An unexpected error occurred: ${error.message}`, 'error');
            }
        } else { // Signup flow
            if (currentStep < 2) { // If not yet at the phone verification step
                await handleNextStep(e); // Proceed to next step (email/username -> password -> phone)
            } else if (currentStep === 2) { // If at phone verification step
                if (!verificationId) { // If OTP not sent yet, send it
                    if (!recaptchaVerifierRef.current) {
                        showLocalMessage('Verification system not ready. Please wait a moment and try again.', 'error');
                        console.error("AuthModal: reCAPTCHA verifier not available in handleAuthAction.");
                        return;
                    }
                    await handleSendOtp();
                } else { // If OTP sent, verify it
                    await handleVerifyOtp();
                }
            }
        }
    };


    const handleGoogleSignIn = async () => {
        const user = await signInWithGoogle();
        if (user) {
            onClose();
            // Ensure reCAPTCHA is cleared on successful sign-in
            if (recaptchaVerifierRef.current) {
                if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                }
                recaptchaVerifierRef.current = null;
                recaptchaWidgetIdRef.current = null;
            }
        }
    };

    const handleAppleSignIn = async () => {
        const user = await signInWithApple();
        if (user) {
            onClose();
            // Ensure reCAPTCHA is cleared on successful sign-in
            if (recaptchaVerifierRef.current) {
                if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                }
                recaptchaVerifierRef.current = null;
                recaptchaWidgetIdRef.current = null;
            }
        }
    };

    const toggleAuthMode = useCallback(() => {
        setIsLogin(prev => !prev);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNumber('+1'); // Reset phone number to +1
        setUsername(''); // Clear username on mode toggle
        setMessage('');
        setMessageType('');
        setCurrentStep(0);
        setVerificationId(null);
        setOtp('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setPhoneNumberError('');
        setOtpError('');
        setUsernameError('');

        // Explicitly clean up reCAPTCHA when toggling auth mode
        if (recaptchaVerifierRef.current) {
            console.log("AuthModal: Clearing and deleting reCAPTCHA Verifier on mode toggle.");
            if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                window.grecaptcha.reset(recaptchaWidgetIdRef.current);
            }
            recaptchaVerifierRef.current = null; // Clear the ref
            recaptchaWidgetIdRef.current = null; // Clear the widget ID ref
        }
    }, []);

    // Centralized reCAPTCHA cleanup when modal closes
    const handleCloseAndCleanup = useCallback(() => {
        if (recaptchaVerifierRef.current) {
            console.log("AuthModal: Cleaning up reCAPTCHA Verifier on modal close.");
            if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetIdRef.current !== null) {
                window.grecaptcha.reset(recaptchaWidgetIdRef.current);
            }
            recaptchaVerifierRef.current = null;
            recaptchaWidgetIdRef.current = null;
        }
        onClose();
    }, [onClose]);


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4 font-inter">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative animate-scale-in overflow-y-auto"> {/* Added overflow-y-auto */}
                <button
                    onClick={handleCloseAndCleanup}
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

                <form onSubmit={handleAuthAction} className="space-y-4 flex flex-col items-center">
                    <div className="w-full overflow-hidden"> {/* Re-added overflow-hidden */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${isLogin ? 0 : currentStep * 100}%)` }}
                        >
                            {/* Sign In / Step 0: Email & Password (for login) */}
                            {isLogin && (
                                <div className="w-full flex-shrink-0 space-y-4 px-4 py-4"> {/* Added py-4 */}
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2 text-left">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="your.email@example.com"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                                        />
                                        {emailError && <p className="text-red-500 text-xs mt-1 text-left">{emailError}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2 text-left">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                                        />
                                        {passwordError && <p className="text-red-500 text-xs mt-1 text-left">{passwordError}</p>}
                                    </div>
                                </div>
                            )}

                            {/* Sign Up Steps (Carousel) */}
                            {!isLogin && (
                                <>
                                    {/* Step 0: Email & Username (for signup) */}
                                    <div className="w-full flex-shrink-0 space-y-4 px-4 py-4"> {/* Added py-4 */}
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2 text-left">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="your.email@example.com"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                                            />
                                            {emailError && <p className="text-red-500 text-xs mt-1 text-left">{emailError}</p>}
                                        </div>
                                        {/* Username input for the first step of signup */}
                                        <div>
                                            <label htmlFor="username-email-signup" className="block text-gray-700 text-sm font-medium mb-2 text-left">Username</label>
                                            <input
                                                type="text"
                                                id="username-email-signup"
                                                // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${usernameError ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Choose a username"
                                                value={username}
                                                onChange={(e) => { setUsername(e.target.value); setUsernameError(''); }}
                                            />
                                            {usernameError && <p className="text-red-500 text-xs mt-1 text-left">{usernameError}</p>}
                                        </div>
                                    </div>

                                    {/* Step 1: Password and Confirm Password (for signup) */}
                                    <div className="w-full flex-shrink-0 space-y-4 px-4 py-4"> {/* Added py-4 */}
                                        <div>
                                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2 text-left">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="********"
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                                            />
                                            {passwordError && <p className="text-red-500 text-xs mt-1 text-left">{passwordError}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-medium mb-2 text-left">Confirm Password</label>
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="********"
                                                value={confirmPassword}
                                                onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPasswordError(''); }}
                                            />
                                            {confirmPasswordError && <p className="text-red-500 text-xs mt-1 text-left">{confirmPasswordError}</p>}
                                        </div>
                                    </div>

                                    {/* Step 2: Phone Number Input & OTP Verification (for signup) */}
                                    <div className="w-full flex-shrink-0 space-y-4 px-4 py-4"> {/* Added py-4 */}
                                        {!verificationId ? (
                                            <div className="relative">
                                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2 text-left">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phoneNumber"
                                                    // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${phoneNumberError ? 'border-red-500' : 'border-gray-300'}`}
                                                    placeholder="e.g., +11234567890"
                                                    value={phoneNumber}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        // Ensure +1 is always present and not deletable
                                                        if (!value.startsWith('+1')) {
                                                            setPhoneNumber('+1' + value.replace(/^\+?1?/, '')); // Prepend +1 if missing or replaced
                                                        } else if (value === '+') { // If user tries to delete '1' from '+1'
                                                            setPhoneNumber('+1'); // Reset to '+1'
                                                        }
                                                        else {
                                                            setPhoneNumber(value);
                                                        }
                                                        setPhoneNumberError('');
                                                    }}
                                                    disabled={isSendingOtp}
                                                />
                                                <p className="text-xs text-gray-500 mt-1 text-left">For human verification purposes only! Include country code (e.g., +1).</p>
                                                <div id="recaptcha-container" className="mt-4"></div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <label htmlFor="otp" className="block text-gray-700 text-sm font-medium mb-2 text-left">Enter Verification Code</label>
                                                <input
                                                    type="text"
                                                    id="otp"
                                                    // MODIFIED: Added focus:border-custom-orange and removed focus:border-transparent
                                                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-custom-orange focus:shadow-md block ${otpError ? 'border-red-500' : 'border-gray-300'}`}
                                                    placeholder="e.g., 123456"
                                                    value={otp}
                                                    onChange={(e) => { setOtp(e.target.value); setOtpError(''); }}
                                                    disabled={isVerifyingOtp}
                                                />
                                                {otpError && <p className="text-red-500 text-xs mt-1 text-left">{otpError}</p>}
                                                <p className="text-xs text-gray-500 mt-1 text-left">Code sent to {phoneNumber}.</p>
                                                <button
                                                    type="button"
                                                    onClick={handleSendOtp}
                                                    disabled={isSendingOtp || isVerifyingOtp}
                                                    className="w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mt-2"
                                                >
                                                    {isSendingOtp ? 'Sending...' : 'Resend Code'}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Carousel Indicators (only for signup) */}
                    {!isLogin && (
                        <div className="flex justify-center space-x-2 mt-4">
                            {[0, 1, 2].map((stepIdx) => ( // Explicitly render 3 bubbles
                                <span
                                    key={stepIdx}
                                    className={`block w-3 h-3 rounded-full transition-colors duration-300
                                        ${currentStep === stepIdx ? 'bg-[#CC5500] scale-125' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'}`}
                                    onClick={() => setCurrentStep(stepIdx)}
                                    role="button"
                                    tabIndex="0"
                                    aria-label={`Go to step ${stepIdx + 1}`}
                                ></span>
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons (Previous and Main Auth Button) */}
                    <div className="flex justify-between items-center mt-4 w-full px-4">
                        {/* Previous button */}
                        {!isLogin && currentStep > 0 && (
                            <button
                                type="button"
                                onClick={handlePrevStep}
                                className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 min-w-[100px]"
                            >
                                Previous
                            </button>
                        )}
                        {/* Spacer div to push main button to the right if no "Previous" button */}
                        {(!isLogin && currentStep === 0) && <div className="flex-grow"></div>}


                        {/* Main Auth Button (Sign In or dynamic Sign Up action) */}
                        <button
                            type="submit"
                            className={`font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                                ${isLogin
                                    ? 'bg-[#FFDEB5] text-gray-800 hover:bg-[#FFC982] w-full'
                                    : 'bg-[#CC5500] text-white hover:bg-[#A84500] w-auto ml-auto'
                                }`}
                            disabled={
                                (isLogin && (isSendingOtp || isVerifyingOtp)) ||
                                (!isLogin && currentStep === 2 && !verificationId && isSendingOtp) ||
                                (!isLogin && currentStep === 2 && verificationId && isVerifyingOtp)
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
                    </div>


                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={toggleAuthMode}
                            className="text-[#CC5500] hover:underline font-semibold transition-colors duration-200"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                    {isLogin && (
                        <button
                            onClick={() => showLocalMessage('Password reset functionality not yet implemented.', 'info')}
                            className="text-[#CC5500] hover:underline text-sm mt-2 transition-colors duration-200"
                        >
                            Forgot Password(?)
                        </button>
                    )}
                </div>

                {/* "Or continue with" section completely removed */}
            </div>
        </div>
    );
};

export default AuthModal;
