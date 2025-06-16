// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure Tailwind CSS and custom animations are applied

export default function HomePage() {
    return (
        // Outermost container now handles the full-page background image
        // It must take full width and expand to fill available height within App.jsx's <main>
        <div className="w-full flex-grow flex items-center justify-center p-4 relative"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '1rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
        >
            {/* Full-page semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-gray-900 opacity-60 z-0"></div>

            {/* Main Content Area - placed above the overlay (z-index 10) */}
            <div className="text-center bg-white p-10 rounded-2xl shadow-2xl max-w-2xl w-full
                            transform hover:shadow-3xl transition-shadow duration-300 ease-in-out
                            fade-in delay-200ms z-10 relative">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-10 leading-tight
                               fade-in-up delay-400ms">
                    Welcome to <span className="text-green-700">RN</span>Tea: Rate, Navigate, Trust
                    <br className="hidden sm:block" />
                    {/* Increased text thickness using font-bold */}
                    <span className="text-green-800 text-xl sm:text-2xl font-bold block mt-4 sm:mt-6 pt-2 px-4 border-t-2 border-black mx-auto max-w-lg">
                        Do you really trust your Doctors? Let's hear from experienced RNs for a change.
                    </span>
                </h2>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center">
                    {/* Updated Link to /query for the RN button */}
                    <Link to="/query" className="block mx-auto sm:mx-0 w-auto max-w-xs sm:max-w-none">
                        <button className="px-8 py-5 bg-green-700 text-white text-xl font-semibold rounded-xl
                                       shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-4 focus:ring-green-400
                                       button-hover-effect scale-in delay-1000ms w-full">
                            RN
                        </button>
                    </Link>
                    <Link to="/reviews" className="block mx-auto sm:mx-0 w-auto max-w-xs sm:max-w-none">
                        <button className="px-8 py-5 bg-teal-600 text-white text-xl font-semibold rounded-xl
                                       shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-4 focus:ring-teal-300
                                       button-hover-effect scale-in delay-1200ms w-full">
                            REVIEWS
                        </button>
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-12 fade-in-up delay-1400ms">
                    RNs! We do not share identity of the individual leaving the review. 
                </p>
            </div>
        </div>
    );
}
