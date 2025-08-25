// src/admin.jsx
import React, { useState, useEffect, createContext, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore,
  collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
} from 'firebase/firestore';

import AdminDashboard from './pages/AdminDashboard.jsx';
import SignIn from './components/SignIn.jsx'; // ⬅️ new
import MessageBox from './components/MessageBox.jsx';
import ConfirmModal from './components/ConfirmModal.jsx'; // keep if used
import './index.css';

export const FirebaseContext = createContext(null);

// Canvas-provided globals (if present)
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : null;

function AdminAppRoot() {
  const [app, setApp] = useState(null);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loadingFirebase, setLoadingFirebase] = useState(true);

  const [rootMessage, setRootMessage] = useState({ text: '', type: '' });
  const showRootMessage = useCallback((text, type) => {
    setRootMessage({ text, type });
    setTimeout(() => setRootMessage({ text: '', type: '' }), 5000);
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        // Prefer Canvas config, fallback to Vite env
        const config = canvasFirebaseConfig || {
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
          appId: import.meta.env.VITE_FIREBASE_APP_ID,
          measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
        };

        if (!config?.apiKey || !config?.projectId || !config?.appId) {
          throw new Error('Firebase configuration is incomplete. Check .env or Canvas setup.');
        }

        // Avoid duplicate-app error
        const appInstance = getApps().length ? getApp() : initializeApp(config);
        const authInstance = getAuth(appInstance);
        const dbInstance = getFirestore(appInstance);

        setApp(appInstance);
        setAuth(authInstance);
        setDb(dbInstance);

        const unsub = onAuthStateChanged(authInstance, (user) => {
          setUserId(user ? user.uid : null);
          if (!user) showRootMessage('Please log in to access the Admin Panel.', 'info');
          setAuthReady(true);
          setLoadingFirebase(false);
        });

        return () => unsub && unsub();
      } catch (err) {
        console.error('Firebase Initialization Error (Admin):', err);
        showRootMessage(`FATAL: Failed to initialize Firebase: ${err.message}`, 'error');
        setLoadingFirebase(false);
        setAuthReady(false);
      }
    };

    init();
  }, [showRootMessage]);

  const ctx = useMemo(() => ({
    app,
    db,
    auth,
    userId,
    authReady,
    appId: canvasAppId || import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: canvasAppId || import.meta.env.VITE_FIREBASE_APP_ID,
    loadingFirebase,
    message: rootMessage,
    showAdminMessage: showRootMessage,
    // expose a few helpers if children want them
    collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
  }), [app, db, auth, userId, authReady, loadingFirebase, rootMessage, showRootMessage]);

  return (
    <FirebaseContext.Provider value={ctx}>
      <MessageBox message={rootMessage.text} type={rootMessage.type} />
      {loadingFirebase ? (
        <p className="text-center text-gray-500 py-8">Initializing Admin Application and Firebase...</p>
      ) : auth && auth.currentUser ? (
        <AdminDashboard />
      ) : (
        <SignIn />
      )}
    </FirebaseContext.Provider>
  );
}

// ---- Mount ----
const container = document.getElementById('admin-root');
if (!container) {
  console.error('admin.jsx: #admin-root not found in DOM.');
} else {
  createRoot(container).render(
    <React.StrictMode>
      <AdminAppRoot />
    </React.StrictMode>
  );
}
