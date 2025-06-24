// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation(); // Get current location object including hash

    useEffect(() => {
        // Scroll to specific section if hash exists in URL
        if (location.hash) {
            const id = location.hash.substring(1); // Get the id without '#'
            const element = document.getElementById(id);
            if (element) {
                // Use setTimeout to ensure the page has rendered and the fixed header is in place
                // before attempting to scroll. Adjust delay if needed.
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); // Small delay to allow layout to settle
            }
        }
    }, [location.hash]); // Rerun when the URL hash changes

    useEffect(() => {
        // Scroll Reveal Animations using Intersection Observer
        const revealElements = document.querySelectorAll('.revealable');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1; // Ensure opacity is set
                    // Animations are already applied via CSS classes
                    // For staggered animation, you might add a custom data-delay and set it here
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1, // Element is 10% visible
            rootMargin: "0px 0px -50px 0px" // Start animation slightly before it's fully in view
        });

        // Observe each revealable element
        revealElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on component unmount
        return () => {
            revealElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <>
            {/* Hero Section: Main Call to Action */}
            <section id="home" className="relative bg-custom-beige text-gray-800 py-24 px-6 md:px-10 lg:px-16 text-center rounded-lg mx-4 mb-2 shadow-lg overflow-hidden animate-fade-in section-hover">
                <div className="absolute inset-0 z-0 opacity-20">
                    {/* Subtle dot pattern for background aesthetic */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#FFC982" />
                            </pattern>
                        </defs>
                        {/* Rectangle height remains 100 to scale proportionally within the SVG */}
                        <rect x="0" y="0" width="100" height="100" fill="url(#dot-pattern)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-down drop-shadow-md">RNTea: Rate, Navigate, Trust.</h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-700 animate-fade-in-up"> Do you really trust your Doctors? Let's hear from experienced RNs for a change. </p>
                    <Link to="/reviews" className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border border-gray-200 animate-fade-in-up antialiased"> View Some Reviews </Link>
                </div>
            </section>

            {/* About Us Section: Brand Philosophy */}
            <section id="about" className="bg-white py-20 px-6 md:px-10 lg:px-16 mx-4 mt-2 mb-1 rounded-lg shadow-lg section-hover scroll-margin-top-adjusted revealable">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center order-2 md:order-1 animate-slide-in-left">
                        {/* Image of a collage of nurses */}
                       <img src="/Express-collage.jpg" alt="Collage of diverse medical professionals" className="rounded-lg shadow-xl border-4 border-custom-beige w-full max-w-md object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/F0F0F0/888888?text=Image+Not+Loaded'; }} />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left order-1 md:order-2 animate-slide-in-right">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Philosophy</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4 antialiased">
                            At RNTea, we believe in transparency and community to help you find the best care.
                            Discover insights, share experiences, and make informed decisions with confidence.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed antialiased">
                            Our platform empowers Registered Nurses to share their honest experiences, providing a unique and invaluable perspective on healthcare providers. We aim to build a trusted resource for patients seeking reliable and empathetic care, while also helping nurses navigate career decisions whether it be short term travel contracts or a potential employer.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold antialiased">Now spill some RNTea!</p>
                    </div>
                </div>
            </section>

            {/* Reviews Section (kept for structure, but main reviews are on ReviewsHubPage) */}
            <section id="reviews" className="bg-custom-beige py-20 px-6 md:px-10 lg:px-16 mx-4 my-1 rounded-lg shadow-lg section-hover">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 animate-fade-in-down revealable">Community Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Review Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 animate-scale-in revealable" style={{ animationDelay: '0.1s' }}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500 text-2xl mr-2">★★★★★</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Lee</h3>
                                </div>
                                <p className="text-gray-600 text-base mb-4">"Dr. Lee is incredibly attentive and truly listens to patient concerns. Her communication with nursing staff is excellent, leading to coordinated and effective care. Highly recommend!"</p>
                                <p className="text-gray-500 text-sm italic">- RN, John Doe (Emergency Department)</p>
                            </div>
                        </div>

                        {/* Review Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 animate-scale-in revealable" style={{ animationDelay: '0.2s' }}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500 text-2xl mr-2">★★★★☆</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Dr. Michael Chen</h3>
                                </div>
                                <p className="text-gray-600 text-base mb-4">"Good bedside manner, but sometimes a bit slow on charting updates. Overall, a competent physician who cares about patient outcomes."</p>
                                <p className="text-gray-500 text-sm italic">- RN, Jane Smith (ICU)</p>
                            </div>
                        </div>

                        {/* Review Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 animate-scale-in revealable" style={{ animationDelay: '0.3s' }}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-500 text-2xl mr-2">★★★☆☆</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Dr. Emily White</h3>
                                </div>
                                <p className="text-gray-600 text-base mb-4">"Knowledgeable, but can be a bit rushed during rounds. Improvement in team communication would greatly enhance efficiency."</p>
                                <p className="text-gray-500 text-sm italic">- RN, David Brown (Surgical Unit)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-white py-20 px-6 md:px-10 lg:px-16 mx-4 my-1 rounded-lg shadow-lg section-hover scroll-margin-top-adjusted revealable">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-16 animate-fade-in-down">Contact Us!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Send us a Message Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-slide-in-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="your-name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                                    <input type="text" id="your-name" className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent" placeholder="John Doe" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="your-email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
                                    <input type="email" id="your-email" className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent" placeholder="you@example.com" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                                    <input type="text" id="subject" className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent" placeholder="Regarding a review..." />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="your-message" className="block text-gray-700 text-sm font-medium mb-2">Your Message <span className="text-gray-500">(optional)</span></label>
                                    <textarea id="your-message" rows="5" className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-custom-beige focus:border-transparent" placeholder="Share your experience... (optional)"></textarea>
                                </div>
                                {/* ReCAPTCHA placeholder (for demonstration) */}
                                <div className="mb-6 bg-gray-200 p-4 rounded text-center text-gray-600 text-sm">
                                    [ReCAPTCHA Placeholder]
                                    <p className="text-xs mt-2">ERROR for site owner: Invalid domain for site key</p>
                                    <p className="text-xs">reCAPTCHA Privacy - Terms</p>
                                </div>
                                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md w-full transition duration-300 ease-in-out">Send Message</button>
                            </form>
                        </div>

                        {/* Right Column: Find Us & Connect With Us */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-slide-in-right">
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
                                    <a href="https://facebook.com/rntea" target="_blank" className="social-icon-hover text-blue-600 hover:text-blue-700 transition duration-300 transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.552-4.192 4.615v3.385z"/>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/rntea_official" target="_blank" className="social-icon-hover text-blue-400 hover:text-blue-500 transition duration-300 transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.162-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.218 0-5.817 2.6-5.817 5.817 0 .455.05.897.138 1.316-4.836-.244-9.135-2.56-12.008-6.075-.5.855-.78 1.849-.78 2.923 0 2.01.996 3.78 2.502 4.829-.922-.028-1.79-.28-2.54-.66v.073c0 2.81 1.997 5.148 4.637 5.682-.485.131-.996.202-1.52.202-.371 0-.73-.035-1.076-.103.736 2.302 2.863 3.972 5.385 4.019-1.987 1.558-4.494 2.484-7.228 2.484-.473 0-.94-.027-1.4-.083 2.57 1.64 5.622 2.593 8.89 2.593 10.665 0 16.48-8.825 16.48-16.493 0-.252-.007-.5-.018-.75z"/>
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/company/rntea" target="_blank" className="social-icon-hover text-blue-700 hover:text-blue-800 transition duration-300 transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/rntea_official" target="_blank" className="social-icon-hover text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-.058 1.265-.07 1.645-.07 4.85s.012 3.584.07 4.85c.148 3.252 1.691 4.771 4.919 4.919 1.265.058 1.645.07 4.85.07s3.584-.012 4.85-.07c3.252-.148 4.771-1.691 4.919-4.919.058-1.265.07-1.645.07-4.85s-.012-3.584-.07-4.85c-.119-2.618-1.26-3.83-3.949-3.949-1.265-.058-1.645-.07-4.85-.07zm0 2.163c-3.204 0-3.584.012-4.85.07-2.618.119-3.83 1.26-3.949 3.949-.058 1.265-.07 1.645-.07 4.85s.012 3.584.07 4.85c.119 2.618 1.26 3.83 3.949 3.949 1.265.058 1.645.07 4.85.07s3.584-.012 4.85-.07c2.618-.119 3.83-1.26 3.949-3.949.058-1.265.07-1.645.07-4.85s-.012-3.584-.07-4.85c-.119-2.618-1.26-3.83-3.949-3.949-1.265-.058-1.645-.07-4.85-.07zm0 3.65c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 2.163c1.336 0 2.337 1.001 2.337 2.337s-1.001 2.337-2.337 2.337-2.337-1.001-2.337-2.337 1.001-2.337 2.337-2.337zm6.406-7.078c-.732 0-1.328.596-1.328 1.328s.596 1.328 1.328 1.328 1.328-.596 1.328-1.328-.596-1.328-1.328-1.328z"/>
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

export default HomePage;
