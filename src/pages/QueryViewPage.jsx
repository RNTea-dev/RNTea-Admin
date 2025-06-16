// src/pages/QueryViewPage.jsx
import React, { useState, useEffect, useCallback, useContext, useRef } from 'react'; // Import useRef
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
 * @returns {number} The average rating, or 0 if no ratings.
 */
function calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0) {
        return 0;
    }
    const totalStars = ratings.reduce((sum, rating) => sum + rating.stars, 0);
    return (totalStars / ratings.length);
}

const QueryViewPage = () => {
    // Destructure Firebase context values
    const {
        db,
        appId,
        userId,
        loadingFirebase,
        showMessage, // Using global showMessage from context
        collection, doc, getDoc, getDocs, updateDoc, arrayUnion, orderBy, limit, query, where
    } = useContext(FirebaseContext);

    // State variables for managing page data and UI
    const [hospitals, setHospitals] = useState([]); // List of hospitals
    const [searchTerm, setSearchTerm] = useState(''); // Search term for hospitals
    const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital
    const [doctors, setDoctors] = useState([]); // Doctors for the selected hospital
    const [selectedDoctor, setSelectedDoctor] = useState(null); // Currently selected doctor
    const [loading, setLoading] = useState(false); // Loading indicator for data fetching

    // State for review submission form (no longer used for submission but kept for potential future use)
    const [currentRating, setCurrentRating] = useState(0); // Rating value for new review
    const [reviewComment, setReviewComment] = useState(''); // Comment for new review

    // State for adding comments to existing reviews (no longer used for submission but kept for potential future use)
    const [commentText, setCommentText] = useState(''); // Text for new comment

    // Refs for scrolling
    const doctorSectionRef = useRef(null);
    const reviewsSectionRef = useRef(null);


    /**
     * Fetches all hospitals from Firestore.
     */
    const fetchHospitals = useCallback(async () => {
        if (!db || !appId) {
            console.warn("Firestore or App ID not available for fetching hospitals.");
            return;
        }
        setLoading(true); // Set loading to true while fetching
        try {
            const hospitalsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals`);
            const hospitalDocsSnapshot = await getDocs(hospitalsCollectionRef);
            const fetchedHospitals = hospitalDocsSnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }));
            setHospitals(fetchedHospitals); // Update hospitals state
        } catch (error) {
            console.error("Error fetching hospitals:", error);
            showMessage(`Error loading hospitals: ${error.message}`, 'error'); // Show error message
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    }, [db, appId, collection, getDocs, showMessage]);

    // Effect hook to fetch hospitals when Firebase is ready
    useEffect(() => {
        if (!loadingFirebase && db && appId) {
            fetchHospitals();
        }
    }, [db, appId, loadingFirebase, fetchHospitals]);

    /**
     * Handles selecting a hospital and fetches its associated doctors.
     * @param {Object} hospital - The selected hospital object.
     */
    const handleSelectHospital = useCallback(async (hospital) => {
        setSelectedHospital(hospital); // Set selected hospital
        setSelectedDoctor(null); // Reset selected doctor
        setDoctors([]); // Clear previous doctors
        setLoading(true); // Set loading to true
        try {
            const doctorsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals/${hospital.id}/doctors`);
            const doctorDocsSnapshot = await getDocs(doctorsCollectionRef);
            const fetchedDoctors = await Promise.all(doctorDocsSnapshot.docs.map(async (doctorDoc) => {
                const doctorData = doctorDoc.data();
                // Calculate average rating for each doctor
                const averageRating = calculateAverageRating(doctorData.ratings);
                return {
                    id: doctorDoc.id,
                    ...doctorData,
                    averageRating: averageRating,
                    numReviews: doctorData.ratings ? doctorData.ratings.length : 0
                };
            }));
            setDoctors(fetchedDoctors); // Update doctors state

            // Scroll to the doctor selection section after a hospital is selected
            if (doctorSectionRef.current) {
                setTimeout(() => {
                    doctorSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300); // 300ms delay for smoother scroll
            }

        } catch (error) {
            console.error("Error fetching doctors:", error);
            showMessage(`Error loading doctors: ${error.message}`, 'error'); // Show error message
        } finally {
            setLoading(false); // Set loading to false
        }
    }, [db, appId, collection, getDocs, showMessage]);

    /**
     * Handles selecting a doctor.
     * @param {Object} doctor - The selected doctor object.
     */
    const handleSelectDoctor = useCallback((doctor) => {
        setSelectedDoctor(doctor); // Set selected doctor
        setCurrentRating(0); // Reset rating input for new review
        setReviewComment(''); // Reset comment input for new review
        setCommentText(''); // Reset comment text for existing reviews
    }, []);

    // Effect to scroll to the reviews section when a doctor is selected
    useEffect(() => {
        if (selectedDoctor && reviewsSectionRef.current) {
            setTimeout(() => {
                reviewsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300); // 300ms delay for smoother scroll
        }
    }, [selectedDoctor]);

    // These functions are no longer directly used for submission as per the request,
    // but are kept here in case their logic is needed elsewhere or for future re-implementation.
    const handleSubmitReview = useCallback(async () => {
        // This functionality has been removed from the UI.
        // The logic is preserved in case of re-introduction.
    }, []);

    const handleAddCommentToReview = useCallback(async (reviewIndex) => {
        // This functionality has been removed from the UI.
        // The logic is preserved in case of re-introduction.
    }, []);


    // Filter hospitals based on search term
    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Conditional loading overlay */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-xl flex items-center space-x-3">
                        <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-gray-700">Loading...</span>
                    </div>
                </div>
            )}

            <div className="container mx-auto py-8">
                {/* Wrap all direct children of this div in a Fragment */}
                <>
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">View Reviews</h1>

                    {/* Search and Hospital Selection Section */}
                    <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Select a Hospital</h2>
                        <input
                            type="text"
                            placeholder="Search hospitals by name or location..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="mt-4 max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                            {filteredHospitals.length === 0 ? (
                                <p className="p-4 text-gray-500 text-center">No hospitals found. Try a different search.</p>
                            ) : (
                                <ul className="divide-y divide-gray-200">
                                    {filteredHospitals.map(hospital => (
                                        <li
                                            key={hospital.id}
                                            className={`p-3 cursor-pointer hover:bg-blue-50 transition-colors duration-150 ${selectedHospital && selectedHospital.id === hospital.id ? 'bg-blue-100 font-medium' : ''}`}
                                            onClick={() => handleSelectHospital(hospital)}
                                        >
                                            {hospital.name} - {hospital.location}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Doctor Selection Section (Conditional rendering) */}
                    {selectedHospital && (
                        <div className="bg-white p-6 rounded-lg shadow-xl mb-8" ref={doctorSectionRef}>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Select a Doctor at {selectedHospital.name}</h2>
                            {doctors.length === 0 ? (
                                <p className="text-gray-500 text-center">No doctors found for this hospital.</p>
                            ) : (
                                <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md max-h-60 overflow-y-auto">
                                    {doctors.map(doctor => (
                                        <li
                                            key={doctor.id}
                                            className={`p-3 cursor-pointer hover:bg-green-50 transition-colors duration-150 flex justify-between items-center ${selectedDoctor && selectedDoctor.id === doctor.id ? 'bg-green-100 font-medium' : ''}`}
                                            onClick={() => handleSelectDoctor(doctor)}
                                        >
                                            <div>
                                                {doctor.name} - {doctor.specialty}
                                                <p className="text-sm text-gray-600">
                                                    Avg. Rating: {doctor.averageRating.toFixed(1)} stars ({doctor.numReviews} reviews)
                                                </p>
                                            </div>
                                            <StarRating rating={doctor.averageRating} interactive={false} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Display Reviews and Add Comment/Review Section (Conditional rendering) */}
                    {selectedDoctor && (
                        <div className="bg-white p-6 rounded-lg shadow-xl mb-8" ref={reviewsSectionRef}>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews for Dr. {selectedDoctor.name}</h2>
                            {selectedDoctor.numReviews === 0 ? (
                                <p className="text-gray-500 text-center">No reviews available for this doctor yet.</p>
                            ) : (
                                <div className="space-y-6">
                                    {selectedDoctor.ratings && selectedDoctor.ratings
                                        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by newest first
                                        .map((review, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-blue-50">
                                                <div className="flex justify-between items-center mb-2">
                                                    <StarRating rating={review.stars} interactive={false} />
                                                    <span className="text-sm text-gray-500">
                                                        {new Date(review.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-gray-800 italic mb-3">"{review.comment || 'No comment provided.'}"</p>
                                                <p className="text-xs text-gray-600 mb-2">Reviewer ID: {review.reviewerId}</p>

                                                {/* Display existing comments */}
                                                {review.comments && review.comments.length > 0 && (
                                                    <div className="mt-4 pt-3 border-t border-gray-200">
                                                        <h5 className="text-md font-semibold text-gray-700 mb-2">Comments:</h5>
                                                        <div className="space-y-2">
                                                            {review.comments.map((comment, commentIdx) => (
                                                                <div key={commentIdx} className="bg-white p-2 rounded-md shadow-sm">
                                                                    <p className="text-sm text-gray-800">{comment.text}</p>
                                                                    <p className="text-xs text-gray-500 mt-1">
                                                                        {new Date(comment.date).toLocaleDateString()} by {comment.userId}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Removed Add New Comment Section */}
                                            </div>
                                        ))}
                                </div>
                            )}

                            {/* Removed Leave a New Review for this Doctor Section */}
                        </div>
                    )}
                </>
            </div>
        </div>
    );
};

export default QueryViewPage;
