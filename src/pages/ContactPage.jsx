// src/pages/ContactPage.jsx
import React, { useState, useCallback, useRef, useContext } from 'react'; // Added useRef and useContext
import ReCAPTCHA from 'react-google-recaptcha'; // Import the library component
import { FirebaseContext } from '../App.jsx'; // Import FirebaseContext for Cloud Function calls
import MessageBox from '../components/MessageBox.jsx'; // Make sure MessageBox is imported if you use it
// FontAwesome imports (assuming these are installed and configured as discussed)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Added faBriefcase

const ContactPage = () => {
    const [formMessage, setFormMessage] = useState({ text: '', type: '' });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState(null); // State to store reCAPTCHA token
    const recaptchaRef = useRef(null); // Ref to access the ReCAPTCHA component methods (e.g., reset)

    // Consume functions and httpsCallable from FirebaseContext
    const { functions, httpsCallable } = useContext(FirebaseContext);

    /**
     * Displays a message within the contact form.
     * @param {string} text - The message text.
     * @param {'success'|'error'} type - Type of message for styling.
     */
    const displayFormMessage = useCallback((text, type) => {
        setFormMessage({ text, type });
        setTimeout(() => {
            setFormMessage({ text: '', type: '' });
        }, 5000); // Hide message after 5 seconds
    }, []);

    const handleSubmit = async (e) => { // Made async for Firebase function call
        e.preventDefault();

        // Basic validation
        if (!name || !email || !subject || !message) {
            displayFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Email format validation
        if (!/^[^s@]+@[^s@]+\.[^s@]+$/.test(email)) { // Corrected regex for . (dot)
            displayFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // --- reCAPTCHA Validation ---
        // Ensure the reCAPTCHA token has been received
        if (!recaptchaToken) {
            displayFormMessage('Please complete the reCAPTCHA.', 'error');
            return;
        }

        try {
            // Call the Firebase Cloud Function to verify the token and submit data
            const submitContactForm = httpsCallable(functions, 'submitContactForm');

            const result = await submitContactForm({
                name,
                email,
                subject,
                message,
                recaptchaToken, // Pass the reCAPTCHA token to the Cloud Function
            });

            const data = result.data; // Callable functions return data in result.data

            if (data.success) {
                displayFormMessage('Your message has been sent successfully! We will get back to you soon.', 'success');
                // Clear form fields on successful submission
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setRecaptchaToken(null); // Clear the token state
                recaptchaRef.current.reset(); // Reset the reCAPTCHA widget
            } else {
                displayFormMessage(data.message || 'Form submission failed. Please try again.', 'error');
                recaptchaRef.current.reset(); // Reset reCAPTCHA widget on failure
            }
        } catch (error) {
            console.error("Error calling Cloud Function:", error.code, error.message);
            let errorMessage = 'An unexpected error occurred during submission. Please try again.';
            if (error.code === 'unauthenticated') {
                errorMessage = 'reCAPTCHA verification failed. Please re-verify.';
            } else if (error.code === 'invalid-argument') {
                errorMessage = 'Please provide all required form details.';
            }
            displayFormMessage(errorMessage, 'error');
            recaptchaRef.current.reset(); // Reset reCAPTCHA widget on error
        }
    };

    return (
        <main className="flex-grow bg-gray-100">
            {/* Hero Section */}
            <section
                className="wavy-bg text-white py-20 px-4 text-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #38a169 0%, #2f855a 100%)' }}
            >
                <div className="container mx-auto px-4 animated-section">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animated-text">Get in Touch with RNTea</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animated-text" style={{ animationDelay: '0.3s' }}>
                        We'd love to hear from you! Whether you have questions, feedback, or
                        just want to say hello, reach out to us using the form below or connect with us on social media.
                    </p>
                </div>
            </section>

            {/* Contact Content Section - Added 'fade-in' class here for the section itself */}
            <div className="container mx-auto px-4 py-12">
                <section className="bg-white p-8 rounded-lg shadow-xl grid md:grid-cols-2 gap-12 animated-section fade-in">
                    {/* Contact Form Column - Added px-6 for more internal horizontal padding */}
                    <div className="animated-section px-6" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3 animated-text" style={{ animationDelay: '0.2s' }}>Send us a Message</h2>
                        {formMessage.text && (
                            // Use MessageBox component if available, otherwise fallback to div
                            <MessageBox message={formMessage.text} type={formMessage.type} />
                        )}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="animated-text" style={{ animationDelay: '0.4s' }}>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="animated-text" style={{ animationDelay: '0.5s' }}>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="animated-text" style={{ animationDelay: '0.6s' }}>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm hover:shadow-md"
                                    placeholder="Regarding a review..."
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="animated-text" style={{ animationDelay: '0.7s' }}>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 shadow-sm mb-3"
                                    rows="4"
                                    placeholder="Share your experience... (optional)"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* reCAPTCHA Widget using react-google-recaptcha - Positioned BEFORE the button */}
                            <div className="flex justify-center my-4"> {/* Adjusted margin for better spacing */}
                                <ReCAPTCHA
                                    sitekey="6LefG2MrAAAAAJBpmzQTIalaXKpKLTCTmOgohj_u" // <<< IMPORTANT: Replace with your actual Site Key
                                    onChange={setRecaptchaToken}      // Sets the reCAPTCHA token in state on successful completion
                                    onExpired={() => setRecaptchaToken(null)} // Clears the token if it expires
                                    ref={recaptchaRef}                // Allows programmatic reset of the widget
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-md text-lg shadow-md hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 animated-text" style={{ animationDelay: '0.8s' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Find Us Column */}
                    <div className="animated-section px-6" style={{ animationDelay: '0.3s' }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3 animated-text" style={{ animationDelay: '0.4s' }}>Find Us</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 animated-text" style={{ animationDelay: '0.5s' }}>
                                {/* Using FontAwesomeIcon component instead of <i> tag */}
                                <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-2xl" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">General Questions</h3>
                                    <p className="text-gray-600">questions@rntea.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 animated-text" style={{ animationDelay: '0.6s' }}>
                                {/* Using FontAwesomeIcon component instead of <i> tag */}
                                <FontAwesomeIcon icon={faBriefcase} className="text-green-600 text-2xl" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Business Inquiries</h3>
                                    <p className="text-gray-600">business@rntea.com</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Replaced Social Media Section */}
                        <div className="mt-8 border-t pt-6 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with Us</h3>
                            <div className="flex space-x-6 justify-center md:justify-start">
                                <a href="https://facebook.com/rntea" target="_blank" className="text-gray-500 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300 pop-in-item" style={{ transitionDelay: '0.5s' }}>
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://twitter.com/rntea" target="_blank" className="text-gray-500 hover:text-blue-400 transform hover:scale-125 transition-transform duration-300 pop-in-item" style={{ transitionDelay: '0.6s' }}>
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.72v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                                <a href="https://linkedin.com/company/rntea" target="_blank" className="text-gray-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300 pop-in-item" style={{ transitionDelay: '0.7s' }}>
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.535-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://instagram.com/rntea" target="_blank" className="text-gray-500 hover:text-pink-500 transform hover:scale-125 transition-transform duration-300 pop-in-item" style={{ transitionDelay: '0.8s' }}>
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.965.297 4.297.587c-.66.29-1.22.668-1.77.77-1.25.267-2.162.77-2.913 1.516-.766.772-1.272 1.684-1.517 2.93-.306.66-.47 1.47-.53 2.746-.06 1.28-.076 1.67-.076 5.922 0 3.26.015 3.666.072 4.94.06 1.28.225 2.09.513 2.766.29.66.668 1.22 1.517 2.93.772 1.25 1.684 2.162 2.93 2.913.66.306 1.47.47 2.746.53 1.28.06 1.67.076 5.922.076 3.26 0 3.666-.015 4.94-.072 1.28-.06 2.09-.225 2.766-.513 1.25-.29 2.162-.668 2.913-1.517.772-.766 1.272-1.684 1.517-2.93.306-.66.47-1.47.53-2.746.06-1.28.076-1.67.076-5.922 0-3.26-.015-3.666-.072-4.94-.06-1.28-.225-2.09-.513-2.766-.29-.66-.668-1.22-1.517-2.93-.766-1.25-1.684-2.162-2.93-2.913-.66-.306-1.47-.47-2.746-.53C16.333.014 15.922 0 12 0zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.425.64.265 1.095.42 1.536.836.44.416.658.88.836 1.536.176.422.37 1.057.425 2.227.056 1.265.07 1.65.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.25 1.805-.425 2.227-.265.64-.42 1.095-.836 1.536-.416-.44-.88-.658-1.536-.836-.422-.176-1.057-.37-2.227-.425C2.16 15.835 2.147 15.45 2.147 12s.016-3.585.071-4.85c.055-1.17.249-1.805.425-2.227.265-.64.42-1.095.836-1.536.44-.416.88-.658 1.536-.836.422-.176 1.057-.37 2.227-.425C8.415 2.16 8.8 2.147 12 2.147zm0 3.627c-3.405 0-6.173 2.769-6.173 6.173S8.595 18.173 12 18.173s6.173-2.769 6.173-6.173S15.405 5.787 12 5.787zm0 10.193c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.807-9.53a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Where to Find Us Section with Map */}
            <section className="py-16 px-4 bg-gray-50 animated-section fade-in">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 animated-text">Where to Find Us</h2>
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden aspect-video w-full max-w-4xl mx-auto animated-img" style={{ height: '600px', animationDelay: '0.1s' }}> {/* Increased height and added animationDelay */}
                        {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.337837096739!2d-71.0645084845579!3d42.358997979186636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370868bc2ceb7%3A0x82f4dd12c9d747a!2sBoston%20Common!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                        ></iframe>
                    </div>
                    <p className="text-gray-600 mt-6 text-lg animated-text" style={{ animationDelay: '0.3s' }}> {/* Adjusted animationDelay */}
                        Our main office is located in Boston, Massachusetts. We look forward to connecting with you!
                    </p>
                    {/* Removed the address text and map marker icon as requested */}
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
