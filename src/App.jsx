// src/App.jsx - Reintroducing core components for diagnosis

import React, { useState, useEffect, useCallback, createContext, useMemo } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// Firebase imports
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // signInAnonymously, // Commented out to prevent automatic anonymous sign-in
    signInWithCustomToken,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    OAuthProvider,
    linkWithCredential,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updateEmail,
    updatePassword,
    sendPasswordResetEmail
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
import ReviewsHubPage from './pages/ReviewsHubPage.jsx';

// Reintroducing Reusable Components imports
import MessageBox from './components/MessageBox.jsx';
import AuthModal from './components/AuthModal.jsx';

// Create a Firebase Context to pass instances and auth functions down the component tree
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial app ID provided by the Canvas environment.
// Access these safely.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;

// Firebase configuration from the provided index.html snippet (for default fallback)
const defaultFirebaseConfig = {
    apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",
    authDomain: "rntea-cca78.firebaseapp.com",
    projectId: "rntea-cca78",
    storageBucket: "rntea-cca78.firebasestorage.app",
    messagingSenderId: "806310857835",
    appId: "1:806310857835:web:b03b05847c818ee4fe352e",
    measurementId: "G-ZKZBPS9FGE"
};

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
    const [authReady, setAuthReady] = useState(false);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    // Reintroduced message and showAuthModal states
    const [message, setMessage] = useState({ text: '', type: '' });
    const [showAuthModal, setShowAuthModal] = useState(false);

    // Reintroducing useLocation and useNavigate
    const location = useLocation();
    const navigate = useNavigate();
    // Reintroducing mobile nav states
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


    // Reinstated full showMessage, as MessageBox is back
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
                const configToUse = canvasFirebaseConfig || defaultFirebaseConfig;
                console.log("App.jsx: Firebase config being used:", configToUse);
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
                                console.log("App.jsx: Custom token sign-in successful. Current user ID:", authInstance.currentUser?.uid);
                            } catch (error) {
                                console.error("App.jsx: Error during custom token authentication:", error);
                                showMessage(`Authentication failed: ${error.message}`, 'error');
                                setCurrentUserId(null); // Ensure no user ID if sign-in fails
                            }
                        } else {
                            console.log("App.jsx: No custom token found. User remains signed out by default.");
                            setCurrentUserId(null); // Ensure no user is signed in automatically
                        }
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
                    console.log("App.jsx: Firebase initialization complete. AuthReady:", true, "LoadingFirebase:", false);
                    console.log("App.jsx: Firebase & Auth Ready!");
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
    }, [location.pathname, canvasFirebaseConfig, showMessage]); // Dependencies remain the same

    // --- Authentication Functions (passed via Context) ---

    // Function to sign up with email and password
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
            return null;
        }
    }, [auth, showMessage]);

    // Function to sign in with email and password
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

    // Function to sign in with Apple ID
    const signInWithApple = useCallback(async () => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return null;
        }
        try {
            const provider = new OAuthProvider('apple.com');
            const userCredential = await signInWithPopup(auth, provider);
            showMessage('Signed in with Apple successfully!', 'success');
            setShowAuthModal(false);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing in with Apple:", error);
            showMessage(`Apple Sign In Failed: ${error.message}`, 'error');
            return null;
        }
    }, [auth, showMessage]);

    // Function to sign out the current user
    const signOutUser = useCallback(async () => {
        if (!auth) {
            showMessage('Firebase Auth not initialized.', 'error');
            return;
        }
        try {
            await signOut(auth);
            setCurrentUserId(null);
            showMessage('Signed out successfully!', 'success');
            // Do NOT automatically sign in anonymously after sign out
        } catch (error) {
            console.error("Error signing out:", error);
            showMessage(`Sign Out Failed: ${error.message}`, 'error');
        }
    }, [auth, showMessage]);

    // Function to link anonymous account with email/password
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

    // Function to link anonymous account with Apple
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
        authReady,
        appId: canvasAppId || 'rntea-cca78', // Use canvasAppId if available, fallback to default
        showMessage, // Pass showMessage function
        // Reintroduced auth functions
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithApple,
        signOutUser,
        linkAnonymousWithEmailPassword,
        linkAnonymousWithApple,
        setShowAuthModal
    }), [
        firebaseAppInstance, db, auth, currentUserId, authReady, canvasAppId, showMessage,
        signUpWithEmailPassword, signInWithEmailPassword, signInWithApple, signOutUser,
        linkAnonymousWithEmailPassword, linkAnonymousWithApple, setShowAuthModal
    ]);


    // Reintroducing Mobile Navigation Handlers
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
        if (path.startsWith('/#')) {
            const section = path.substring(2);
            return location.pathname === '/' && location.hash === `#${section}`;
        }
        return false;
    }, [location.pathname, location.hash]);


    return (
        <div className="min-h-screen flex flex-col">
            {/* Reintroduced full header */}
            <header className="bg-white shadow-sm py-8 px-6 md:px-10 lg:px-16 flex justify-between items-center rounded-b-lg fixed top-0 w-full z-30">
                <Link to="/" className="text-3xl font-bold text-gray-800 rntea-brand">RNTea</Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <Link
                                to="/#about"
                                className={`text-lg text-gray-700 font-medium animated-link ${isLinkActive('/#about') ? 'font-bold' : ''}`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reviews"
                                className={`text-lg text-gray-700 font-medium animated-link ${isLinkActive('/reviews') ? 'font-bold' : ''}`}
                            >
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#contact"
                                className={`text-lg text-gray-700 font-medium animated-link ${isLinkActive('/#contact') ? 'font-bold' : ''}`}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            {currentUserId ? ( // Check if currentUserId exists (user is signed in)
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

            {/* Reintroduced mobile nav overlay */}
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
                    className="text-2xl text-gray-800 my-4 animated-link transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.1s' }}
                >
                    About
                </Link>
                <Link
                    to="/reviews"
                    className="text-2xl text-gray-800 my-4 animated-link transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.2s' }}
                >
                    Reviews
                </Link>
                <Link
                    to="/#contact"
                    className="text-2xl text-gray-800 my-4 animated-link transition duration-300 ease-in-out hover:text-custom-beige"
                    onClick={handleMobileNavLinkClick}
                    style={{ animationDelay: '0.3s' }}
                >
                    Contact
                </Link>
                {currentUserId ? ( // Check if currentUserId exists (user is signed in)
                    <button
                        onClick={() => { signOutUser(); handleMobileNavLinkClick(); }}
                        className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale mt-4"
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={() => { setShowAuthModal(true); handleMobileNavLinkClick(); }}
                        className="bg-[#CC5500] text-white font-bold py-2 px-4 rounded-full hover:bg-[#A84500] transition duration-300 shadow-md btn-hover-scale mt-4"
                    >
                        Sign In
                    </button>
                )}
            </div>


            <main className="flex-grow w-full flex flex-col mt-[120px]">
                {/* Reintroduced MessageBox */}
                <MessageBox message={message.text} type={message.type} />

                <ErrorBoundary>
                    {loadingFirebase ? (
                        <p className="text-center text-gray-500 py-8">App.jsx: Initializing application and Firebase...</p>
                    ) : (
                        <FirebaseContext.Provider value={firebaseContextValue}>
                            {/* Reintroduced Routes for HomePage and ReviewsHubPage */}
                            <Routes>
                                {console.log(`App.jsx: Route matched for path: ${location.pathname}`)}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/reviews" element={<ReviewsHubPage />} />
                                {/* Keeping test route for now, can remove later */}
                                <Route path="/test-route" element={<h2 className="text-center text-2xl mt-8">This is a Test Route.</h2>} />
                            </Routes>
                            {/* Reintroduced AuthModal conditionally */}
                            {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
                        </FirebaseContext.Provider>
                    )}
                </ErrorBoundary>
            </main>
        </div>
    );
}
