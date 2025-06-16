// src/pages/QueryViewPage.jsx
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FirebaseContext } from '../App.jsx'; // Import the Firebase context (updated from App to App.jsx)
import MessageBox from '../components/MessageBox.jsx'; // Updated from MessageBox to MessageBox.jsx
import StarRating from '../components/StarRating.jsx'; // Updated from StarRating to StarRating.jsx

const EXPLICIT_WORDS = ['fuck', 'shit', 'asshole', 'bitch', 'cunt', 'damn', 'hell']; // Add more as needed
const MAX_CHAR_LIMIT = 250; // Max characters for comments and reviews (increased from 60 for better review comments)

/**
 * Filters content for expletives and enforces a character limit.
 * @param {string} content - The string content to filter.
 * @returns {{isValid: boolean, message: string}} - Object indicating validity and a message.
 */
function filterContent(content) {
    const lowerCaseContent = content.toLowerCase();

    // Check for expletives
    for (const word of EXPLICIT_WORDS) {
        if (lowerCaseContent.includes(word)) {
            return { isValid: false, message: "Content contains inappropriate language." };
        }
    }

    // Check character limit
    if (content.length > MAX_CHAR_LIMIT) {
        return { isValid: false, message: `Content exceeds ${MAX_CHAR_LIMIT} character limit.` };
    }

    return { isValid: true, message: "Content is valid." };
}

/**
 * Calculates the average rating for a given array of ratings.
 * @param {Array<Object>} ratings - An array of rating objects, each with a 'stars' property.
 * @returns {string} The average rating formatted to one decimal place, or '0' if no ratings.
 */
function calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0) return '0';
    const totalStars = ratings.reduce((sum, r) => sum + r.stars, 0);
    return (totalStars / ratings.length).toFixed(1);
}


