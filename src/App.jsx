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
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QueryPage from './pages/QueryPage';
import QueryViewPage from './pages/QueryViewPage';
import ContactPage from './pages/ContactPage.jsx';
import AdminPanel from './pages/AdminPanel';

// Import Reusable Components
import MessageBox from './components/MessageBox';

// Create a Firebase Context to pass instances down the component tree
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial auth token provided by the Canvas environment.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? initialAuthToken : null; // Corrected: use local initialAuthToken not global
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;

// IMPORTANT: Firebase Configuration - YOUR PROVIDED CONFIG
const firebaseConfig = canvasFirebaseConfig || {
    apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",
    authDomain: "rntea-cca78.firebaseapp.com",
    projectId: "rntea-cca78",
    storageBucket: "rntea-cca78.firebasestorage.app",
    messagingSenderId: "806310857835",
    appId: "1:806310857835:web:b03b05847c818ee4fe352e",
    measurementId: "G-ZKZBPS9FGE"
};

const appIdentifier = canvasAppId || firebaseConfig.projectId;


export default function App() {
    const [firebaseApp, setFirebaseApp] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });

    const location = useLocation(); // Get current location object

    const showMessage = useCallback((text, type) => {
        setMessage({ text, type });
        const timer = setTimeout(() => setMessage({ text: '', type: '' }), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        try {
            const appInstance = initializeApp(firebaseConfig);
            const authInstance = getAuth(appInstance);
            const dbInstance = getFirestore(appInstance);

            setFirebaseApp(appInstance);
            setAuth(authInstance);
            setDb(dbInstance);

            const unsubscribeAuth = onAuthStateChanged(authInstance, async (user) => {
                if (user) {
                    setUserId(user.uid);
                    console.log("Auth state changed, userId:", user.uid);
                } else {
                    setUserId(null);
                    console.log("Auth state changed, user logged out.");
                }
                setLoadingFirebase(false);
            });

            if (initialAuthToken) {
                signInWithCustomToken(authInstance, initialAuthToken)
                    .catch(tokenError => {
                        console.error("Error signing in with __initial_auth_token:", tokenError);
                        showMessage(`Automatic login failed: ${tokenError.message}.`, 'error');
                        setLoadingFirebase(false);
                    });
            } else if (!authInstance.currentUser) {
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
                 setLoadingFirebase(false);
            }

            return () => unsubscribeAuth();

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


    const firebaseContextValue = {
        db,
        auth,
        userId,
        appId: appIdentifier,
        loadingFirebase,
        showMessage,
        firebaseApp,
        collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 font-inter">
            {/* Header Section - Adjusted for full-width navigation */}
            <header className="bg-gradient-to-r from-green-700 to-teal-600 text-white p-4 shadow-lg z-20 relative">
                <div className="flex items-center justify-between w-full px-4">
                    <Link to="/" className="text-3xl font-bold rounded-lg px-3 py-1 bg-white text-green-800 shadow-md transform hover:scale-105 transition-transform duration-200">
                        <h1>RNTea</h1>
                    </Link>
                    {/* ml-auto will push this nav to the far right, pr-6 adds some padding to the right */}
                    <nav className="ml-auto">
                        <ul className="flex space-x-6 pr-6">
                            {location.pathname !== '/' && (
                                <li>
                                    <Link to="/" className="font-semibold transition-colors duration-200 hover:text-teal-200 transform hover:scale-105">
                                        HOME
                                    </Link>
                                </li>
                            )}
                            {location.pathname !== '/reviews' && (
                                <li>
                                    <Link to="/reviews" className="font-semibold transition-colors duration-200 hover:text-teal-200 transform hover:scale-105">
                                        REVIEWS
                                    </Link>
                                </li>
                            )}
                            {location.pathname !== '/about' && (
                                <li>
                                    <Link to="/about" className="font-semibold transition-colors duration-200 hover:text-teal-200 transform hover:scale-105">
                                        ABOUT
                                    </Link>
                                </li>
                            )}
                            {location.pathname !== '/contact' && (
                                <li>
                                    <Link to="/contact" className="font-semibold transition-colors duration-200 hover:text-teal-200 transform hover:scale-105">
                                        CONTACT US
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-stretch justify-start">
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
                            <Route path="/admin" element={<AdminPanel />} />
                            <Route path="*" element={
                                <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h2>
                                    <p className="text-gray-600">The page you are looking for does not exist.</p>
                                    <Link to="/" className="text-blue-600 hover:underline mt-4 block">Go to Home</Link>
                                </div>
                            } />
                        </Routes>
                    </FirebaseContext.Provider>
                )}
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center mt-auto shadow-inner">
                <div className="container text-sm">
                    <p>&copy; 2025 RNTea. All rights reserved.</p>
                    <p className="mt-2 text-gray-400">Disclaimer: This is a demo. Always consult with a medical professional for advice.</p>
                </div>
            </footer>
        </div>
    );
}
