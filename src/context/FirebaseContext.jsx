import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",
  authDomain: "rntea-cca78.firebaseapp.com",
  projectId: "rntea-cca78",
  storageBucket: "rntea-cca78.firebasestorage.app",
  messagingSenderId: "806310857835",
  appId: "1:806310857835:web:b03b05847c818ee4fe352e",
  measurementId: "G-ZKZBPS9FGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Extract appId from config for dynamic Firestore paths
const { appId } = firebaseConfig;

// Create context
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ db, auth, currentUser, appId }}>
      {children}
    </FirebaseContext.Provider>
  );
};
