// src/admin.jsx
import React, { useState, useEffect, createContext, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth'; // Removed signInWithEmailAndPassword as it's not needed for root init
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

import AdminPanel from './pages/AdminPanel.jsx';
import MessageBox from './components/MessageBox.jsx';
import ConfirmModal from './components/ConfirmModal.jsx';
import './index.css';

export const FirebaseContext = createContext(null);

// Production-ready Firebase configuration.
// In a real production environment, for `defaultFirebaseConfig` you'd replace placeholder values
// with your actual production Firebase project config from environment variables or a secure build process.
// The `__firebase_config`, `__initial_auth_token`, `__app_id` are likely from a specific Canvas/Firebase setup.
// If you are deploying to a standard Firebase Hosting, these global variables will not exist.
// You would uncomment and use your defaultFirebaseConfig directly as the primary source.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const canvasAppId = typeof __app_id !== 'undefined' ? JSON.parse(__app_id) : null; // Ensure this is not JSON.parse if it's just a string

const defaultFirebaseConfig = {
    apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g", // REPLACE WITH YOUR ACTUAL PRODUCTION API KEY
    authDomain: "rntea-cca78.firebaseapp.com",
    projectId: "rntea-cca78", // Your project ID
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

    const [rootMessage, setRootMessage] = useState({ text: '', type: '' });
    const showRootMessage = useCallback((text, type) => {
        setRootMessage({ text, type });
        setTimeout(() => setRootMessage({ text: '', type: '' }), 5000);
    }, []);

    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                // Use canvas config if available, otherwise fallback to default config
                const configToUse = canvasFirebaseConfig || defaultFirebaseConfig;
                const appInstance = initializeApp(configToUse);
                const authInstance = getAuth(appInstance);
                const dbInstance = getFirestore(appInstance);

                setFirebaseAppInstance(appInstance);
                setAuth(authInstance);
                setDb(dbInstance);

                const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                    // Removed diagnostic console.log
                    if (user) {
                        setCurrentUserId(user.uid);
                    } else {
                        setCurrentUserId(null); // No user authenticated
                        // This message will appear if no user is logged in after init.
                        // AdminPanel's login form will then be displayed.
                        showRootMessage('Please log in to access the Admin Panel.', 'info');
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
                    // Removed diagnostic console.log
                });

                // Removed hardcoded login block and __initial_auth_token usage for production
                // This app relies on the AdminPanel.jsx form for manual login.
                if (!authInstance.currentUser) {
                    setLoadingFirebase(false);
                }

                return () => {
                    if (unsubscribe) unsubscribe();
                };
            } catch (error) {
                console.error("Firebase Initialization Error for Admin App:", error);
                showRootMessage(`FATAL ERROR: Failed to initialize Firebase for admin: ${error.message}. Please check console.`, 'error');
                setLoadingFirebase(false);
                setAuthReady(false);
            }
        };
        initializeFirebase();
    }, []); // Removed canvasFirebaseConfig, initialAuthToken from deps

    const firebaseContextValue = useMemo(() => ({
        app: firebaseAppInstance,
        db,
        auth,
        userId: currentUserId,
        authReady,
        // Use canvasAppId if available, otherwise fallback to projectId from default config
        appId: (typeof __app_id !== 'undefined' ? JSON.parse(__app_id) : null) || defaultFirebaseConfig.projectId,
        loadingFirebase,
        message: rootMessage,
        showAdminMessage: showRootMessage,

        collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
    }), [
        firebaseAppInstance, db, auth, currentUserId, authReady,
        loadingFirebase, rootMessage, showRootMessage // Dependencies
    ]);

    return (
        <FirebaseContext.Provider value={firebaseContextValue}>
            <MessageBox message={rootMessage.text} type={rootMessage.type} />
            {loadingFirebase ? (
                <p className="text-center text-gray-500 py-8">Initializing Admin Application and Firebase...</p>
            ) : (
                <AdminPanel />
            )}
        </FirebaseContext.Provider>
    );
}

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