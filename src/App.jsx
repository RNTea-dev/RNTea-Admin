// src/App.jsx - Reintroducing core components for diagnosis

import React, { useState, useEffect, useCallback, createContext, useMemo, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// Firebase imports
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithCustomToken,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, // Keep GoogleAuthProvider import for now, but it's not used in AuthModal
    signInWithPopup, // Keep signInWithPopup import for now, but it's not used in AuthModal
    OAuthProvider,
    linkWithCredential,
    EmailAuthProvider,
    RecaptchaVerifier // Explicitly import RecaptchaVerifier
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    arrayUnion
} from 'firebase/firestore';

// Reintroducing Page Components imports
import HomePage from './pages/HomePage.jsx';
import ReviewsHubPage from './pages/ReviewsHubPage.jsx'; // Corrected path
import MyReviewsDisplay from './components/MyReviewsDisplay.jsx'; // NEW: Import MyReviewsDisplay
import PrivacyPolicyModal from './components/PrivacyPolicyModal.jsx';

// Reintroducing Reusable Components imports
import MessageBox from './components/MessageBox.jsx';
import AuthModal from './components/AuthModal.jsx';

// Create a Firebase Context to pass instances and auth functions down the component tree
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial app ID potentially provided by the Canvas environment.
// Access these safely.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;


// --- Error Boundary Component (for debugging purposes) ---
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("App.jsx ErrorBoundary: Uncaught error:", error, errorInfo);
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-4 rounded-lg shadow-lg m-4">
                    <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong in App.jsx!</h1>
                    <p className="text-lg mb-2 text-center">We're sorry, but there was an issue rendering the application. Details below:</p>
                    <details className="mt-4 text-left p-4 bg-red-50 rounded-lg border border-red-200 overflow-auto max-w-lg">
                        <summary className="font-semibold cursor-pointer text-red-700">Click for Error Details</summary>
                        <pre className="mt-2 text-sm whitespace-pre-wrap break-words font-mono text-red-900">{this.state.error && this.state.error.toString()}</pre>
                        {this.state.errorInfo && (
                            <pre className="mt-2 text-xs text-red-600 font-mono whitespace-pre-wrap break-words">
                                Component Stack: {this.state.errorInfo.componentStack}
                            </pre>
                        )}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}
// --- End Error Boundary Component ---


