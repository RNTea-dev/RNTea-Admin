// src/App.jsx

import React, { useState, useEffect, useCallback, createContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Firebase imports
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInAnonymously,
    signInWithCustomToken,
    onAuthStateChanged,
    signOut
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

// Import Page Components - Explicitly using .jsx extension
import HomePage from './pages/HomePage.jsx';
import ReviewsHubPage from './pages/ReviewsHubPage.jsx';

// Import Reusable Components - Explicitly using .jsx extension
import MessageBox from './components/MessageBox.jsx';

// Create a Firebase Context to pass instances down the component tree
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial auth token provided by the Canvas environment.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const canvasAppId = typeof __app_id !== 'undefined' ? JSON.parse(__app_id) : null;

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
                    <p className="text-lg mb-2 text-center">There was an issue rendering the application. Details below:</p>
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


export default function App() { // This line is the default export
    const [firebaseAppInstance, setFirebaseAppInstance] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [authReady, setAuthReady] = useState(false);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });
    const location = useLocation();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        console.log("App.jsx: useEffect for Firebase Initialization triggered.");
        console.log("App.jsx: Current path detected by React Router:", location.pathname);
        const initializeFirebase = async () => {
            try {
                console.log("App.jsx: Loading Firebase..."); // Added diagnostic
                const configToUse = canvasFirebaseConfig || defaultFirebaseConfig;
                console.log("App.jsx: Firebase config being used:", configToUse);
                const appInstance = initializeApp(configToUse);
                const authInstance = getAuth(appInstance);
                const dbInstance = getFirestore(appInstance);

                setFirebaseAppInstance(appInstance);
                setAuth(authInstance);
                setDb(dbInstance);
                console.log("App.jsx: Firebase Loaded, Awaiting Auth..."); // Added diagnostic

                const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                    console.log("App.jsx: onAuthStateChanged - User status changed. User:", user);
                    if (user) {
                        setCurrentUserId(user.uid);
                    } else {
                        console.log("App.jsx: No user found. Attempting anonymous sign-in or custom token sign-in.");
                        try {
                            if (initialAuthToken) {
                                console.log("App.jsx: Signing in with custom token...");
                                await signInWithCustomToken(authInstance, initialAuthToken);
                            } else {
                                await signInAnonymously(authInstance);
                            }
                            setCurrentUserId(authInstance.currentUser?.uid || 'anonymous');
                            console.log("App.jsx: Sign-in successful. Current user ID:", authInstance.currentUser?.uid);
                        } catch (error) {
                            console.error("App.jsx: Error during authentication (anonymous/custom token):", error);
                            setCurrentUserId(crypto.randomUUID()); // Fallback to random ID if auth fails
                            setMessage({ text: `Authentication failed: ${error.message}`, type: 'error' });
                        }
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
                    console.log("App.jsx: Firebase initialization complete. AuthReady:", true, "LoadingFirebase:", false);
                    console.log("App.jsx: Firebase & Auth Ready!"); // Added diagnostic
                });

                return () => {
                    console.log("App.jsx: useEffect cleanup - Unsubscribing from auth state changes.");
                    unsubscribe();
                };
            } catch (error) {
                console.error("App.jsx: FATAL ERROR: Failed to initialize Firebase application:", error);
                setMessage({ text: 'Failed to initialize application. Please try again later.', type: 'error' });
                setLoadingFirebase(false);
                setAuthReady(false);
            }
        };

        initializeFirebase();
    }, [location.pathname, canvasFirebaseConfig, initialAuthToken]);

    const firebaseContextValue = React.useMemo(() => ({
        app: firebaseAppInstance,
        db,
        auth,
        currentUserId,
        authReady,
        appId: canvasAppId || 'rntea-cca78',
        setMessage,
        message // IMPORTANT: Now include the message state in the context value
    }), [firebaseAppInstance, db, auth, currentUserId, authReady, canvasAppId, setMessage, message]); // Add message to dependencies

    const handleMobileNavToggle = useCallback(() => {
        setIsMobileNavOpen(prev => !prev);
        document.body.style.overflow = !isMobileNavOpen ? 'hidden' : '';
    }, [isMobileNavOpen]);

    const handleMobileNavLinkClick = useCallback(() => {
        setIsMobileNavOpen(false);
        document.body.style.overflow = '';
    }, []);

    const showMessage = useCallback((text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
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
            <header className="bg-white shadow-sm py-8 px-6 md:px-10 lg:px-16 flex justify-between items-center rounded-b-lg fixed top-0 w-full z-30">
                <Link to="/" className="text-3xl font-bold text-gray-800 rntea-brand">RNTea</Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
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
            </div>


            <main className="flex-grow w-full flex flex-col mt-[120px]">
                {/* MessageBox uses the message state directly from App.jsx */}
                <MessageBox message={message.text} type={message.type} />

                <ErrorBoundary>
                    {loadingFirebase ? (
                        <p className="text-center text-gray-500 py-8">App.jsx: Initializing application and Firebase...</p>
                    ) : (
                        <FirebaseContext.Provider value={firebaseContextValue}>
                            <Routes>
                                {/* Console log here to confirm routing is active */}
                                {console.log(`App.jsx: Route matched for path: ${location.pathname}`)}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/reviews" element={<ReviewsHubPage />} />
                            </Routes>
                        </FirebaseContext.Provider>
                    )}
                </ErrorBoundary>
            </main>
        </div>
    );
}

