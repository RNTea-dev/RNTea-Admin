// src/components/AuthModal.jsx
import React, { useState, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App'; // Removed .jsx extension

const AuthModal = ({ onClose }) => {
    const {
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithApple,
        linkAnonymousWithEmailPassword,
        linkAnonymousWithApple,
        auth, // Access auth instance to check if user is anonymous
        currentUserId // To display user ID
    } = useContext(FirebaseContext);

    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(''); // Local message for modal
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const showLocalMessage = useCallback((text, type) => {
        setMessage(text);
        setMessageType(type);
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 5000);
    }, []);

    const isAnonymous = auth?.currentUser?.isAnonymous;

    const handleAuthAction = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        if (!email || !password) {
            showLocalMessage('Please enter both email and password.', 'error');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            showLocalMessage('Passwords do not match.', 'error');
            return;
        }

        if (isLogin) {
            // Login
            if (isAnonymous) {
                // If anonymous, try to link with email/password first
                const user = await linkAnonymousWithEmailPassword(email, password);
                if (user) {
                    showLocalMessage('Anonymous account linked and signed in!', 'success');
                    onClose();
                } else {
                    // If linking failed (e.g., email already in use), offer to sign in with that email
                    // This is a common Firebase flow: if linking fails because email exists, try re-authenticating
                    try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password);
                        showLocalMessage('Signed in successfully!', 'success');
                        onClose();
                    } catch (signInError) {
                        showLocalMessage(`Login Failed: ${signInError.message}`, 'error');
                    }
                }
            } else {
                // Regular sign in
                const user = await signInWithEmailPassword(email, password);
                if (user) {
                    showLocalMessage('Signed in successfully!', 'success');
                    onClose();
                }
            }
        } else {
            // Sign Up
            const user = await signUpWithEmailPassword(email, password);
            if (user) {
                showLocalMessage('Account created and signed in!', 'success');
                onClose();
            }
        }
    };

    const handleGoogleSignIn = async () => {
        // Implement Google Sign-In if needed, currently not passed via context
        showLocalMessage('Google Sign-In not yet implemented.', 'info');
    };

    const handleAppleSignIn = async () => {
        if (isAnonymous) {
            const user = await linkAnonymousWithApple();
            if (user) {
                showLocalMessage('Anonymous account linked with Apple and signed in!', 'success');
                onClose();
            }
        } else {
            const user = await signInWithApple();
            if (user) {
                showLocalMessage('Signed in with Apple successfully!', 'success');
                onClose();
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </h2>

                {message && (
                    <div className={`p-3 mb-4 rounded-md text-center ${messageType === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleAuthAction} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige"
                                placeholder="********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 shadow-md btn-hover-scale"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(prev => !prev)}
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                    {isLogin && (
                        <button
                            onClick={() => showLocalMessage('Password reset functionality not yet implemented.', 'info')} // Placeholder
                            className="text-blue-500 hover:underline text-sm mt-2"
                        >
                            Forgot Password?
                        </button>
                    )}
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6 space-y-4">
                    <p className="text-center text-gray-600">Or continue with</p>
                    <div className="flex justify-center gap-4">
                        {/* Google Sign-in Button */}
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-md shadow-sm hover:bg-gray-50 transition duration-300 btn-hover-scale"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.0003 4.75C14.0273 4.75 15.8053 5.438 17.1523 6.694L18.9643 4.882C17.0183 3.033 14.6063 2 12.0003 2C8.87533 2 6.07133 3.453 4.38633 5.859L6.04633 7.153C6.88233 5.761 8.39633 4.75 12.0003 4.75Z" fill="#EA4335"/>
                                <path d="M23.4999 12.272C23.4999 11.492 23.4249 10.721 23.2999 9.969H12.2009V14.51H18.7959C18.5919 15.534 17.9739 16.395 17.1199 16.989L18.7959 18.293C19.8669 17.335 20.6699 16.035 21.1899 14.51L23.4999 12.272Z" fill="#4285F4"/>
                                <path d="M6.04625 16.847L4.38625 18.141C5.97125 20.547 8.87525 22 12.0003 22C14.5943 22 17.0003 20.967 18.9353 19.14L17.1433 17.714C15.8053 18.528 14.0273 19.002 12.0003 19.002C8.39633 19.002 6.88233 17.991 6.04625 16.847Z" fill="#34A853"/>
                                <path d="M4.70725 14.51L2.39725 16.75C1.61525 15.226 1.12725 13.626 1.12725 12C1.12725 10.374 1.61525 8.774 2.39725 7.25L4.70725 9.488C4.24925 10.492 3.99925 11.25 3.99925 12C3.99925 12.75 4.24925 13.508 4.70725 14.51Z" fill="#FBBC04"/>
                            </svg>
                            Google
                        </button>
                        {/* Apple Sign-in Button (SVG path removed for now) */}
                        <button
                            onClick={handleAppleSignIn}
                            className="flex items-center justify-center w-1/2 bg-black text-white py-3 px-4 rounded-md shadow-sm hover:bg-gray-800 transition duration-300 btn-hover-scale"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                {/* Apple icon path removed for now */}
                            </svg>
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
