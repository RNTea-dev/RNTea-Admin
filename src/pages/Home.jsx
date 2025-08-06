import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Feed from './Feed.jsx';

const Home = () => {
    const location = useLocation();
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionCooldown, setSubmissionCooldown] = useState(0);

    // Smooth scroll function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const offset = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    // Handle hash links (e.g., #about)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const targetElement = document.getElementById(id);
            const headerElement = document.querySelector('header');
            if (targetElement) {
                setTimeout(() => {
                    let offset = headerElement ? headerElement.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset - 10;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 150);
            }
        }
    }, [location.hash]);

    const handleFeedbackSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (submissionCooldown > 0) return;
        setIsSubmitting(true);
        if (honeypot) return;
        if (!feedbackMessage.trim()) {
            setIsSubmitting(false);
            return;
        }
        setFeedbackMessage('');
        setHoneypot('');
        const cooldownDuration = 10;
        setSubmissionCooldown(cooldownDuration);
        let timer = setInterval(() => {
            setSubmissionCooldown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        setIsSubmitting(false);
    }, [feedbackMessage, honeypot, submissionCooldown]);

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative bg-custom-beige text-gray-800 py-24 px-6 md:px-10 lg:px-16 text-center rounded-lg mx-4 mb-2 shadow-lg overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#FFC982" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100" height="100" fill="url(#dot-pattern)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
                        RNTea: Real Nurse Truth
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed">
                        For nurses, by nurses — unfiltered and anonymous. Not your hospital’s suggestion box.
                    </p>
                    <a
                        href="#how-it-works"
                        onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                        className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl border border-gray-200"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white py-16 px-6 md:px-10 lg:px-16 mx-4 mt-2 mb-1 rounded-lg shadow-lg">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                            <img src="/Express-collage.jpg" alt="Collage of diverse medical professionals working together" className="rounded-lg shadow-xl border-4 w-full max-w-md object-cover" />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left order-1 md:order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Philosophy</h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                                 At RNTea, we believe nurses deserve a space to speak their truth. Created by RNs for RNs, our platform is a no-fluff, judgment-free zone where you can safely and anonymously share the real stories, frustrations, and unspoken realities of working alongside doctors and within the healthcare system.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                 Think of it as the breakroom—but digital, secure, and way more therapeutic. Whether you’re venting, validating, or just vibing with others who get it, RNTea is where your voice matters. Sip, spill, and scroll with the tribe that really understands what happens when the patient door closes.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold antialiased">Now spill some RNTea!</p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div id="how-it-works" className="text-center py-16 rounded-lg shadow-inner">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                            {/* Steps remain unchanged */}
                            {/* Step 1 */}
                            <div className="group p-8 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
                                <div className="mb-6 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-800 transition duration-300 ease-in-out group-hover:text-[#FFDEB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Write Your Tea</h3>
                                <p className="text-lg text-gray-700">Share your story anonymously, no sign-up needed.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="group p-8 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
                                <div className="mb-6 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-800 transition duration-300 ease-in-out group-hover:text-[#FFDEB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">AI Safety Check</h3>
                                <p className="text-lg text-gray-700">Our system helps remove identifiers for HIPAA safety.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="group p-8 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
                                <div className="mb-6 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-800 transition duration-300 ease-in-out group-hover:text-[#FFDEB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Share & Support</h3>
                                <p className="text-lg text-gray-700">Connect with others who understand your journey.</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="#full-reviews-hub"
                                onClick={(e) => { e.preventDefault(); scrollToSection('full-reviews-hub'); }}
                                className="bg-[#FFDEB5] hover:bg-custom-beige text-gray-800 font-bold py-3 px-10 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
                            >
                                Ready To Get Some Tea?
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feed Section */}
            <section id="full-reviews-hub" className="relative z-10 scroll-margin-top-adjusted">
                <Feed />
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-white py-20 px-6 md:px-10 lg:px-16 mx-4 my-1 rounded-lg shadow-lg section-hover scroll-margin-top-adjusted revealable">
                <div className="container mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12 animate-fade-in-down">Contact Us!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Anonymous Feedback/Suggestion Box */}
                        {/* Added group, relative, overflow-hidden. Inner div for animated top border. */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-slide-in-left group relative overflow-hidden">
                            {/* Animated top border element */}
                            <div className="absolute top-0 left-0 h-2 bg-[#CC5500] w-0 transition-all duration-300 ease-out group-hover:w-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Share Your Anonymous Feedback</h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                                Your thoughts help us improve RNTea! Share any suggestions, issues, or general feedback here. No names, no email required.
                            </p>
                            {/* The form is now always rendered, and the textarea's value is controlled by feedbackMessage state */}
                            <form onSubmit={handleFeedbackSubmit}> {/* Changed handler */}
                                <div className="mb-6">
                                    <label htmlFor="feedback-message" className="block text-gray-700 text-sm font-medium mb-2">Your Feedback</label>
                                    <textarea id="feedback-message" rows="7" className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent" placeholder="Tell us what's on your mind..." value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} required></textarea>
                                </div>
                                {/* Honeypot field - hidden from human users */}
                                <div style={{ display: 'none' }}>
                                    <label htmlFor="honeypot-field">Leave this field blank</label>
                                    <input
                                        type="text"
                                        id="honeypot-field"
                                        name="honeypot"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex="-1" // Make it not focusable by keyboard
                                        autoComplete="off" // Prevent browser autofill
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#FFDEB5] hover:bg-custom-beige text-gray-800 font-bold py-3 px-6 rounded-md w-full transition duration-300 ease-in-out"
                                    disabled={isSubmitting || submissionCooldown > 0} // Disable if submitting or in cooldown
                                >
                                    {isSubmitting ? 'Sending...' : (submissionCooldown > 0 ? `Wait ${submissionCooldown}s` : 'Send Feedback')}
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Find Us & Connect With Us */}
                        {/* Added group, relative, overflow-hidden. Inner div for animated top border. */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-slide-in-right group relative overflow-hidden">
                            {/* Animated top border element */}
                            <div className="absolute top-0 left-0 h-2 bg-[#CC5500] w-0 transition-all duration-300 ease-out group-hover:w-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Addresses</h3>
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-700 font-medium">General Questions</p>
                                        <a href="mailto:questions@rntea.com" className="text-blue-600 hover:underline">questions@rntea.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15.75c-2.648 0-5.195-.429-7.669-1.245a2.793 2.793 0 01-1.342-2.934 11.233 11.233 0 013.744-6.436 2.922 2.922 0 011.644-1.018 10.38 10.38 0 015.894 0 2.922 2.922 0 011.644 1.018 11.233 11.233 0 013.744 6.436 2.793 2.793 0 01-1.342 2.934z"/>
                                    </svg>
                                    <div>
                                        <p className="text-gray-700 font-medium">Business Inquiries</p>
                                        <a href="mailto:business@rntea.com" className="text-blue-600 hover:underline">business@rntea.com</a>
                                    </div>
                                    </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with Us</h3>
                                <div className="flex space-x-6 justify-start">
                                    <a href="https://www.facebook.com/profile.php?id=61578820435340" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-blue-600 hover:text-blue-700 transition duration-300 transform hover:scale-110 w-10 h-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.552-4.192 4.615v3.385z"/>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/rntea_official" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-gray-800 hover:text-black transition duration-300 transform hover:scale-110 w-10 h-10 flex items-center justify-center">
                                        {/* X (formerly Twitter) icon */}
                                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 671.544L0 1226.37H105.866L515.414 750.206L852.076 1226.37H1200L714.163 519.284ZM569.165 687.828L521.617 619.927L144.036 79.6262H302.46L603.935 515.043L651.483 582.944L1055.03 1147.37H896.59L569.165 687.828Z"/>
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/company/rntea/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-blue-700 hover:text-blue-800 transition duration-300 transform hover:scale-110 w-10 h-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/myrntea/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-110 w-10 h-1- flex items-center justify-center">
                                        {/* Modern Instagram icon - removed explicit width/height from SVG, relying on parent a tag and flex centering */}
                                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 4A2.2 2.2 0 0 0 5.4 6.2v8.4c0 1.2.9 2.2 2.2 2.2h8.4a2.2 2.2 0 0 0 2.2-2.2V6.2A2.2 2.2 0 0 0 16.2 4H7.6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-3A1.5 1.5 0 1 0 18.5 7 1.5 1.5 0 0 0 18.5 4z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
