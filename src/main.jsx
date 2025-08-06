// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// Initialize Google Analytics if the Measurement ID is available
if (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) {
    const gaMeasurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

    // Dynamically add the gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaMeasurementId);

    console.log(`Google Analytics initialized with ID: ${gaMeasurementId}`);
} else {
    console.warn("VITE_FIREBASE_MEASUREMENT_ID not found in environment variables. Google Analytics will not be initialized.");
}


const rootElement = document.getElementById('root');

if (rootElement) {
    console.log("main.jsx: Root element found. Attempting to mount React App with Router...");
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    console.log("main.jsx: React App with Router mount instruction sent.");
} else {
    console.error("main.jsx: ERROR - Root element not found in DOM. Cannot mount React App.");
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

/*const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
*/