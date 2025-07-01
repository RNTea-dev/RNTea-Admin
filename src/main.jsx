    // src/main.jsx

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';

    import App from './App.jsx';
    import './index.css';

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
    }
    