// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Only BrowserRouter needed here

// Import your main App component (the new one)
import App from './App.jsx';

// Import global CSS
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    console.log("Attempting to mount React App with Router from main.jsx...");
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                {/* The new App component will handle all routing */}
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    console.log("React App with Router mounted successfully from main.jsx.");
} else {
    console.error("Root element not found in DOM. Cannot mount React App.");
}
