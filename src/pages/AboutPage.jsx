// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        // Main content area of the About page
        // Apply the specific background color to the main wrapper
        <main className="flex-grow bg-blue-50"> {/* Applied background color directly here */}
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-20 px-4 text-center overflow-hidden">
                <div className="container mx-auto px-4 animated-section flex flex-col items-center justify-center min-h-[50vh]"> {/* Added mx-auto px-4 */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animated-text">
                        Empowering Your <span className="text-teal-600">Healthcare Choices</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 animated-text" style={{ animationDelay: '0.3s' }}>
                        At RNTea, we believe in transparency and community to help you find the best care.
                        Discover insights, share experiences, and make informed decisions with confidence.
                    </p>
                    <img src="https://placehold.co/800x450/4ade80/FFFFFF?text=Diverse+Women+in+Healthcare+Tech" alt="Diverse women collaborating in healthcare tech"
                         className="mt-8 rounded-xl shadow-2xl w-full max-w-4xl h-auto animated-img" style={{ animationDelay: '0.6s' }} />
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 animated-section"> {/* Added mx-auto px-4 */}
                    <div className="md:w-1/2">
                        <img src="https://placehold.co/600x400/818cf8/FFFFFF?text=Woman+Doctor+Consulting" alt="Woman doctor consulting with patient"
                             className="rounded-xl shadow-lg w-full h-auto animated-img" style={{ animationDelay: '0.1s' }} />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6 animated-text" style={{ animationDelay: '0.3s' }}>Our Mission: Clarity, Compassion, Community</h2>
                        <p className="text-lg text-gray-600 mb-4 animated-text" style={{ animationDelay: '0.5s' }}>
                            We are a team driven by the vision of a healthier, more informed world. Our platform is built on the pillars of **transparency, user-centric design, and reliable information**. We aim to empower individuals to navigate the complexities of healthcare with ease and confidence.
                        </p>
                        <p className="text-lg text-gray-600 animated-text" style={{ animationDelay: '0.7s' }}>
                            RNTea provides a trusted space where real patient experiences contribute to a collective wisdom, guiding others towards optimal care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Our Values Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto px-4 animated-section text-center"> {/* Added mx-auto px-4 */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 animated-text">Why Choose RNTea? Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center animated-section" style={{ animationDelay: '0.1s' }}>
                            <div className="text-teal-500 mb-4 text-5xl">💡</div> {/* Lightbulb emoji */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Empowering Insights</h3>
                            <p className="text-gray-600">Access verified reviews and comprehensive information to make the best decisions for your health.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center animated-section" style={{ animationDelay: '03s' }}>
                            <div className="text-purple-500 mb-4 text-5xl">🤝</div> {/* Handshake emoji */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Vibrant Community</h3>
                            <p className="text-gray-600">Join a network of individuals sharing valuable experiences, fostering a supportive environment.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center animated-section" style={{ animationDelay: '0.5s' }}>
                            <div className="text-yellow-500 mb-4 text-5xl">✨</div> {/* Sparkle emoji */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Unwavering Integrity</h3>
                            <p className="text-gray-600">We maintain strict standards for review authenticity, ensuring trustworthy and unbiased information.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Team Section (Focus on diverse female leadership/expertise) */}
            <section className="py-16 px-4 bg-blue-50">
                <div className="container mx-auto px-4 animated-section text-center"> {/* Added mx-auto px-4 */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 animated-text">Meet Our Visionary Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animated-section" style={{ animationDelay: '0.1s' }}>
                            <img src="https://placehold.co/150x150/60a5fa/FFFFFF?text=Dr.+Elara+Khan" alt="Dr. Elara Khan"
                                 className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-teal-400 animated-img" />
                            <h3 className="text-2xl font-semibold text-gray-800">Dr. Elara Khan</h3>
                            <p className="text-teal-600 font-medium mb-2">Founder & CEO</p>
                            <p className="text-gray-600 text-center">A passionate advocate for patient rights and healthcare accessibility, Dr. Khan leads RNTea with a commitment to innovation.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animated-section" style={{ animationDelay: '0.3s' }}>
                            <img src="https://placehold.co/150x150/d8b4fe/FFFFFF?text=Ms.+Lena+Chen" alt="Ms.+Lena+Chen"
                                 className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-400 animated-img" />
                            <h3 className="text-2xl font-semibold text-gray-800">Ms. Lena Chen</h3>
                            <p className="text-purple-600 font-medium mb-2">Chief Technology Officer</p>
                            <p className="text-gray-600 text-center">Lena, a tech visionary, crafts intuitive and secure platforms, ensuring RNTea is always at the forefront of digital healthcare solutions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animated-section" style={{ animationDelay: '0.5s' }}>
                            <img src="https://placehold.co/150x150/fde047/FFFFFF?text=Ms.+Sophia+Ross" alt="Ms.+Sophia+Ross"
                                 className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-yellow-400 animated-img" />
                            <h3 className="text-2xl font-semibold text-gray-800">Ms. Sophia Ross</h3>
                            <p className="text-yellow-600 font-medium mb-2">Head of Community Engagement</p>
                            <p className="text-gray-600 text-center">Sophia fosters our thriving community, ensuring every voice is heard and every experience contributes to our shared knowledge.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-500 text-white text-center">
                <div className="container mx-auto px-4 animated-section"> {/* Added mx-auto px-4 */}
                    <h2 className="text-4xl font-bold mb-6 animated-text">Join the Movement for Better Healthcare</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto animated-text" style={{ animationDelay: '0.3s' }}>
                        Your voice matters. Contribute to a community that's building a more transparent and trustworthy healthcare system for everyone.
                    </p>
                    <Link to="/query"
                       className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cta-button ripple-effect" style={{ animationDelay: '0.6s' }}>
                        Start Exploring Today!
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