export default function App() {
    const [firebaseAppInstance, setFirebaseAppInstance] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUserIsAnonymous, setCurrentUserIsAnonymous] = useState(true); // NEW: Track if user is anonymous
    const [currentUserProfileName, setCurrentUserProfileName] = useState(null); // NEW: State for user's display name
    const [authReady, setAuthReady] = useState(false);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // NEW: State to hold the RecaptchaVerifier instance
    const [recaptchaVerifierState, setRecaptchaVerifierState] = useState(null);
    const recaptchaWidgetIdRef = useRef(null); // Still use ref for widget ID
    // NEW: State to explicitly track if reCAPTCHA is ready for use
    const [isRecaptchaReadyForUse, setIsRecaptchaReadyForUse] = useState(false);
    // NEW: State to track if the grecaptcha script itself has loaded
    const [grecaptchaLoaded, setGrecaptchaLoaded] = useState(false);

    // State to force AuthModal re-render when reCAPTCHA readiness changes
    const [recaptchaKeyCounter, setRecaptchaKeyCounter] = useState(0);


    const showMessage = useCallback((text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }, []);


    // --- Firebase Initialization and Auth State Management ---
    useEffect(() => {
        console.log("App.jsx: useEffect for Firebase Initialization triggered.");
        console.log("App.jsx: Current path detected by React Router:", location.pathname);

        const initializeFirebase = async () => {
            try {
                console.log("App.jsx: Loading Firebase...");

                let configToUse = null;
                let configSource = 'Unknown';

                const viteConfig = {
                    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
                    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
                    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
                    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                    appId: import.meta.env.VITE_FIREBASE_APP_ID,
                    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
                };

                console.log("App.jsx DEBUG: Constructed viteConfig:", viteConfig);

                if (viteConfig.apiKey && viteConfig.projectId && viteConfig.appId) {
                    configToUse = viteConfig;
                    configSource = 'Vite Environment Variables (import.meta.env)';
                } else if (canvasFirebaseConfig && canvasFirebaseConfig.apiKey && canvasFirebaseConfig.projectId && canvasFirebaseConfig.appId) {
                    console.warn("App.jsx: Vite environment variables are incomplete. Falling back to Canvas environment config.");
                    configToUse = canvasFirebaseConfig;
                    configSource = 'Canvas Environment (__firebase_config)';
                } else {
                    throw new Error("Firebase configuration is incomplete or missing from both Vite environment variables and Canvas setup. Please ensure either .env file is correct or Canvas variables are provided.");
                }

                console.log(`App.jsx: Firebase config source: ${configSource}`);
                console.log("App.jsx: Firebase config being used (sensitive parts masked):", {
                    apiKey: configToUse?.apiKey ? '********' : 'N/A',
                    authDomain: configToUse?.authDomain,
                    projectId: configToUse?.projectId,
                    storageBucket: configToUse?.storageBucket,
                    messagingSenderId: configToUse?.messagingSenderId,
                    appId: configToUse?.appId ? '********' : 'N/A',
                    measurementId: configToUse?.measurementId
                });

                if (!configToUse || !configToUse.apiKey || !configToUse.projectId || !configToUse.appId) {
                    throw new Error(`Firebase configuration is incomplete from ${configSource}. Missing apiKey, projectId, or appId. This should not happen if previous checks passed.`);
                }

                const appInstance = initializeApp(configToUse);
                const authInstance = getAuth(appInstance);
                const dbInstance = getFirestore(appInstance);

                setFirebaseAppInstance(appInstance);
                setAuth(authInstance);
                setDb(dbInstance);
                console.log("App.jsx: Firebase Loaded, Awaiting Auth...");

                const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                    console.log("App.jsx: onAuthStateChanged - User status changed. User:", user);
                    if (user) {
                        setCurrentUserId(user.uid);
                        setCurrentUserIsAnonymous(user.isAnonymous); // Set anonymous status
                        setCurrentUserProfileName(user.displayName); // NEW: Set display name from user object
                    } else {
                        console.log("App.jsx: No user found. Checking for custom token.");
                        let initialAuthToken = null;
                        try {
                            initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
                        } catch (e) {
                            console.warn("App.jsx: __initial_auth_token is not declared or accessible:", e);
                        }

                        if (initialAuthToken) {
                            console.log("App.jsx: Signing in with custom token...");
                            try {
                                await signInWithCustomToken(authInstance, initialAuthToken);
                                setCurrentUserId(authInstance.currentUser?.uid);
                                setCurrentUserIsAnonymous(authInstance.currentUser?.isAnonymous || false); // Set anonymous status
                                setCurrentUserProfileName(authInstance.currentUser?.displayName); // NEW: Set display name
                                console.log("App.jsx: Custom token sign-in successful. Current user ID:", authInstance.currentUser?.uid);
                            } catch (error) {
                                console.error("App.jsx: Error during custom token authentication:", error);
                                showMessage(`Authentication failed: ${error.message}`, 'error');
                                setCurrentUserId(null);
                                setCurrentUserIsAnonymous(true);
                                setCurrentUserProfileName(null); // NEW: Clear display name
                            }
                        } else {
                            console.log("App.jsx: No custom token found. User remains signed out by default.");
                            setCurrentUserId(null);
                            setCurrentUserIsAnonymous(true);
                            setCurrentUserProfileName(null); // NEW: Clear display name
                        }
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
                    console.log("App.jsx: Firebase initialization complete. AuthReady:", true, "LoadingFirebase:", false);
                });

                return () => {
                    console.log("App.jsx: useEffect cleanup - Unsubscribing from auth state changes.");
                    unsubscribe();
                };
            } catch (error) {
                console.error("App.jsx: FATAL ERROR: Failed to initialize Firebase application:", error);
                showMessage('Failed to initialize application. Please try again later.', 'error');
                setLoadingFirebase(false);
                setAuthReady(false);
            }
        };

        initializeFirebase();
    }, [location.pathname, canvasFirebaseConfig, showMessage]);


    // NEW: Global window.onloadCallback for reCAPTCHA script
    // This will be called by the reCAPTCHA script once it's loaded.
    // It must be defined globally and immediately, not inside a useEffect.
    window.onloadCallback = () => {
        console.log("App.jsx: window.onloadCallback triggered from reCAPTCHA script.");
        setGrecaptchaLoaded(true); // Mark grecaptcha script as loaded
    };

    // NEW: Effect to initialize RecaptchaVerifier once auth and grecaptcha are ready
    useEffect(() => {
        // Only attempt to initialize RecaptchaVerifier if:
        // 1. Firebase Auth is ready (`authReady` is true and `auth` instance exists)
        // 2. The grecaptcha script has loaded (`grecaptchaLoaded` is true)
        // 3. `window.grecaptcha` and `window.grecaptcha.ready` are available
        // 4. A RecaptchaVerifier instance hasn't been created yet (`!recaptchaVerifierState`)
        if (authReady && auth && grecaptchaLoaded && typeof window.grecaptcha !== 'undefined' && window.grecaptcha.ready && !recaptchaVerifierState) {
            console.log("App.jsx: All prerequisites met. Initializing RecaptchaVerifier...");

            window.grecaptcha.ready(() => {
                // Double-check inside ready callback to prevent re-initialization
                // This check is crucial because `grecaptcha.ready` can be called multiple times.
                if (recaptchaVerifierState) { // Check state, not ref
                    console.log("App.jsx: RecaptchaVerifier already exists in state, skipping re-initialization.");
                    setIsRecaptchaReadyForUse(true); // Ensure state is true if already initialized
                    setRecaptchaKeyCounter(prev => prev + 1); // Trigger re-render to ensure AuthModal picks up
                    return;
                }

                console.log("App.jsx: Creating and rendering RecaptchaVerifier instance...");
                try {
                    const container = document.getElementById('recaptcha-container-app');
                    if (!container) {
                        console.error("App.jsx: Central reCAPTCHA container 'recaptcha-container-app' not found!");
                        showMessage('reCAPTCHA container missing. Phone verification may fail.', 'error');
                        return;
                    }

                    const verifier = new RecaptchaVerifier(auth, 'recaptcha-container-app', {
                        'size': 'invisible', // Use 'invisible' for seamless experience
                        'callback': (response) => {
                            console.log("App.jsx: Central reCAPTCHA callback fired (solved):", response);
                            setIsRecaptchaReadyForUse(true);
                            setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                        },
                        'expired-callback': () => {
                            console.log("App.jsx: Central reCAPTCHA expired.");
                            showMessage('Verification expired. Please try again.', 'error');
                            setIsRecaptchaReadyForUse(false);
                            if (recaptchaWidgetIdRef.current !== null && window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
                                window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                            }
                            setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                        },
                        'error-callback': (error) => {
                            console.error("App.jsx: reCAPTCHA error callback:", error);
                            showMessage('Failed to load verification. Please refresh.', 'error');
                            setIsRecaptchaReadyForUse(false);
                            setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                        }
                    });

                    verifier.render().then((widgetId) => {
                        console.log("App.jsx: Central reCAPTCHA rendered with widget ID:", widgetId);
                        recaptchaWidgetIdRef.current = widgetId;
                        setRecaptchaVerifierState(verifier); // Store verifier in state
                        if (verifier.size === 'invisible') {
                            setIsRecaptchaReadyForUse(true); // Mark as ready once rendered for invisible
                        }
                        console.log("App.jsx: recaptchaVerifierState set and isRecaptchaReadyForUse true.");
                        setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                    }).catch(error => {
                        console.error("App.jsx: Error rendering central reCAPTCHA:", error);
                        showMessage('Failed to initialize verification. Please refresh.', 'error');
                        setIsRecaptchaReadyForUse(false);
                        setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                    });
                } catch (error) {
                    console.error("App.jsx: Error creating central RecaptchaVerifier instance:", error);
                    showMessage('Failed to initialize verification. Check console.', 'error');
                    setIsRecaptchaReadyForUse(false);
                    setRecaptchaKeyCounter(prev => prev + 1); // Force re-render for AuthModal
                }
            });
        } else if (recaptchaVerifierState && recaptchaVerifierState.size === 'invisible') {
            // If already initialized and invisible, ensure state is true
            // This handles cases where the useEffect might re-run but verifier is already there.
            if (!isRecaptchaReadyForUse) { // Only update if state is false
                setIsRecaptchaReadyForUse(true);
                setRecaptchaKeyCounter(prev => prev + 1); // Trigger re-render
            }
        }
    }, [authReady, auth, grecaptchaLoaded, showMessage, isRecaptchaReadyForUse, recaptchaVerifierState]); // Added recaptchaVerifierState to dependencies


    // Cleanup function for reCAPTCHA
    useEffect(() => {
        return () => {
            if (recaptchaVerifierState) { // Check state, not ref
                console.log("App.jsx: Cleaning up central reCAPTCHA Verifier...");
                if (recaptchaWidgetIdRef.current !== null && window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
                    window.grecaptcha.reset(recaptchaWidgetIdRef.current);
                } else if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
                    console.warn("App.jsx: Attempting general reCAPTCHA reset as widget ID is null.");
                    window.grecaptcha.reset();
                }
                recaptchaVerifierState.clear(); // Clear the instance from state
                setRecaptchaVerifierState(null); // Set state to null
                recaptchaWidgetIdRef.current = null;
                setIsRecaptchaReadyForUse(false);
                setRecaptchaKeyCounter(prev => prev + 1); // Trigger re-render
            }
        };
    }, [recaptchaVerifierState]); // Added recaptchaVerifierState to dependencies


    // Function to execute reCAPTCHA, passed down via context
    const executeRecaptcha = useCallback(async () => {
        // Ensure recaptchaVerifierState is not null AND it has an execute method
        if (!isRecaptchaReadyForUse || !recaptchaVerifierState || typeof recaptchaVerifierState.execute !== 'function') {
            console.error("App.jsx: reCAPTCHA Verifier not ready for execution. isReady:", isRecaptchaReadyForUse, "instance:", recaptchaVerifierState);
            showMessage('Verification not ready. Please try again.', 'error');
            throw new Error('reCAPTCHA not ready.');
        }
        try {
            const token = await recaptchaVerifierState.execute(); // Use state, not ref
            console.log("App.jsx: reCAPTCHA token obtained:", token);
            return token;
        } catch (error) {
            console.error("App.jsx: Error executing reCAPTCHA:", error);
            showMessage(`Verification failed: ${error.message}`, 'error');
            throw error; // Re-throw to allow calling component to handle
        }
    }, [showMessage, isRecaptchaReadyForUse, recaptchaVerifierState]); // Added recaptchaVerifierState to dependencies

    // Function to reset reCAPTCHA, passed down via context
    const resetRecaptcha = useCallback(() => {
        if (recaptchaWidgetIdRef.current !== null && window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
            console.log("App.jsx: Resetting central reCAPTCHA widget with ID.");
            window.grecaptcha.reset(recaptchaWidgetIdRef.current);
        } else if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
            console.warn("App.jsx: Attempting general reCAPTCHA reset as widget ID is null.");
            window.grecaptcha.reset();
        } else {
            console.warn("App.jsx: Cannot reset reCAPTCHA: grecaptcha or reset function not available.");
        }
        setIsRecaptchaReadyForUse(false); // Set to false after reset, will become true on next successful reCAPTCHA callback
    }, []);


    // --- Authentication Functions (passed via Context) ---

    const signUpWithEmailPassword = useCallback(async (email, password) => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return null;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            showMessage('Account created successfully!', 'success');
            setShowAuthModal(false);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing up with email/password:", error);
            showMessage(`Sign Up Failed: ${error.message}`, 'error');
            throw error;
        }
    }, [auth, showMessage]);

    const signInWithEmailPassword = useCallback(async (email, password) => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return null;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            showMessage('Signed in successfully!', 'success');
            setShowAuthModal(false);
            return userCredential.user;
        }  catch (error) {
            console.error("Error signing in with email/password:", error);
            showMessage(`Sign In Failed: ${error.message}`, 'error');
            return null;
        }
    }, [auth, showMessage]);

    const signInWithGoogle = useCallback(async () => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return null;
        }
        try {
            const provider = new GoogleAuthProvider();
            let userCredential;

            if (auth.currentUser && auth.currentUser.isAnonymous) {
                userCredential = await linkWithCredential(auth.currentUser, await signInWithPopup(auth, provider).then(result => result.credential));
                showMessage('Anonymous account linked with Google!', 'success');
            } else {
                userCredential = await signInWithPopup(auth, provider);
                showMessage('Signed in with Google successfully!', 'success');
            }
            setShowAuthModal(false);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing in with Google:", error);
            if (error.code === 'auth/account-exists-with-different-credential') {
                showMessage('An account with this email already exists using a different sign-in method. Please sign in with your original method or link accounts in your profile.', 'error');
            } else {
                showMessage(`Google Sign In Failed: ${error.message}`, 'error');
            }
            return null;
        }
    }, [auth, showMessage, setShowAuthModal]);

    const signInWithApple = useCallback(async () => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return null;
        }
        try {
            const provider = new OAuthProvider('apple.com');
            let userCredential;

            if (auth.currentUser && auth.currentUser.isAnonymous) {
                userCredential = await linkWithCredential(auth.currentUser, await signInWithPopup(auth, provider).then(result => result.credential));
                showMessage('Anonymous account linked with Apple!', 'success');
            } else {
                userCredential = await signInWithPopup(auth, provider);
                showMessage('Signed in with Apple successfully!', 'success');
            }
            setShowAuthModal(false);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing in with Apple:", error);
            if (error.code === 'auth/account-exists-with-different-credential') {
                showMessage('An account with this email already exists using a different sign-in method. Please sign in with your original method or link accounts in your profile.', 'error');
            } else {
                showMessage(`Apple Sign In Failed: ${error.message}`, 'error');
            }
            return null;
        }
    }, [auth, showMessage]);

    const signOutUser = useCallback(async () => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return;
        }
        try {
            await signOut(auth);
            setCurrentUserId(null);
            setCurrentUserIsAnonymous(true); // Reset anonymous status on sign out
            setCurrentUserProfileName(null); // NEW: Clear display name on sign out
            showMessage('Signed out successfully!', 'success');
        } catch (error) {
                console.error("Error signing out:", error);
            showMessage(`Sign Out Failed: ${error.message}`, 'error');
        }
    }, [auth, showMessage]);

    const linkAnonymousWithEmailPassword = useCallback(async (email, password) => {
        if (!auth || !auth.currentUser || !auth.currentUser.isAnonymous) {
            showMessage('Not an anonymous user or Firebase Auth not ready.', 'error');
            return null;
        }
        try {
            const credential = EmailAuthProvider.credential(email, password);
            const userCredential = await linkWithCredential(auth.currentUser, credential);
            showMessage('Anonymous account linked with email/password!', 'success');
            setShowAuthModal(false);
            return userCredential.user;
        }  catch (error) {
            console.error("Error linking anonymous account with email/password:", error);
            showMessage(`Linking Failed: ${error.message}`, 'error');
            return null;
        }
    }, [auth, showMessage]);

    const linkAnonymousWithApple = useCallback(async () => {
        if (!auth || !auth.currentUser || !auth.currentUser.isAnonymous) {
            showMessage('Not an anonymous user or Firebase Auth not ready.', 'error');
            return null;
        }
        try {
            const provider = new OAuthProvider('apple.com');
            const userCredential = await linkWithCredential(auth.currentUser, provider);
            showMessage('Anonymous account linked with Apple!', 'success');
            setShowAuthModal(false);
            return userCredential.user;
        } catch (error) {
            console.error("Error linking anonymous account with Apple:", error);
            showMessage(`Linking Failed: ${error.message}`, 'error');
            return null;
        }
    }, [auth, showMessage]);

    // Memoize the context value to prevent unnecessary re-renders
    const firebaseContextValue = useMemo(() => ({
        app: firebaseAppInstance,
        db,
        auth,
        currentUserId,
        currentUserIsAnonymous, // NEW: Pass anonymous status
        authReady,
        appId: canvasAppId || import.meta.env.VITE_FIREBASE_PROJECT_ID,
        showMessage,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithGoogle,
        signInWithApple,
        signOutUser,
        linkAnonymousWithEmailPassword,
        linkAnonymousWithApple,
        setShowAuthModal,
        // Add centralized reCAPTCHA functions to context
        executeRecaptcha,
        resetRecaptcha,
        // Expose the reCAPTCHA readiness state
        isRecaptchaReadyForUse,
        // Pass the recaptchaVerifier instance itself
        recaptchaVerifier: recaptchaVerifierState, // Pass the state variable
        currentUserDisplayName: currentUserProfileName // Use the new state variable
    }), [
        firebaseAppInstance, db, auth, currentUserId, currentUserIsAnonymous, authReady, canvasAppId, showMessage,
        signUpWithEmailPassword, signInWithEmailPassword, signInWithGoogle, signInWithApple, signOutUser,
        linkAnonymousWithEmailPassword, linkAnonymousWithApple, setShowAuthModal,
        executeRecaptcha, resetRecaptcha, isRecaptchaReadyForUse, recaptchaVerifierState,
        currentUserProfileName // NEW: Add this dependency
    ]);


    const handleMobileNavToggle = useCallback(() => {
        setIsMobileNavOpen(prev => !prev);
        document.body.style.overflow = !isMobileNavOpen ? 'hidden' : '';
    }, [isMobileNavOpen]);

    const handleMobileNavLinkClick = useCallback(() => {
        setIsMobileNavOpen(false);
        document.body.style.overflow = '';
    }, []);

    const isLinkActive = useCallback((path) => {
        if (path === '/') return location.pathname === '/';
        if (path === '/reviews') return location.pathname === '/reviews';
        if (path === '/my-tea') return location.pathname === '/my-tea'; // NEW: Check for /my-tea route
        if (path.startsWith('/#')) {
            const section = path.substring(2);
            return location.pathname === '/' && location.hash === `#${section}`;
        }
        return false;
    }, [location.pathname, location.hash]);


    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm py-8 px-6 md:px-10 lg:px-16 flex justify-between items-center rounded-b-lg fixed top-0 w-full z-30">
                <Link to="/" className="text-3xl font-bold text-gray-800 rntea-brand">RNTea</Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <Link
                                to="/#about"
                                className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out hover:text-custom-beige ${isLinkActive('/#about') ? 'font-bold' : ''}`}
                            >
                                <span className="relative inline-block">
                                    About
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reviews"
                                className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out hover:text-custom-beige ${isLinkActive('/reviews') ? 'font-bold' : ''}`}
                            >
                                <span className="relative inline-block">
                                    Reviews
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </li>
                        {currentUserId && !currentUserIsAnonymous && ( // NEW: Show My Tea link only if signed in
                            <li>
                                <Link
                                    to="/my-tea"
                                    className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out hover:text-custom-beige ${isLinkActive('/my-tea') ? 'font-bold' : ''}`}
                                >
                                    <span className="relative inline-block">
                                        My Tea
                                        <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link
                                to="/#contact"
                                className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out hover:text-custom-beige ${isLinkActive('/#contact') ? 'font-bold' : ''}`}
                            >
                                <span className="relative inline-block">
                                    Contact
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            {currentUserId ? (
                                <button
                                    onClick={signOutUser}
                                    className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale"
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowAuthModal(true)}
                                    className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale"
                                >
                                    Sign In
                                </button>
                            )}
                        </li>
                    </ul>
                </nav>
                <div
                    className={`hamburger-menu md:hidden flex flex-col justify-around w-8 h-6 cursor-pointer z-50 ${isMobileNavOpen ? 'open' : ''}`}
                    id="hamburger-menu"
                    onClick={handleMobileNavToggle}
                >
                    <div className={`hamburger-bar w-full h-0.5 bg-gray-800 rounded transition-all duration-300 transform`}></div>
                    <div className={`hamburger-bar w-full h-0.5 bg-gray-800 rounded transition-all duration-300 transform`}></div>
                    <div className={`hamburger-bar w-full h-0.5 bg-gray-800 rounded transition-all duration-300 transform`}></div>
                </div>
            </header>

            <div
                className={`mobile-nav-overlay md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-40 flex flex-col justify-center items-center transition-transform duration-400 ease-in-out ${isMobileNavOpen ? 'open' : ''}`}
                id="mobile-nav-overlay"
            >
                <button
                    className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 text-4xl focus:outline-none z-50"
                    onClick={handleMobileNavLinkClick}
                    aria-label="Close navigation menu"
                >
                    &times;
                </button>

                <Link
                    to="/#about"
                    className="group relative overflow-hidden text-2xl text-gray-800 my-4 transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.1s' }}
                >
                    <span className="relative inline-block">
                        About
                        <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                <Link
                    to="/reviews"
                    className="group relative overflow-hidden text-2xl text-gray-800 my-4 transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.2s' }}
                >
                    <span className="relative inline-block">
                        Reviews
                        <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                {currentUserId && !currentUserIsAnonymous && ( // NEW: Show My Tea link in mobile nav
                    <Link
                        to="/my-tea"
                        className="group relative overflow-hidden text-2xl text-gray-800 my-4 transition duration-300 ease-in-out hover:text-custom-beige"
                        onClick={handleMobileNavLinkClick}
                        style={{ animationDelay: '0.25s' }}
                    >
                        <span className="relative inline-block">
                            My Tea
                            <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                )}
                <Link
                    to="/#contact"
                    className="group relative overflow-hidden text-2xl text-gray-800 my-4 transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.3s' }}
                >
                    <span className="relative inline-block">
                        Contact
                        <span className="absolute left-0 bottom-0 h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                {currentUserId ? (
                    <button
                        onClick={() => { signOutUser(); handleMobileNavLinkClick(); }}
                        className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale"
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={() => { setShowAuthModal(true); handleMobileNavLinkClick(); }}
                        className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale"
                    >
                        Sign In
                    </button>
                )}
            </div>


            <main className="flex-grow w-full flex flex-col mt-[120px]">
                <MessageBox message={message.text} type={message.type} />

                {/* NEW: Hidden div for centralized reCAPTCHA to attach to */}
                {/* This div must always be present in the DOM for RecaptchaVerifier to initialize correctly */}
                <div id="recaptcha-container-app" className="hidden"></div>

                <ErrorBoundary>
                    {loadingFirebase ? (
                        <p className="text-center text-gray-500 py-8">App.jsx: Initializing application and Firebase...</p>
                    ) : (
                        <FirebaseContext.Provider value={firebaseContextValue}>
                            <Routes>
                                {console.log(`App.jsx: Route matched for path: ${location.pathname}`)}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/reviews" element={<ReviewsHubPage />} />
                                <Route path="/my-tea" element={<MyReviewsDisplay />} /> {/* NEW: My Tea Route */}
                                <Route path="/test-route" element={<h2 className="text-center text-2xl text-center mt-8">This is a Test Route.</h2>} />
                            </Routes>
                            {showAuthModal && (
                                <AuthModal
                                    key={`${recaptchaKeyCounter}-${isRecaptchaReadyForUse}`} // Force re-mount when reCAPTCHA state changes
                                    onClose={() => setShowAuthModal(false)}
                                />
                            )}
                        </FirebaseContext.Provider>
                    )}
                </ErrorBoundary>
            </main>
            <footer className="bg-white py-4 px-6 md:px-10 lg:px-16 border-t border-gray-200 text-center text-gray-600">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} RNTea business. All Rights Reserved.
                    <button onClick={() => setShowPrivacyModal(true)} className="ml-1 text-blue-600 hover:underline focus:outline-none">Privacy Policy</button>
                </p>
            </footer>

            {showPrivacyModal && <PrivacyPolicyModal onClose={() => setShowPrivacyModal(false)} />}
        </div>
    );
}
