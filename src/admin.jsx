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

// MANDATORY: Firebase configuration and initial app ID provided by the Canvas environment.
// Access these safely.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null; // __app_id is typically a string, not JSON.parse

// --- IMPORTANT: Removed hardcoded defaultFirebaseConfig for security. ---
// --- Configuration is now loaded from environment variables (Vite's import.meta.env) ---
// --- or from the Canvas environment's __firebase_config and __app_id. ---

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
                // Determine Firebase config to use: Canvas environment or Vite environment variables
                let configToUse = canvasFirebaseConfig;
                if (!configToUse) {
                    // If not running in Canvas, load from Vite environment variables
                    configToUse = {
                        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
                        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
                        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
                        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
                        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                        appId: import.meta.env.VITE_FIREBASE_APP_ID,
                        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
                    };
                }

                // Validate that essential config values are present
                if (!configToUse.apiKey || !configToUse.projectId || !configToUse.appId) {
                    throw new Error("Firebase configuration is incomplete. Check environment variables or Canvas setup.");
                }

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
                        showRootMessage('Please log in to access the Admin Panel.', 'info');
                    }
                    setAuthReady(true);
                    setLoadingFirebase(false);
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
    }, []);

    const firebaseContextValue = useMemo(() => ({
        app: firebaseAppInstance,
        db,
        auth,
        userId: currentUserId,
        authReady,
        // Use canvasAppId if available, fallback to projectId from Vite environment variables
        appId: canvasAppId || import.meta.env.VITE_FIREBASE_PROJECT_ID,
        loadingFirebase,
        message: rootMessage,
        showAdminMessage: showRootMessage,

        collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
    }), [
        firebaseAppInstance, db, auth, currentUserId, authReady,
        loadingFirebase, rootMessage, showRootMessage, canvasAppId // Added canvasAppId to dependencies
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
