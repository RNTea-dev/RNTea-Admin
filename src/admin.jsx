// src/admin.jsx
import React, { useState, useEffect, createContext, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion } from 'firebase/firestore';

import AdminPanel from './pages/AdminPanel.jsx';
import MessageBox from './components/MessageBox.jsx'; // AdminPanel uses MessageBox
import ConfirmModal from './components/ConfirmModal.jsx'; // AdminPanel uses ConfirmModal
import './index.css'; // Include shared CSS for styling

// Re-create FirebaseContext (or import if you separate it) for the Admin app
export const FirebaseContext = createContext(null);

// MANDATORY: Firebase configuration and initial auth token provided by the Canvas environment.
// Fallback to default config for local development if not in Canvas.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;

const defaultFirebaseConfig = {
    apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g", // Replace with your actual Firebase API Key
    authDomain: "rntea-cca78.firebaseapp.com",
    projectId: "rntea-cca78",
    storageBucket: "rntea-cca78.firebasestorage.app",
    messagingSenderId: "806310857835",
    appId: "1:806310857835:web:b03b05847c818ee4fe352e",
    measurementId: "G-ZKZBPS9FGE"
};

function AdminAppRoot() {
    const [firebaseAppInstance, setFirebaseAppInstance] = useState(null);
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [authReady, setAuthReady] = useState(false);
    const [loadingFirebase, setLoadingFirebase] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                const configToUse = canvasFirebaseConfig || defaultFirebaseConfig;
                const appInstance = initializeApp(configToUse);
                const authInstance = getAuth(appInstance);
                const dbInstance = getFirestore(appInstance);

                setFirebaseAppInstance(appInstance);
                setAuth(authInstance);
                setDb(dbInstance);

                const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                    if (user) {
                        setCurrentUserId(user.uid);
                    } else {
                        setCurrentUserId(null); // No user authenticated
                        setMessage({ text: 'Please log in to access the Admin Panel.', type: 'info' });
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
                });

                if (initialAuthToken) { // Attempt automatic sign-in if custom token available
                    try {
                        await signInWithCustomToken(authInstance, initialAuthToken);
                    } catch (tokenError) {
                        console.error("Error signing in with __initial_auth_token for admin:", tokenError);
                        setMessage({ text: `Automatic admin login failed: ${tokenError.message}. Please try manual login.`, type: 'error' });
                    }
                } else if (!authInstance.currentUser) {
                     // If no custom token and no current user, Firebase auth is still loading/ready.
                     setLoadingFirebase(false);
                }

                return () => unsubscribe(); // Cleanup auth listener
            } catch (error) {
                console.error("Firebase Initialization Error for Admin App:", error);
                setMessage({ text: `Failed to initialize Firebase for admin: ${error.message}.`, type: 'error' });
                setLoadingFirebase(false);
                setAuthReady(false);
            }
        };
        initializeFirebase();
    }, []); // Empty dependency array means this runs once on mount

    // Memoize the context value to prevent unnecessary re-renders
    const firebaseContextValue = useMemo(() => ({
        app: firebaseAppInstance,
        db,
        auth,
        currentUserId,
        authReady,
        appId: canvasAppId || defaultFirebaseConfig.projectId, // Ensure appId is passed
        setMessage // Pass the local setMessage function for feedback in AdminPanel
    }), [firebaseAppInstance, db, auth, currentUserId, authReady, canvasAppId]);

    return (
        <FirebaseContext.Provider value={firebaseContextValue}>
            {/* Message Box is now within this root component, managing its own messages */}
            <MessageBox message={message.text} type={message.type} />
            {loadingFirebase ? (
                <p className="text-center text-gray-500 py-8">Initializing Admin Application and Firebase...</p>
            ) : (
                <AdminPanel /> // Render the AdminPanel component
            )}
        </FirebaseContext.Provider>
    );
}

// Mount the AdminAppRoot to the 'admin-root' div in admin.html
const adminRootElement = document.getElementById('admin-root');
if (adminRootElement) {
    ReactDOM.createRoot(adminRootElement).render(
        <React.StrictMode>
            <AdminAppRoot />
        </React.StrictMode>
    );
} else {
    console.error("admin.jsx: ERROR - Admin root element not found in DOM. Cannot mount Admin App.");
}