const QueryViewPage = () => {
    // Access Firebase context
    // We get 'showMessage' from context, but need a local 'message' state for MessageBox
    const { db, userId, appId, loadingFirebase, showMessage: globalShowMessage, collection, doc, getDoc, getDocs, updateDoc, arrayUnion } = useContext(FirebaseContext);

    // Local state for displaying messages within QueryViewPage
    const [localMessage, setLocalMessage] = useState({ text: '', type: '' });

    // Custom showMessage function for QueryViewPage to manage its local message state
    // Removed useCallback here as it's not strictly necessary and might be causing an obscure timing issue
    const displayMessage = (text, type) => {
        setLocalMessage({ text, type });
        // Optionally, still send to global message box too if needed, but for now just local
        // globalShowMessage(text, type);
        setTimeout(() => setLocalMessage({ text: '', type: '' }), 5000);
    };


    // State for UI navigation and data
    const [activeSection, setActiveSection] = useState('hospitals'); // 'hospitals', 'doctors', 'details'
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false); // Local loading for this component's operations
    const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
    const [doctorSearchTerm, setDoctorSearchTerm] = useState('');
    const [currentRating, setCurrentRating] = useState(0); // State for the selected star rating for submission
    const [reviewComment, setReviewComment] = useState(''); // State for the review comment input

    // --- Data Fetching Functions (now regular functions, not memoized with useCallback) ---

    // Removed useCallback from fetchHospitals for simpler dependency management
    const fetchHospitals = async () => {
        setLoading(true);
        try {
            const hospitalsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals`);
            const hospitalDocsSnapshot = await getDocs(hospitalsCollectionRef);
            const fetchedHospitals = hospitalDocsSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setHospitals(fetchedHospitals);
            displayMessage('Hospitals loaded successfully!', 'success');
        } catch (error) {
            console.error("Error fetching hospitals:", error);
            displayMessage(`Failed to load hospitals: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };

    // Removed useCallback from fetchDoctorsForHospital for simpler dependency management
    const fetchDoctorsForHospital = async (hospitalId) => {
        setLoading(true);
        try {
            const doctorsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors`);
            const doctorDocsSnapshot = await getDocs(doctorsCollectionRef);
            const fetchedDoctors = doctorDocsSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setDoctors(fetchedDoctors);
            displayMessage(`Doctors loaded for hospital!`, 'success');
        } catch (error) {
            console.error(`Error fetching doctors for hospital ${hospitalId}:`, error);
            displayMessage(`Failed to load doctors: ${error.message}`, 'error');
            setDoctors([]); // Clear doctors on error
        } finally {
            setLoading(false);
        }
    };

    // Removed useCallback from fetchReviewsForDoctor for simpler dependency management
    const fetchReviewsForDoctor = async (hospitalId, doctorId) => {
        setLoading(true);
        try {
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors`, doctorId);
            const doctorSnap = await getDoc(doctorDocRef);
            if (doctorSnap.exists()) {
                const doctorData = doctorSnap.data();
                const reviewsWithComments = (doctorData.ratings || []).map(review => ({
                    ...review,
                    comments: review.comments || []
                }));
                setReviews(reviewsWithComments);
                displayMessage(`Reviews loaded for doctor!`, 'success');
            } else {
                setReviews([]);
                displayMessage('Doctor not found, no reviews to display.', 'error');
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
            displayMessage(`Failed to load reviews: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };


    // Effect to fetch hospitals when Firebase is ready
    useEffect(() => {
        // fetchHospitals is now a regular function, it does not need to be in the dependency array
        // It will capture the latest `db` and `appId` on each render.
        if (!loadingFirebase && db && appId) {
            fetchHospitals();
        }
    }, [loadingFirebase, db, appId]); // Depend only on Firebase readiness and core identifiers

    // --- UI Navigation and State Management (these still use useCallback as they are event handlers) ---

    const handleSelectHospital = useCallback(async (hospital) => {
        setSelectedHospital(hospital);
        setSelectedDoctor(null);
        setDoctors([]);
        setReviews([]);
        setActiveSection('doctors');
        // Call the regular function, it will get the current `db`, `appId`, `collection`, `getDocs`, `displayMessage`
        await fetchDoctorsForHospital(hospital.id);
        setDoctorSearchTerm('');
    }, [fetchDoctorsForHospital]); // Keeping `fetchDoctorsForHospital` here will cause this `useCallback` to re-memoize on every render if `fetchDoctorsForHospital` is not memoized. We can safely remove it from here too, if it's not a memoized function. However, the linter will complain, and it's good practice to list dependencies. Let's keep it here for now to trace the direct error.

    const handleSelectDoctor = useCallback(async (doctor) => {
        setSelectedDoctor(doctor);
        setActiveSection('details');
        setCurrentRating(0);
        setReviewComment('');
        // Call the regular function
        await fetchReviewsForDoctor(selectedHospital.id, doctor.id);
    }, [fetchReviewsForDoctor, selectedHospital]); // Similar reasoning as above.

    const handleBackToHospitals = useCallback(() => {
        setSelectedHospital(null);
        setSelectedDoctor(null);
        setDoctors([]);
        setReviews([]);
        setHospitalSearchTerm('');
        setActiveSection('hospitals');
    }, []);

    const handleBackToDoctors = useCallback(() => {
        setSelectedDoctor(null);
        setReviews([]);
        setDoctorSearchTerm('');
        setActiveSection('doctors');
    }, []);

    // --- Review Submission ---

    const handleSubmitReview = useCallback(async () => {
        if (!db || !selectedHospital || !selectedDoctor) {
            displayMessage("Application not ready or no doctor/hospital selected. Cannot submit review.", "error");
            return;
        }

        if (currentRating === 0) {
            displayMessage("Please select a star rating (1-5) before submitting.", "error");
            return;
        }

        const commentToSubmit = reviewComment.trim();
        if (commentToSubmit) {
            const filterResult = filterContent(commentToSubmit);
            if (!filterResult.isValid) {
                displayMessage(filterResult.message, "error");
                return;
            }
        }

        const reviewDate = new Date().toISOString();

        const newReview = {
            stars: currentRating,
            comment: commentToSubmit,
            date: reviewDate,
            reviewerId: userId || 'anonymous',
            comments: []
        };

        setLoading(true);
        try {
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
            await updateDoc(doctorRef, {
                ratings: arrayUnion(newReview)
            });
            displayMessage("Review submitted successfully!", "success");
            setCurrentRating(0);
            setReviewComment('');
            await fetchReviewsForDoctor(selectedHospital.id, selectedDoctor.id); // Call the regular function
        } catch (error) {
            console.error("Error submitting review:", error);
            displayMessage(`Failed to submit review: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, userId, appId, selectedHospital, selectedDoctor, currentRating, reviewComment, updateDoc, doc, fetchReviewsForDoctor, displayMessage]);

    // --- Comment Submission ---
    const handleSubmitComment = useCallback(async (reviewDateToMatch, commentText) => {
        if (!db || !selectedHospital || !selectedDoctor || !commentText) {
            displayMessage("Missing information to submit comment.", "error");
            return;
        }

        const filterResult = filterContent(commentText);
        if (!filterResult.isValid) {
            displayMessage(filterResult.message, "error");
            return;
        }

        setLoading(true);
        try {
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
            const doctorSnap = await getDoc(doctorRef);

            if (!doctorSnap.exists()) {
                displayMessage('Doctor or its reviews not found. Cannot add comment.', 'error');
                return;
            }

            const doctorData = doctorSnap.data();
            let currentRatings = doctorData.ratings || [];

            const newComment = {
                text: commentText,
                date: new Date().toISOString(),
                userId: userId || 'anonymous',
            };

            const updatedRatings = currentRatings.map(r => {
                if (r.date === reviewDateToMatch) {
                    const commentsArray = r.comments || [];
                    return {
                        ...r,
                        comments: [...commentsArray, newComment]
                    };
                }
                return r;
            });

            await updateDoc(doctorRef, { ratings: updatedRatings });
            displayMessage("Comment added successfully!", "success");
            await fetchReviewsForDoctor(selectedHospital.id, selectedDoctor.id); // Call the regular function
        } catch (error) {
            console.error("Error submitting comment:", error);
            displayMessage(`Failed to add comment: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, userId, appId, selectedHospital, selectedDoctor, doc, getDoc, updateDoc, displayMessage, fetchReviewsForDoctor]);


    // --- Render Logic ---
    // Display loading message if Firebase is still initializing or component is loading data
    if (loadingFirebase || loading) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-xl text-center py-8 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-lg">Loading {loadingFirebase ? 'application' : 'data'}...</p>
            </div>
        );
    }

    // After loading, if no hospitals are found, display a clear message
    if (activeSection === 'hospitals' && hospitals.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-xl text-center py-8 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-lg">No hospitals found. Please add hospitals via the Admin Panel.</p>
            </div>
        );
    }

    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase()) ||
        hospital.location.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
    );

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(doctorSearchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(doctorSearchTerm.toLowerCase())
    );

    return (
        // Main container for the QueryViewPage, always present and visible
        <div className="bg-white p-6 rounded-lg shadow-xl mb-8 border border-gray-200">
            {/* MessageBox for displaying general success/error messages */}
            {/* Use localMessage here */}
            <MessageBox message={localMessage.text} type={localMessage.type} />

            {/* Hospital Selection Section */}
            {activeSection === 'hospitals' && (
                <div className="fade-section active">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Select a Hospital</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="hospitalSearchInput"
                            placeholder="Search hospitals..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 shadow-sm"
                            value={hospitalSearchTerm}
                            onChange={(e) => setHospitalSearchTerm(e.target.value)}
                        />
                    </div>
                    <div id="hospitalList" className="scrollable-list">
                        {filteredHospitals.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No hospitals found matching your search. Try adjusting your search term or adding hospitals via the Admin Panel.</p>
                        ) : (
                            filteredHospitals.map(hospital => (
                                <div
                                    key={hospital.id}
                                    className="bg-gray-50 p-4 mb-3 rounded-lg shadow-sm hover:bg-green-50 transition-all duration-200 cursor-pointer border border-gray-200 transform hover:scale-[1.02]"
                                    onClick={() => handleSelectHospital(hospital)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{hospital.name}</h3>
                                    <p className="text-gray-500 text-sm">{hospital.location}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Doctor Selection Section */}
            {activeSection === 'doctors' && selectedHospital && (
                <div className="fade-section active">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">
                        Select a Doctor at <span className="text-green-600">{selectedHospital.name}</span>
                    </h2>
                    <button
                        onClick={handleBackToHospitals}
                        className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                    >
                        &larr; Back to Hospitals
                    </button>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="doctorSearchInput"
                            placeholder="Search doctors by name or specialty..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 shadow-sm"
                            value={doctorSearchTerm}
                            onChange={(e) => setDoctorSearchTerm(e.target.value)}
                        />
                    </div>
                    <div id="doctorList" className="scrollable-list">
                        {filteredDoctors.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No doctors found for this hospital.</p>
                        ) : (
                            filteredDoctors.map(doctor => (
                                <div
                                    key={doctor.id}
                                    className="bg-gray-50 p-4 mb-3 rounded-lg shadow-sm hover:bg-green-50 transition-all duration-200 cursor-pointer border border-gray-200 transform hover:scale-[1.02]"
                                    onClick={() => handleSelectDoctor(doctor)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                                    <p className="text-green-600 text-sm">{doctor.specialty}</p>
                                    <div className="flex items-center text-sm mt-2">
                                        <StarRating rating={calculateAverageRating(doctor.ratings)} interactive={false} />
                                        <span className="ml-1">
                                            {doctor.ratings && doctor.ratings.length > 0 ? `(${doctor.ratings.length} reviews)` : '(No ratings yet)'}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Doctor Details and Rating Form Section */}
            {activeSection === 'details' && selectedHospital && selectedDoctor && (
                <div className="fade-section active">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">
                        Doctor Details & Ratings for <span className="text-green-600">{selectedDoctor.name}</span>
                    </h2>
                    <button
                        onClick={handleBackToDoctors}
                        className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                    >
                        &larr; Back to Doctor List
                    </button>

                    <div id="doctorDetailContent">
                        <p className="text-green-600 mb-2">{selectedDoctor.specialty}</p>
                        <p className="text-gray-700 mb-4">{selectedHospital.location}</p>

                        <div className="flex items-center mb-4">
                            <span className="text-gray-600 mr-2">Overall Rating:</span>
                            <StarRating rating={calculateAverageRating(reviews)} interactive={false} />
                            <span className="ml-2 text-gray-700 font-medium">({reviews.length} reviews)</span>
                        </div>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Reviews</h4>
                        <div id="reviewsList" className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-6">
                            {reviews.length === 0 ? (
                                <p id="noReviewsMessage" className="text-gray-500 italic">No reviews yet. Be the first to rate this doctor!</p>
                            ) : (
                                reviews.map((review, reviewIndex) => (
                                    <div key={review.date + reviewIndex} className="bg-gray-50 p-3 mb-2 rounded-md border border-gray-200">
                                        <div className="flex mb-1">
                                            <StarRating rating={review.stars} interactive={false} />
                                        </div>
                                        <p className="text-gray-800 text-sm">{review.comment || 'No comment provided.'}</p>
                                        <span className="text-xs text-gray-500 mt-1 block">
                                            Reviewed on: {review.date ? new Date(review.date).toLocaleDateString() : 'N/A'} (Reviewer: {review.reviewerId || 'Unknown'})
                                        </span>

                                        {/* Display existing nested comments */}
                                        {review.comments && review.comments.length > 0 && (
                                            <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                                                <p className="font-semibold text-gray-700 text-sm">Comments:</p>
                                                {review.comments.map((comment, commentIndex) => (
                                                    <div key={comment.date + commentIndex} className="bg-gray-100 p-2 rounded-md">
                                                        <p className="text-gray-700 text-xs">{comment.text}</p>
                                                        <span className="text-gray-500 text-xs mt-1 block">
                                                            Commented on: {comment.date ? new Date(comment.date).toLocaleDateString() : 'N/A'} (Commenter: {comment.userId || 'Unknown'})
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Comment Submission Form for each review */}
                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                            <textarea
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm mb-2"
                                                rows="2"
                                                placeholder="Add a comment..."
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        handleSubmitComment(review.date, e.target.value);
                                                        e.target.value = '';
                                                    }
                                                }}
                                            ></textarea>
                                            <button
                                                onClick={() => {
                                                    const commentInputEl = document.querySelector(`#reviewsList > div:nth-child(${reviewIndex + 1}) textarea`);
                                                    if (commentInputEl) {
                                                        handleSubmitComment(review.date, commentInputEl.value.trim());
                                                        commentInputEl.value = '';
                                                    }
                                                }}
                                                className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm"
                                            >
                                                Submit Comment
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Rating Submission Form */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Leave a Review</h4>
                            <div className="mb-3">
                                <StarRating rating={currentRating} onRatingChange={setCurrentRating} interactive={true} />
                            </div>
                            <textarea
                                id="reviewCommentInput"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 shadow-sm mb-3"
                                rows="4"
                                placeholder="Share your experience... (optional)"
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                            ></textarea>
                            <button
                                onClick={handleSubmitReview}
                                className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-[1.01] shadow-md"
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QueryViewPage;
