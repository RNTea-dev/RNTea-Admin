// src/utils/firebaseConfig.js
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from "firebase/functions";

// Firebase config from .env (Vite uses import.meta.env)
const firebaseConfig = {
  apiKey: "AIzaSyBEwSVX9UY7-MNxeYwdbY0ZmDuXzYyt56g",
  authDomain: "rntea-cca78.firebaseapp.com",
  projectId: "rntea-cca78",
  storageBucket: "rntea-cca78.firebasestorage.app",
  messagingSenderId: "806310857835",
  appId: "1:806310857835:web:68f7dccb581c85a4fe352e",
  measurementId: "G-CEM5KQNZCG"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);