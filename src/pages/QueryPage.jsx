// src/pages/QueryPage.jsx
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

const QueryPage = () => {
    // Destructure Firebase context values
    const {
        db,
        appId,
        userId,
        loadingFirebase,
        showMessage, // Using global showMessage from context
        collection, doc, getDoc, getDocs, updateDoc, arrayUnion, orderBy, limit, query, where, setDoc
    } = useContext(FirebaseContext);

    // State variables for managing page data and UI
    const [hospitals, setHospitals] = useState([]); // List of hospitals
    const [searchTerm, setSearchTerm] = useState(''); // Search term for hospitals
    const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital
    const [doctors, setDoctors] = useState([]); // Doctors for the selected hospital
    const [selectedDoctor, setSelectedDoctor] = useState(null); // Currently selected doctor
    const [loading, setLoading] = useState(false); // Loading indicator for data fetching

    // State for review submission form
    const [currentRating, setCurrentRating] = useState(0); // Rating value for new review
    const [reviewComment, setReviewComment] = useState(''); // Comment for new review

    // State for new hospital form
    const [newHospitalName, setNewHospitalName] = useState('');
    const [newHospitalLocation, setNewHospitalLocation] = '';
    const [isAddingHospital, setIsAddingHospital] = useState(false);

    // State for new doctor form
    const [newDoctorName, setNewDoctorName] = '';
    const [newDoctorSpecialty, setNewDoctorSpecialty] = '';
    const [isAddingDoctor, setIsAddingDoctor] = useState(false);

    // State for adding comments to existing reviews
    const [commentText, setCommentText] = useState(''); // Text for new comment to existing review

    // State to control visibility of the "Leave a New Review" form
    const [isReviewFormExpanded, setIsReviewFormExpanded] = useState(false);


    // Ref for the doctor selection section
    const doctorSectionRef = useRef(null);
    // Ref for the review submission section
    const reviewSubmissionSectionRef = useRef(null); // Renamed for clarity
    // Ref for the reviews list section
    const reviewsListSectionRef = useRef(null);


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
                console.log(`Doctor ${doctorData.name} ratings:`, doctorData.ratings); // Debugging log for reviews
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
                }, 300); // 300ms delay for smoother feel
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
        setIsReviewFormExpanded(false); // Collapse review form when a new doctor is selected

        // Scroll to the reviews list section when a doctor is selected
        // Using setTimeout to allow DOM to update after state change
        setTimeout(() => {
            if (reviewsListSectionRef.current) {
                console.log("Scrolling to reviewsListSectionRef from handleSelectDoctor:", reviewsListSectionRef.current); // Debugging log
                reviewsListSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.log("reviewsListSectionRef.current is null in handleSelectDoctor setTimeout. Section might not be rendered yet."); // Debugging log
            }
        }, 350); // Slightly increased delay to give more time for rendering
    }, []);

    /**
     * Handles submission of a new review for the selected doctor.
     */
    const handleSubmitReview = useCallback(async () => {
        if (!selectedHospital || !selectedDoctor || currentRating === 0) {
            showMessage("Please select a hospital and a doctor, and provide a rating.", 'error');
            return;
        }

        const filtered = filterContent(reviewComment);
        if (!filtered.isValid) {
            showMessage(filtered.message, 'error');
            return;
        }

        setLoading(true); // Set loading to true
        try {
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
            const newReview = {
                stars: currentRating,
                comment: reviewComment,
                date: new Date().toISOString(),
                reviewerId: userId // Store the anonymous or authenticated user ID
            };

            // Atomically add the new review to the 'ratings' array
            await updateDoc(doctorDocRef, {
                ratings: arrayUnion(newReview)
            });

            // Update local state to reflect the new review immediately
            // Refetching doctors is simpler to ensure average rating updates
            await handleSelectHospital(selectedHospital); // Re-fetch doctors for the current hospital
            setSelectedDoctor(prev => { // Re-select the doctor to show updated data
                if (prev && prev.id === selectedDoctor.id) {
                    const updatedDoctor = { ...prev,
                        ratings: [...(prev.ratings || []), newReview]
                    };
                    updatedDoctor.averageRating = calculateAverageRating(updatedDoctor.ratings);
                    updatedDoctor.numReviews = updatedDoctor.ratings.length;
                    return updatedDoctor;
                }
                return prev;
            });


            showMessage('Review submitted successfully!', 'success'); // Re-enabled success message for review submission
            setCurrentRating(0); // Reset rating input
            setReviewComment(''); // Reset comment input
            setIsReviewFormExpanded(false); // Collapse the form after submission
        } catch (error) {
            console.error("Error submitting review:", error);
            showMessage(`Error submitting review: ${error.message}`, 'error'); // Show error message
        } finally {
            setLoading(false); // Set loading to false
        }
    }, [selectedHospital, selectedDoctor, currentRating, reviewComment, db, appId, userId, updateDoc, arrayUnion, showMessage, handleSelectHospital]);


    /**
     * Handles adding a new hospital.
     */
    const handleAddHospital = useCallback(async () => {
        if (!newHospitalName || !newHospitalLocation) {
            showMessage("Please enter both hospital name and location.", 'error');
            return;
        }

        setLoading(true);
        try {
            const hospitalsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals`);
            const newHospitalRef = doc(hospitalsCollectionRef); // Let Firestore generate a new ID
            await setDoc(newHospitalRef, {
                name: newHospitalName,
                location: newHospitalLocation
            });
            setNewHospitalName('');
            setNewHospitalLocation('');
            setIsAddingHospital(false);
            fetchHospitals(); // Re-fetch hospitals to update the list
        } catch (error) {
            console.error("Error adding hospital:", error);
            showMessage(`Error adding hospital: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, appId, collection, setDoc, showMessage, newHospitalName, newHospitalLocation, fetchHospitals]);


    /**
     * Handles adding a new doctor to the selected hospital.
     */
    const handleAddDoctor = useCallback(async () => {
        if (!selectedHospital || !newDoctorName || !newDoctorSpecialty) {
            showMessage("Please select a hospital and enter doctor's name and specialty.", 'error');
            return;
        }

        setLoading(true);
        try {
            const doctorsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`);
            const newDoctorRef = doc(doctorsCollectionRef); // Let Firestore generate a new ID
            await setDoc(newDoctorRef, {
                name: newDoctorName,
                specialty: newDoctorSpecialty,
                ratings: [] // Initialize with an empty ratings array
            });
            setNewDoctorName('');
            setNewDoctorSpecialty('');
            setIsAddingDoctor(false);
            handleSelectHospital(selectedHospital); // Re-fetch doctors for the current hospital
        } catch (error) {
            console.error("Error adding doctor:", error);
            showMessage(`Error adding doctor: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, appId, collection, setDoc, showMessage, selectedHospital, newDoctorName, newDoctorSpecialty, handleSelectHospital]);

    /**
     * Handles adding a new comment to an existing review.
     * @param {number} reviewIndex - The index of the review to which the comment is being added.
     */
    const handleAddCommentToReview = useCallback(async (reviewIndex) => {
        if (!selectedHospital || !selectedDoctor || !commentText.trim()) {
            showMessage("Please select a doctor and type a comment.", 'error');
            return;
        }

        const filtered = filterContent(commentText);
        if (!filtered.isValid) {
            showMessage(filtered.message, 'error');
            return;
        }

        setLoading(true); // Set loading to true
        try {
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
            const doctorSnap = await getDoc(doctorDocRef);

            if (!doctorSnap.exists()) {
                showMessage("Doctor not found.", 'error');
                setLoading(false);
                return;
            }

            const doctorData = doctorSnap.data();
            const currentRatings = doctorData.ratings || [];

            if (reviewIndex >= 0 && reviewIndex < currentRatings.length) {
                // Create a deep copy to avoid direct mutation of Firestore data
                const updatedRatings = JSON.parse(JSON.stringify(currentRatings));
                if (!updatedRatings[reviewIndex].comments) {
                    updatedRatings[reviewIndex].comments = [];
                }
                updatedRatings[reviewIndex].comments.push({
                    text: commentText.trim(),
                    date: new Date().toISOString(),
                    userId: userId // Store the anonymous or authenticated user ID
                });

                await updateDoc(doctorDocRef, { ratings: updatedRatings }); // Update Firestore document
                showMessage('Comment added successfully!', 'success'); // Show success message
                setCommentText(''); // Clear comment input
                // Re-fetch doctor details to update the comments shown
                await handleSelectHospital(selectedHospital);
                setSelectedDoctor(prev => prev && prev.id === selectedDoctor.id ? { ...prev, ratings: updatedRatings } : prev);

            } else {
                showMessage("Invalid review index.", 'error'); // Show error for invalid index
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            showMessage(`Error adding comment: ${error.message}`, 'error'); // Show error message
        } finally {
            setLoading(false);
        }
    }, [selectedHospital, selectedDoctor, commentText, db, appId, userId, showMessage, getDoc, updateDoc, handleSelectHospital]);


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
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Doctor Reviews and Feedback</h1>

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

                        {/* Add Hospital Section */}
                        <div className="mt-4">
                            {!isAddingHospital ? (
                                <button
                                    onClick={() => setIsAddingHospital(true)}
                                    className="w-full bg-green-700 text-white p-2 rounded-md font-semibold hover:bg-green-800 transition-colors duration-200 shadow-md"
                                >
                                    Add New Hospital
                                </button>
                            ) : (
                                <div className="bg-gray-50 p-4 rounded-md mt-4 shadow-inner">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">New Hospital Details</h4>
                                    <input
                                        type="text"
                                        placeholder="Hospital Name"
                                        className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        value={newHospitalName}
                                        onChange={(e) => setNewHospitalName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Hospital Location"
                                        className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        value={newHospitalLocation}
                                        onChange={(e) => setNewHospitalLocation(e.target.value)}
                                    />
                                    <button
                                        onClick={handleAddHospital}
                                        className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md mb-2"
                                    >
                                        Save Hospital
                                    </button>
                                    <button
                                        onClick={() => setIsAddingHospital(false)}
                                        className="w-full bg-red-500 text-white p-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200 shadow-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
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
                            {/* Add Doctor Section */}
                            <div className="mt-4">
                                {!isAddingDoctor ? (
                                    <button
                                        onClick={() => setIsAddingDoctor(true)}
                                        className="w-full bg-green-700 text-white p-2 rounded-md font-semibold hover:bg-green-800 transition-colors duration-200 shadow-md"
                                >
                                    Add New Doctor
                                </button>
                                ) : (
                                    <div className="bg-gray-50 p-4 rounded-md mt-4 shadow-inner">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-2">New Doctor Details</h4>
                                        <input
                                            type="text"
                                            placeholder="Doctor Name"
                                            className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                            value={newDoctorName}
                                            onChange={(e) => setNewDoctorName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Specialty (e.g., Cardiology)"
                                            className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                                            value={newDoctorSpecialty}
                                            onChange={(e) => setNewDoctorSpecialty(e.target.value)}
                                        />
                                        <button
                                            onClick={handleAddDoctor}
                                            className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md mb-2"
                                        >
                                            Save Doctor
                                        </button>
                                        <button
                                            onClick={() => setIsAddingDoctor(false)}
                                            className="w-full bg-red-500 text-white p-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200 shadow-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Display Reviews and Collapsible New Review Section (Conditional rendering) */}
                    {selectedDoctor && (
                        <div className="bg-white p-6 rounded-lg shadow-xl mb-8" ref={reviewsListSectionRef}>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews for Dr. {selectedDoctor.name}</h2>

                            {/* Collapsible Leave a New Review for this Doctor Section */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => setIsReviewFormExpanded(!isReviewFormExpanded)}
                                    className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-[1.01] shadow-md flex items-center justify-center space-x-2"
                                >
                                    <span>{isReviewFormExpanded ? 'Collapse Review Form' : 'Leave a New Review'}</span>
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isReviewFormExpanded ? 'rotate-180' : ''}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>

                                {isReviewFormExpanded && (
                                    <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50 transition-all duration-300 ease-in-out" ref={reviewSubmissionSectionRef}>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Rate and Review</h4>
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
                                )}
                            </div>

                            {/* Existing Reviews List */}
                            {selectedDoctor.numReviews === 0 ? (
                                <p className="text-gray-500 text-center mt-4">No reviews available for this doctor yet.</p>
                            ) : (
                                <div className="space-y-6 mt-4"> {/* Added mt-4 for spacing */}
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

                                                {/* Add New Comment Section to an existing review */}
                                                <div className="mt-4 pt-3 border-t border-gray-200">
                                                    <textarea
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm mb-2"
                                                        rows="2"
                                                        placeholder="Add a comment to this review (optional)..."
                                                        value={commentText}
                                                        onChange={(e) => setCommentText(e.target.value)}
                                                    ></textarea>
                                                    <button
                                                        onClick={() => handleAddCommentToReview(index)}
                                                        className="w-full bg-teal-600 text-white p-2 rounded-md font-semibold hover:bg-teal-700 transition-colors duration-200 transform hover:scale-[1.01] shadow-md"
                                                    >
                                                        Add Comment
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    )}
                </>
            </div>
        </div>
    );
};

export default QueryPage;
