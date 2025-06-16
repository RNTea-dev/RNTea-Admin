// src/App.jsx

import React, { useState, useEffect, useCallback, createContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Import useLocation

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

// Import Page Components
// Re-adding explicit .jsx extension for robust path resolution
import AdminPanel from './pages/AdminPanel.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import QueryPage from './pages/QueryPage.jsx';
import QueryViewPage from './pages/QueryViewPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// Import Reusable Components
// Re-adding explicit .jsx extension for robust path resolution
import MessageBox from './components/MessageBox.jsx';

// Create a Firebase Context to pass instances down the component tree
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial auth token provided by the Canvas environment.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;

// IMPORTANT: Firebase Configuration - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",
  authDomain: "rntea-cca78.firebaseapp.com",
  projectId: "rntea-cca78",
  storageBucket: "rntea-cca78.firebasestorage.app",
  messagingSenderId: "806310857835",
  appId: "1:806310857835:web:b03b05847c818ee4fe352e",
  measurementId: "G-ZKZBPS9FGE"
};

// For the purpose of this example, we'll derive a consistent 'appId' for Firestore paths.
const appIdentifier = canvasAppId || firebaseConfig.projectId;


// Define the 404 Not Found component directly within App.jsx
function NotFoundPage() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h2>
            <p className="text-gray-600">The page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-600 hover:underline mt-4 block">Go to Home</Link>
        </div>
    );
}


export default function App() {
    // Get current location pathname for conditional navigation rendering
    const location = useLocation();

    // State for Firebase instances and user info
    const [firebaseApp, setFirebaseApp] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });

    // Callback for displaying transient messages (success/error)
    const showMessage = useCallback((text, type) => {
        setMessage({ text, type });
        const timer = setTimeout(() => setMessage({ text: '', type: '' }), 5000);
        return () => clearTimeout(timer);
    }, []);

    // Effect: Initialize Firebase App and Services, and set up Auth State Listener (runs once)
    useEffect(() => {
        try {
            const appInstance = initializeApp(firebaseConfig);
            const authInstance = getAuth(appInstance);
            const dbInstance = getFirestore(appInstance);

            setFirebaseApp(appInstance);
            setAuth(authInstance);
            setDb(dbInstance);

            const unsubscribeAuth = onAuthStateChanged(authInstance, (user) => {
                if (user) {
                    setUserId(user.uid);
                    console.log("Auth state changed, userId:", user.uid);
                } else {
                    setUserId(null);
                    console.log("Auth state changed, user logged out.");
                }
                setLoadingFirebase(false);
            });

            // Attempt automatic sign-in with Canvas token first
            if (initialAuthToken) {
                signInWithCustomToken(authInstance, initialAuthToken)
                    .catch(tokenError => {
                        console.error("Error signing in with __initial_auth_token:", tokenError);
                        showMessage(`Automatic login failed: ${tokenError.message}.`, 'error');
                        setLoadingFirebase(false);
                    });
            } else if (!authInstance.currentUser) {
                // If no initial token and no current user, sign in anonymously
                signInAnonymously(authInstance)
                    .then(userCredential => {
                        setUserId(userCredential.user.uid);
                        console.log("Signed in anonymously:", userCredential.user.uid);
                    })
                    .catch(anonError => {
                        console.error("Error signing in anonymously:", anonError);
                        showMessage(`Anonymous login failed: ${anonError.message}.`, 'error');
                    })
                    .finally(() => {
                        setLoadingFirebase(false);
                    });
            } else {
                 setLoadingFirebase(false); // If already logged in, stop loading
            }


            return () => unsubscribeAuth(); // Clean up the listener on component unmount

        } catch (error) {
            console.error("Firebase Initialization Error:", error);
            let errorMessage = `Failed to initialize Firebase: ${error.message}.`;
            if (error.code === 'auth/api-key-not-valid') {
                errorMessage += " Please double-check your Firebase API key in firebaseConfig.";
            }
            showMessage({ text: errorMessage, type: 'error' });
            setLoadingFirebase(false);
        }
    }, [firebaseConfig, initialAuthToken, showMessage]);


    // The Firebase context value to be provided to consumers
    const firebaseContextValue = {
        db,
        auth,
        userId,
        appId: appIdentifier,
        loadingFirebase,
        showMessage, // Pass the showMessage function
        // Pass Firestore functions directly so they don't need to be imported in every child
        collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
    };

    return (
        // Apply a base background color here if desired for the entire app under the header/footer
        <div className="flex flex-col min-h-screen bg-gray-100 font-inter">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-4 shadow-lg z-20 relative">
                {/* This div contains both the logo and the navigation links */}
                <div className="w-full flex items-center justify-between px-4">
                    {/* Added ml-4 to move RNTea to the right by a small amount */}
                    <Link to="/" className="text-3xl font-bold rounded-lg px-3 py-1 bg-white text-green-800 shadow-md transform hover:scale-105 transition-transform duration-200 ml-10">
                        <h1>RNTea</h1>
                    </Link>
                    {/* Added pr-4 to the nav to shift it slightly left and changed text size to text-base */}
                    <nav className="pr-4">
                        <ul className="flex space-x-6">
                            {location.pathname !== '/' && ( // Conditionally render HOME link
                                <li><Link to="/" className="hover:text-teal-200 transition-colors duration-200 hover:scale-105 transform font-semibold text-base">HOME</Link></li>
                            )}
                            {location.pathname !== '/reviews' && ( // Conditionally render REVIEWS link
                                <li><Link to="/reviews" className="hover:text-teal-200 transition-colors duration-200 hover:scale-105 transform font-semibold text-base">REVIEWS</Link></li>
                            )}
                            {location.pathname !== '/about' && ( // Conditionally render ABOUT link
                                <li><Link to="/about" className="hover:text-teal-200 transition-colors duration-200 hover:scale-105 transform font-semibold text-base">ABOUT</Link></li>
                            )}
                            {location.pathname !== '/contact' && ( // Conditionally render CONTACT US link
                                <li><Link to="/contact" className="hover:text-teal-200 transition-colors duration-200 hover:scale-105 transform font-semibold text-base">CONTACT US</Link></li>
                            )}
                            {/* Changed Admin link text to LOGIN */}
                            {location.pathname !== '/admin' && ( // Conditionally render ADMIN link
                                <li><Link to="/admin" className="hover:text-teal-200 transition-colors duration-200 hover:scale-105 transform font-semibold text-base">LOGIN</Link></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content Area - Now a flex column to ensure content grows vertically */}
            <main className="flex-grow w-full flex flex-col">
                {/* Message box will now be managed by the global App */}
                <MessageBox message={message.text} type={message.type} />

                {loadingFirebase ? (
                    <p className="text-center text-gray-500 py-8">Initializing application and Firebase...</p>
                ) : (
                    <FirebaseContext.Provider value={firebaseContextValue}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/query" element={<QueryPage />} />
                            <Route path="/reviews" element={<QueryViewPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/admin" element={<AdminPanel />} /> {/* Admin Panel is now a route */}
                            {/* Catch-all for 404 - now uses a dedicated component */}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </FirebaseContext.Provider>
                )}
            </main>

            {/* Footer Section - REMOVED */}
        </div>
    );
}
