import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App.jsx';
import StarRating from '../components/StarRating.jsx';

// Firebase imports specific to this component
import {
    collection,
    query,
    getDocs,
    doc,
    updateDoc,
    arrayUnion,
    getDoc,
    onSnapshot,
    setDoc,
    deleteDoc
} from 'firebase/firestore';

// Define explicit words for content filtering
const EXPLICIT_WORDS = ['fuck', 'shit', 'asshole', 'bitch', 'cunt', 'damn', 'hell'];
const MAX_CHAR_LIMIT = 250;

// List of nursing fields for the dropdown
const NURSING_FIELDS_UNSORTED = [
    "Certified Nursing Assistant (CNA)",
    "Licensed Practical Nurse (LPN) / Licensed Vocational Nurse (LVN)",
    "Registered Nurse (RN)",
    "Nurse Practitioner (NP)",
    "Family Nurse Practitioner (FNP)",
    "Adult-Gerontology Nurse Practitioner (AGNP)",
    "Pediatric Nurse Practitioner (PNP)",
    "Psychiatric Mental Health Nurse Practitioner (PMHNP)",
    "Acute Care Nurse Practitioner (ACNP)",
    "Women's Health Nurse Practitioner (WHNP)",
    "Certified Registered Nurse Anesthetist (CRNA)",
    "Clinical Nurse Specialist (CNS)",
    "Certified Nurse-Midwife (CNM)",
    "Cardiac Nurse",
    "Critical Care Nurse (ICU Nurse)",
    "Emergency Nurse (ER Nurse)",
    "Oncology Nurse",
    "Pediatric Nurse",
    "Labor and Delivery Nurse",
    "Neonatal Intensive Care Unit (NICU) Nurse",
    "Medical-Surgical Nurse",
    "Geriatric Nurse",
    "Psychiatric/Mental Health Nurse",
    "Home Health Nurse",
    "Public Health Nurse",
    "School Nurse",
    "Perioperative Nurse (Operating Room Nurse)",
    "Rehabilitation Nurse",
    "Hospice Nurse / Palliative Care Nurse",
    "Forensic Nurse",
    "Travel Nurse",
    "Infusion Nurse",
    "Nephrology Nurse",
    "Diabetic Nurse",
    "Dermatology Nurse",
    "Gastroenterology Nurse",
    "Orthopedic Nurse",
    "Urology Nurse",
    "Wound Care Nurse",
    "Ostomy Care Nurse",
    "Informatics Nurse",
    "Research Nurse",
    "Case Management Nurse",
    "Nurse Educator",
    "Nurse Administrator/Manager",
    "Occupational Health Nurse",
    "Flight Nurse / Transport Nurse",
    "Correctional Nurse",
    "IV Therapy Nurse",
    "Transplant Nurse",
    "Genetics Nurse",
    "Pain Management Nurse",
    "Military Nurse",
    "Ambulatory Care Nurse",
    "Endoscopy Nurse",
    "Plastic Surgery Nurse",
    "Rural Health Nurse",
    "Parish Nurse / Faith Community Nurse",
    "Camp Nurse",
    "Hyperbaric Nurse",
    "Legal Nurse Consultant",
    "Integrative Health Nurse"
];

// Sort the nursing fields alphabetically and add the placeholder at the beginning
const NURSING_FIELDS = [
    "Select your nursing field...",
    ...NURSING_FIELDS_UNSORTED.sort()
];

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

// --- Error Boundary Component (copied from App.jsx for specific component debugging) ---
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ReviewsHubPage ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4 bg-red-100 text-red-800 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
                    <p className="text-lg text-center mb-2">We're sorry, but there was an error loading this section.</p>
                    <p className="text-sm text-red-600 text-center">
                        {this.state.error && this.state.error.toString()}
                    </p>
                    <details className="mt-4 text-left text-sm p-2 bg-red-50 rounded-md">
                        <summary className="font-semibold cursor-pointer">Error Details</summary>
                        <pre className="mt-2 whitespace-pre-wrap break-words text-red-700">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </details>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                        className="mt-6 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
// --- End Error Boundary Component ---


const ReviewsHubPage = () => {
    // Destructure Firebase context values
    // Ensure currentUserIsAnonymous is destructured here
    const { db, currentUserId, currentUserIsAnonymous, authReady, appId, showMessage, setShowAuthModal } = useContext(FirebaseContext);

    // State for UI elements and data
    const [hospitalInput, setHospitalInput] = useState('');
    const [hospitals, setHospitals] = useState([]);
    const [displayedHospitals, setDisplayedHospitals] = useState([]);
    const [loadingHospitals, setLoadingHospitals] = useState(true);
    const [noHospitalsFound, setNoHospitalsFound] = useState(false);
    const [loadMoreHospitalsVisible, setLoadMoreHospitalsVisible] = useState(false);
    const [currentHospitalDisplayCount, setCurrentHospitalDisplayCount] = useState(20);

    const [selectedHospital, setSelectedHospital] = useState(null);
    const [doctorInput, setDoctorInput] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [displayedDoctors, setDisplayedDoctors] = useState([]);
    const [loadingDoctors, setLoadingDoctors] = useState(false);
    const [noDoctorsFound, setNoDoctorsFound] = useState(false);

    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(false);
    const [noReviewsForDoctor, setNoReviewsForDoctor] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(0);
    const [nursingField, setNursingField] = useState(NURSING_FIELDS[0]); // State for selected nursing field
    const [searchQuery, setSearchQuery] = useState(''); // NEW: State for search input
    const [filteredNursingFields, setFilteredNursingFields] = useState([]); // NEW: State for filtered suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // NEW: State to control suggestion visibility

    const [showReviewSubmissionSection, setShowReviewSubmissionSection] = useState(false);
    const [showCommentInput, setShowCommentInput] = useState({});
    const [commentText, setCommentText] = useState({}); // State to hold comment text for each review

    // NEW STATES for Add Hospital/Doctor forms
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
    const [newHospitalLocation, setNewHospitalLocation] = useState('');

    const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
    const [newDoctorName, setNewDoctorName] = useState('');
    const [newDoctorSpecialty, setNewDoctorSpecialty] = useState('');


    // Refs for scrolling
    const doctorSelectionSectionRef = React.useRef(null);
    const doctorReviewsDisplaySectionRef = React.useRef(null);
    const reviewSubmissionSectionRef = React.useRef(null);
    const addHospitalFormRef = React.useRef(null); // Ref for new hospital form
    const addDoctorFormRef = React.useRef(null); // Ref for new doctor form

    console.log("ReviewsHubPage: Component rendered.");

    // --- Hospital Management ---
    // Modified to use onSnapshot for real-time updates for public viewing
    useEffect(() => {
        let unsubscribe = () => {};
        console.log("ReviewsHubPage: useEffect for hospital onSnapshot. DB, AppId Ready:", !!db, !!appId);

        if (db && appId) { // Only check for db and appId readiness for public viewing
            setLoadingHospitals(true);
            setNoHospitalsFound(false);
            const hospitalsColRef = collection(db, `artifacts/${appId}/public/data/hospitals`);

            unsubscribe = onSnapshot(hospitalsColRef, (querySnapshot) => {
                console.log("ReviewsHubPage: onSnapshot triggered for hospitals.");
                const fetchedHospitals = [];
                querySnapshot.forEach((docRef) => {
                    const data = docRef.data();
                    if (data.name) {
                        fetchedHospitals.push({ id: docRef.id, name: data.name, location: data.location || '' });
                    }
                });

                fetchedHospitals.sort((a, b) => a.name.localeCompare(b.name));
                console.log("ReviewsHubPage: Fetched Hospitals from snapshot:", fetchedHospitals.length);
                setHospitals(fetchedHospitals);
                setLoadingHospitals(false);
                setNoHospitalsFound(fetchedHospitals.length === 0);
            }, (error) => {
                console.error("ReviewsHubPage: Error fetching hospitals with onSnapshot:", error);
                showMessage('Error loading hospitals.', 'error');
                setLoadingHospitals(false);
                setNoHospitalsFound(true);
            });
        } else {
            // Reset states if db or appId are not ready
            setLoadingHospitals(true);
            setHospitals([]);
            setDisplayedHospitals([]);
            setNoHospitalsFound(false);
            setLoadMoreHospitalsVisible(false);
        }

        return () => {
            console.log("ReviewsHubPage: Cleaning up hospital onSnapshot listener.");
            unsubscribe();
        };
    }, [db, appId, collection, onSnapshot, showMessage]);


    // NEW FUNCTION: Handle Add Hospital (for general users) - Protected
    const handleAddHospitalByUser = useCallback(async (e) => {
        e.preventDefault();
        // Protection: User must be logged in and not anonymous
        if (!currentUserId || currentUserIsAnonymous) { // Check if not logged in or is anonymous
            showMessage('You must be logged in to add a hospital. Please sign up or log in.', 'error');
            setShowAuthModal(true); // Open auth modal
            return;
        }

        if (!db || !appId) {
            showMessage('Firebase not ready to add a hospital.', 'error');
            return;
        }
        if (!newHospitalName.trim() || !newHospitalLocation.trim()) {
            showMessage('Please enter both hospital name and location.', 'error');
            return;
        }

        try {
            // Optimistic UI update: Add the new hospital to the local state immediately
            const tempId = Date.now().toString(); // Temporary ID for immediate display
            const newHospital = { id: tempId, name: newHospitalName.trim(), location: newHospitalLocation.trim() };
            setHospitals(prevHospitals => [...prevHospitals, newHospital].sort((a, b) => a.name.localeCompare(b.name)));
            setNewHospitalName('');
            setNewHospitalLocation('');
            setShowAddHospitalForm(false); // Hide the form

            const newHospitalRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals`));
            await setDoc(newHospitalRef, {
                name: newHospital.name,
                location: newHospital.location,
                createdAt: new Date().toISOString(),
                createdBy: currentUserId, // Record who created it
            });

            showMessage('Hospital added successfully! You can now add doctors to it.', 'success');

            // The onSnapshot listener will eventually update the list with the real ID from Firestore.
            // For now, we've optimistically updated.

            // Scroll to the new hospital if it's visible in the list (using the temporary name for lookup)
            if (addHospitalFormRef.current) {
                setTimeout(() => {
                    const newHospitalButton = document.querySelector(`button.bg-gray-100[data-hospital-name="${newHospital.name}"]`);
                    if (newHospitalButton) {
                        newHospitalButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 500);
            }

        } catch (error) {
            console.error("ReviewsHubPage: Error adding hospital:", error);
            showMessage(`Error adding hospital: ${error.message}`, 'error');
            // If optimistic update failed, revert the state (more complex for real-time listeners, but good practice)
            setHospitals(prevHospitals => prevHospitals.filter(h => h.id !== tempId));
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, newHospitalName, newHospitalLocation, showMessage, collection, doc, setDoc, setShowAuthModal]);


    // Effect to filter and update displayedHospitals whenever `hospitals` or `hospitalInput` changes
    useEffect(() => {
        console.log("ReviewsHubPage: useEffect for filtering hospitals triggered. HospitalInput:", hospitalInput, "CurrentDisplayCount:", currentHospitalDisplayCount);
        const searchTerm = hospitalInput.trim().toLowerCase();
        const filtered = hospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchTerm) ||
            (hospital.location && hospital.location.toLowerCase().includes(searchTerm))
        );
        setDisplayedHospitals(filtered.slice(0, currentHospitalDisplayCount));
        setLoadMoreHospitalsVisible(filtered.length > currentHospitalDisplayCount);
        // Only set noHospitalsFound if loading is complete and no hospitals are found
        setNoHospitalsFound(filtered.length === 0 && !loadingHospitals);
    }, [hospitals, hospitalInput, currentHospitalDisplayCount, loadingHospitals]);

    const handleLoadMoreHospitals = useCallback(() => {
        setCurrentHospitalDisplayCount(prevCount => prevCount + 20);
    }, []);

    const handleHospitalSelect = useCallback(async (hospital) => {
        console.log("ReviewsHubPage: handleHospitalSelect called for hospital:", hospital.name);
        setSelectedHospital(hospital); // Set selected hospital first

        // Set the hospitalInput to the selected hospital's name
        console.log("ReviewsHubPage: Populating hospitalInput with:", hospital.name);
        setHospitalInput(hospital.name);

        setDoctorInput(''); // Clear doctor input
        setLoadingDoctors(true);
        setNoDoctorsFound(false);
        setDoctors([]); // Clear ALL doctors for this hospital
        setDisplayedDoctors([]); // Clear displayed doctors
        setShowAddDoctorForm(false); // Hide add doctor form

        if (!db || !appId || !hospital.id) {
             showMessage("Firebase or hospital ID missing for fetching doctors.", "error");
             setLoadingDoctors(false);
             setNoDoctorsFound(true);
             return;
        }

        // Use onSnapshot for doctors as well for real-time updates
        const doctorsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${hospital.id}/doctors`);
        const unsubscribeDoctors = onSnapshot(doctorsColRef, (querySnapshot) => {
            console.log("ReviewsHubPage: onSnapshot triggered for doctors.");
            const fetchedDoctors = [];
            querySnapshot.forEach((docRef) => {
                const data = docRef.data();
                const ratings = data.ratings || [];
                const averageRating = ratings.length > 0 ? (ratings.reduce((sum, r) => sum + (r.stars || 0), 0) / ratings.length) : 0;
                if (data.name) {
                    fetchedDoctors.push({
                        id: docRef.id,
                        hospitalId: hospital.id,
                        ...data,
                        averageRating: averageRating,
                        numReviews: ratings.length
                    });
                }
            });

            fetchedDoctors.sort((a, b) => a.name.localeCompare(b.name));
            console.log("ReviewsHubPage: Fetched Doctors from snapshot for selected hospital:", fetchedDoctors.length);
            setDoctors(fetchedDoctors);
            setLoadingDoctors(false);
            setNoDoctorsFound(fetchedDoctors.length === 0);

            // Re-filter displayed doctors after a snapshot update
            const searchTerm = doctorInput.trim().toLowerCase();
            const filteredDoctors = fetchedDoctors.filter(doctor =>
                doctor.name.toLowerCase().includes(searchTerm) ||
                (doctor.specialty && doctor.specialty.toLowerCase().includes(searchTerm))
            );
            setDisplayedDoctors(filteredDoctors);

        }, (error) => {
            console.error("ReviewsHubPage: Error fetching doctors with onSnapshot:", error);
            showMessage('Error loading doctors.', 'error');
            setLoadingDoctors(false);
            setNoDoctorsFound(true);
        });

        // Return unsubscribe function for cleanup when selectedHospital changes
        return unsubscribeDoctors;

    }, [db, appId, showMessage, doctorInput, collection, onSnapshot]);


    // EFFECT for scrolling to doctor selection section when a hospital is selected
    useEffect(() => {
        if (selectedHospital && doctorSelectionSectionRef.current && document.activeElement !== document.getElementById('hospital-input')) {
            console.log("ReviewsHubPage: Scrolling useEffect triggered for doctor selection section.");
            setTimeout(() => {
                requestAnimationFrame(() => {
                    doctorSelectionSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }, 100);
        }
    }, [selectedHospital]);


    // --- Doctor Management (Filtering) ---
    // This useEffect handles filtering of doctors based on doctorInput
    useEffect(() => {
        console.log("ReviewsHubPage: useEffect for filtering doctors triggered. DoctorInput:", doctorInput);
        const searchTerm = doctorInput.trim().toLowerCase();
        const filtered = doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchTerm) ||
            (doctor.specialty && doctor.specialty.toLowerCase().includes(searchTerm))
        );
        setDisplayedDoctors(filtered);
    }, [doctors, doctorInput]);


    // NEW FUNCTION: Handle Add Doctor (for general users) - Protected
    const handleAddDoctorByUser = useCallback(async (e) => {
        e.preventDefault();
        // Protection: User must be logged in and not anonymous
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to add a doctor. Please sign up or log in.', 'error');
            setShowAuthModal(true); // Open auth modal
            return;
        }

        if (!db || !appId) {
            showMessage('Firebase not ready.', 'error');
            return;
        }
        if (!selectedHospital || !selectedHospital.id) {
            showMessage('Please select a hospital first to add a doctor.', 'error');
            return;
        }
        if (!newDoctorName.trim() || !newDoctorSpecialty.trim()) {
            showMessage('Please enter both doctor name and specialty.', 'error');
            return;
        }

        try {
            // Optimistic UI update: Add the new doctor to the local state immediately
            const tempId = Date.now().toString(); // Temporary ID
            const newDoctor = {
                id: tempId,
                hospitalId: selectedHospital.id,
                name: newDoctorName.trim(),
                specialty: newDoctorSpecialty.trim(),
                ratings: [], // Initialize with empty ratings array
                averageRating: 0,
                numReviews: 0
            };
            setDoctors(prevDoctors => [...prevDoctors, newDoctor].sort((a, b) => a.name.localeCompare(b.name)));
            setNewDoctorName('');
            setNewDoctorSpecialty('');
            setShowAddDoctorForm(false); // Hide the form

            const newDoctorRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`));
            await setDoc(newDoctorRef, {
                name: newDoctor.name,
                specialty: newDoctor.specialty,
                ratings: [],
                createdAt: new Date().toISOString(),
                createdBy: currentUserId, // Record who created it
            });

            showMessage(`Dr. ${newDoctor.name} added successfully to ${selectedHospital.name}!`, 'success');

            // The onSnapshot listener will eventually update the list with the real ID from Firestore.

            if (addDoctorFormRef.current) {
                setTimeout(() => {
                    const newDoctorButton = document.querySelector(`button.bg-gray-100[data-doctor-name="${newDoctor.name}"]`);
                    if (newDoctorButton) {
                        newDoctorButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 500);
            }

        } catch (error) {
            console.error("ReviewsHubPage: Error adding doctor:", error);
            showMessage(`Error adding doctor: ${error.message}`, 'error');
            // If optimistic update failed, revert the state
            setDoctors(prevDoctors => prevDoctors.filter(d => d.id !== tempId));
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, selectedHospital, newDoctorName, newDoctorSpecialty, showMessage, collection, doc, setDoc, setShowAuthModal]);


    const handleDoctorSelect = useCallback(async (doctor) => {
        console.log("ReviewsHubPage: handleDoctorSelect called for doctor:", doctor.name);
        setSelectedDoctor(doctor); // This line is crucial for the useEffect below
        setDoctorInput(doctor.name); // Keep doctor name in its search bar
        setLoadingReviews(true);
        setNoReviewsForDoctor(false);


        // Handle mobile view toggle for review submission form
        if (window.innerWidth < 1024) {
            setShowReviewSubmissionSection(false); // Keep this false initially for mobile
        } else {
            setShowReviewSubmissionSection(true);
        }

        // Scroll to reviews section (doctor reviews display)
        if (doctorReviewsDisplaySectionRef.current) {
            console.log("ReviewsHubPage: Scrolling to doctor reviews display section.");
            setTimeout(() => {
                doctorReviewsDisplaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100); // Small delay to allow DOM updates
        }
    }, []);

    // New useEffect for managing the onSnapshot listener based on selectedDoctor
    useEffect(() => {
        let unsubscribe = () => {}; // Initialize with a no-op function

        if (selectedDoctor && db && appId) {
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedDoctor.hospitalId}/doctors/${selectedDoctor.id}`);
            console.log("ReviewsHubPage: Setting up onSnapshot for doctorDocRef:", doctorDocRef.path);

            unsubscribe = onSnapshot(doctorDocRef, (docSnap) => {
                console.log("ReviewsHubPage: onSnapshot triggered for doctorDocRef.");
                setLoadingReviews(false);
                if (!docSnap.exists() || !docSnap.data()?.ratings || docSnap.data().ratings.length === 0) {
                    console.log("ReviewsHubPage: No reviews or document data for this doctor found in snapshot.");
                    setNoReviewsForDoctor(true);
                    setReviews([]);
                } else {
                    setNoReviewsForDoctor(false);
                    const doctorData = docSnap.data();
                    const fetchedReviews = doctorData.ratings || [];
                    console.log("ReviewsHubPage: Fetched reviews from snapshot:", fetchedReviews.length);

                    fetchedReviews.sort((a, b) => {
                        const dateA = a.date ? (a.date.seconds ? a.date.seconds * 1000 : new Date(a.date).getTime()) : 0;
                        const dateB = b.date ? (b.date.seconds ? b.date.seconds * 1000 : new Date(b.date).getTime()) : 0;
                        return dateB - dateA;
                    });

                    // Ensure dates are converted to JS Date objects for consistent use in rendering
                    const reviewsToDisplay = fetchedReviews.map(review => ({
                        ...review,
                        date: review.date && typeof review.date.toDate === 'function' ? review.date.toDate() : new Date(review.date),
                        comments: review.comments ? review.comments.map(comment => ({
                            ...comment,
                            date: comment.date && typeof comment.date.toDate === 'function' ? comment.date.toDate() : new Date(comment.date)
                        })) : []
                    }));
                    setReviews(reviewsToDisplay);
                    console.log("ReviewsHubPage: Reviews state updated. Current reviews count:", reviewsToDisplay.length);
                }
            }, (error) => {
                console.error("ReviewsHubPage: Error fetching reviews with onSnapshot:", error);
                showMessage('Error loading reviews.', 'error');
                setLoadingReviews(false);
                setNoReviewsForDoctor(true);
            });
        } else {
            // No doctor selected or Firebase not ready, clear reviews
            setReviews([]);
            setNoReviewsForDoctor(false); // Reset this state
            setLoadingReviews(false);
        }

        return () => {
            console.log("ReviewsHubPage: Cleaning up onSnapshot listener.");
            unsubscribe(); // Cleanup function
        }
    }, [selectedDoctor, db, appId, showMessage, doc, onSnapshot]);


    // --- Review Submission ---
    const handleSubmitReview = useCallback(async () => {
        console.log("ReviewsHubPage: handleSubmitReview called.");
        // Protection: User must be logged in and not anonymous
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to submit a review. Please sign up or log in.', 'error');
            setShowAuthModal(true); // Open auth modal
            return;
        }

        if (!db || !appId) {
            showMessage('Firebase not ready.', 'error');
            return;
        }
        if (!selectedHospital || !selectedDoctor) {
            showMessage('Please select a hospital and doctor before submitting a review.', 'error');
            return;
        }
        // Validate nursing field selection - now checks if it's the placeholder or an empty string from search input
        if (nursingField === NURSING_FIELDS[0] || nursingField.trim() === '') {
            showMessage('Please select or type your nursing field.', 'error');
            return;
        }

        const contentCheck = filterContent(reviewText);
        if (!contentCheck.isValid) {
            showMessage(contentCheck.message, 'error');
            return;
        }
        if (reviewRating === 0) {
            showMessage('Please select a star rating.', 'error');
            return;
        }

        try {
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);

            const newReview = {
                stars: reviewRating,
                comment: reviewText,
                reviewerId: `RN-${currentUserId.substring(0, 5)}`, // This will store the generic RN-ID
                date: new Date(), // Store as a Firestore Timestamp or JS Date
                hospitalName: selectedHospital.name,
                doctorName: selectedDoctor.name,
                nursingField: nursingField, // Include nursing field from state
                comments: []
            };
            console.log("ReviewsHubPage: Submitting new review:", newReview);

            await updateDoc(doctorRef, {
                ratings: arrayUnion(newReview)
            });

            setReviewText('');
            setReviewRating(0);
            setNursingField(NURSING_FIELDS[0]); // Reset nursing field after submission
            setSearchQuery(''); // Clear search query after submission
            showMessage('Review submitted successfully!', 'success');
            console.log('ReviewsHubPage: Review submitted successfully!');
            // The onSnapshot listener will handle re-fetching and updating the reviews state
        } catch (e) {
            console.error("ReviewsHubPage: Error adding review: ", e);
            showMessage(`Error submitting review: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, selectedHospital, selectedDoctor, reviewText, reviewRating, nursingField, db, appId, showMessage, doc, updateDoc, arrayUnion, setShowAuthModal]);

    // --- Comment Submission ---
    const handleAddCommentToReview = useCallback(async (reviewDateMillis, commentTextValue) => { // Renamed commentText to commentTextValue to avoid conflict with state
        console.log("ReviewsHubPage: handleAddCommentToReview called.");
        // Protection: User must be logged in and not anonymous
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to add a comment. Please sign up or log in.', 'error');
            setShowAuthModal(true); // Open auth modal
            return;
        }

        if (commentTextValue.trim() === '') {
            showMessage('Comment cannot be empty.', 'error');
            return;
        }
        if (!selectedHospital || !selectedDoctor) {
             showMessage('Hospital or doctor not selected.', 'error');
             return;
        }
        const contentCheck = filterContent(commentTextValue);
        if (!contentCheck.isValid) {
            showMessage(contentCheck.message, 'error');
            return;
        }

        try {
            console.log("ReviewsHubPage: Attempting to fetch doctor document for comment update.");
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);
            const docSnap = await getDoc(doctorRef);

            if (docSnap.exists()) {
                const doctorData = docSnap.data();
                let updatedRatings = [...(doctorData.ratings || [])];
                console.log("ReviewsHubPage: Current ratings from doc:", updatedRatings);

                const targetReviewIndex = updatedRatings.findIndex(review => {
                    // Ensure comparison is always between millisecond timestamps from JS Date objects
                    const reviewDate = review.date ? (
                        typeof review.date.toDate === 'function' ? review.date.toDate().getTime() : new Date(review.date).getTime()
                    ) : 0;
                    console.log(`ReviewsHubPage: Comparing reviewDateMillis ${reviewDateMillis} with review date ${reviewDate}`);
                    return reviewDate === reviewDateMillis;
                });

                if (targetReviewIndex !== -1) {
                    const newComment = {
                        text: commentTextValue,
                        userId: `RN-${currentUserId.substring(0, 5)}`,
                        date: new Date() // Store as a JS Date object
                    };
                    // Ensure comments array exists before pushing
                    updatedRatings[targetReviewIndex].comments = updatedRatings[targetReviewIndex].comments || [];
                    updatedRatings[targetReviewIndex].comments.push(newComment);
                    console.log("ReviewsHubPage: New comment added to array. Updated ratings structure:", updatedRatings);

                    console.log("ReviewsHubPage: Updating doc with new comments array.");
                    await updateDoc(doctorRef, {
                        ratings: updatedRatings
                    });
                    showMessage('Comment added successfully!', 'success');
                    console.log('ReviewsHubPage: Comment added successfully to review index', targetReviewIndex, 'for doctor', selectedDoctor.id);
                    setShowCommentInput({}); // Close all comment inputs after success
                    setCommentText({}); // Clear the specific comment text input state
                } else {
                    showMessage('Error posting comment: Could not find review to update.', 'error');
                    console.error('ReviewsHubPage: Error: Review not found by timestamp for doctor', selectedDoctor.id);
                }
            } else {
                showMessage('Error posting comment: Doctor document not found.', 'error');
                console.error('ReviewsHubPage: Doctor document not found for comment addition:', selectedDoctor.id);
            }
        } catch (e) {
            console.error("ReviewsHubPage: Error adding comment to review: ", e);
            showMessage(`Error posting comment: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, selectedHospital, selectedDoctor, db, appId, showMessage, doc, getDoc, updateDoc, setShowAuthModal]);


    // Mobile review form toggle buttons
    const handleAddReviewMobileClick = useCallback(() => {
        // Check authentication before allowing to write a review
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to write a review. Please sign up or log in.', 'error');
            setShowAuthModal(true);
            return;
        }
        setShowReviewSubmissionSection(true);
        if (reviewSubmissionSectionRef.current) {
            reviewSubmissionSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentUserId, currentUserIsAnonymous, showMessage, setShowAuthModal]);

    const handleCancelReviewMobileClick = useCallback(() => {
        setShowReviewSubmissionSection(false);
        if (doctorReviewsDisplaySectionRef.current) {
            doctorReviewsDisplaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // NEW: Handlers for interactive search bar
    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setNursingField(query); // Update nursingField directly from input

        if (query.length > 0) {
            const filtered = NURSING_FIELDS.filter(field =>
                // Exclude the placeholder from filtered suggestions, but include matches
                field.toLowerCase().includes(query.toLowerCase()) && field !== NURSING_FIELDS[0]
            );
            setFilteredNursingFields(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredNursingFields([]);
            setShowSuggestions(false);
            setNursingField(NURSING_FIELDS[0]); // Reset if input cleared
        }
    };

    const handleSuggestionClick = (field) => {
        setSearchQuery(field);
        setNursingField(field);
        setShowSuggestions(false);
        setFilteredNursingFields([]); // Clear filtered list after selection
    };


    return (
        <ErrorBoundary>
            <div className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8 pt-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}> {/* Changed background to transparent white */}
                {/* MessageBox is rendered globally via App.jsx, but local `showMessage` uses it */}
                {/* Added defensive check for message object properties */}
                {/* The message object is now managed by App.jsx and passed via context, so direct access is not needed here. */}
                {/* <MessageBox message={message?.text || ''} type={message?.type || ''} /> */}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Share Your RN<span className="text-[#CC5500]">Tea</span>!</h1>

                {/* Hospital Selection Section */}
                <section id="hospital-selection-section" className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Which hospital are you interested in?</h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                        <input
                            type="text"
                            id="hospital-input"
                            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige"
                            placeholder="Search for a hospital..."
                            value={hospitalInput}
                            onChange={(e) => setHospitalInput(e.target.value)}
                        />
                        <button
                            id="search-hospital-btn"
                            className="bg-custom-beige text-gray-800 font-bold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-md w-full md:w-auto btn-hover-scale"
                            onClick={() => { /* No direct click handler needed here, onSnapshot handles updates */ }}
                            disabled={true} // Disable search button as onSnapshot handles updates
                        >
                            Search Hospital
                        </button>
                    </div>

                    {/* NEW: Or Add Hospital Section - Always visible, but triggers login if not authenticated */}
                    <div className="text-center mb-6">
                        <button
                            onClick={() => {
                                if (!currentUserId || currentUserIsAnonymous) {
                                    showMessage('Login or Sign Up to add a hospital.', 'info');
                                    setShowAuthModal(true);
                                } else {
                                    setShowAddHospitalForm(prev => !prev);
                                }
                            }}
                            className="text-gray-600 hover:text-custom-beige font-semibold py-2 px-4 rounded-md transition-colors transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            {showAddHospitalForm && currentUserId && !currentUserIsAnonymous ? ( // Only show "Hide" if form is open AND user is logged in
                                'Hide Add Hospital Form'
                            ) : (
                                <>or <span className="text-[#CC5500]">Add Hospital</span></>
                            )}
                        </button>
                        {showAddHospitalForm && currentUserId && !currentUserIsAnonymous && ( // Only show form if logged in and not anonymous
                            <form ref={addHospitalFormRef} onSubmit={handleAddHospitalByUser} className="space-y-4 mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                                <input
                                    type="text"
                                    placeholder="New Hospital Name"
                                    value={newHospitalName}
                                    onChange={(e) => setNewHospitalName(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-custom-beige"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Location (e.g., Boston, MA)"
                                    value={newHospitalLocation}
                                    onChange={(e) => setNewHospitalLocation(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-custom-beige"
                                    required
                                />
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Submit New Hospital</button>
                                <button type="button" onClick={() => setShowAddHospitalForm(false)} className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors mt-2">Cancel</button>
                            </form>
                        )}
                        {showAddHospitalForm && (!currentUserId || currentUserIsAnonymous) && ( // Message if form is open but user is not logged in
                             <p className="text-red-600 mt-2 text-center">Please log in or sign up to add a hospital.</p>
                        )}
                    </div>

                    <div className="mb-4 mt-8">
                        <p className="text-lg font-semibold text-gray-800">Hospitals with reviews:</p>
                        <div id="hospitals-list" className="flex flex-wrap gap-2 mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-2">
                            {loadingHospitals && <p className="text-gray-500 italic w-full text-center">Loading hospitals...</p>}
                            {noHospitalsFound && !loadingHospitals && <p className="text-gray-500 italic w-full text-center">No hospitals found yet. Be the first to add a review!</p>}
                            {displayedHospitals.map((hospital) => (
                                <button
                                    key={hospital.id}
                                    data-hospital-name={hospital.name}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-[#CC5500] hover:text-white transition duration-200 btn-hover-scale"
                                    onClick={() => handleHospitalSelect(hospital)}
                                >
                                    {hospital.name}
                                </button>
                            ))}
                        </div>
                        {loadMoreHospitalsVisible && (
                            <button
                                id="load-more-hospitals-btn"
                                className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-200 w-full btn-hover-scale"
                                onClick={handleLoadMoreHospitals}
                            >
                                Load More Hospitals
                            </button>
                        )}
                    </div>
                </section>

                {/* Doctor Selection Section */}
                <section id="doctor-selection-section" ref={doctorSelectionSectionRef} className={`bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted ${selectedHospital ? '' : 'hidden'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Select a doctor</h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                        <input
                            type="text"
                            id="doctor-input"
                            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-beige"
                            placeholder="e.g., Dr. Sarah Lee"
                            value={doctorInput}
                            onChange={(e) => setDoctorInput(e.target.value)}
                        />
                        <button
                            id="select-doctor-btn"
                            className="bg-custom-beige text-gray-800 font-bold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-md w-full md:w-auto btn-hover-scale"
                            onClick={() => { /* No direct click handler needed here, onSnapshot handles updates */ }}
                            disabled={true} // Disable search button as onSnapshot handles updates
                        >
                            Search Doctor
                        </button>
                    </div>

                    {/* NEW: Or Add Doctor Section - Always visible, but triggers login if not authenticated */}
                    <div className="text-center mb-6">
                        <button
                            onClick={() => {
                                if (!currentUserId || currentUserIsAnonymous) {
                                    showMessage('Login or Sign Up to add a doctor.', 'info');
                                    setShowAuthModal(true);
                                } else {
                                    setShowAddDoctorForm(prev => !prev);
                                }
                            }}
                            className="text-gray-600 hover:text-custom-beige font-semibold py-2 px-4 rounded-md transition-colors transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            {showAddDoctorForm && currentUserId && !currentUserIsAnonymous ? ( // Only show "Hide" if form is open AND user is logged in
                                'Hide Add Doctor Form'
                            ) : (
                                <>or <span className="text-[#CC5500]">Add Doctor</span></>
                            )}
                        </button>
                        {showAddDoctorForm && currentUserId && !currentUserIsAnonymous && ( // Only show form if logged in and not anonymous
                            <form ref={addDoctorFormRef} onSubmit={handleAddDoctorByUser} className="space-y-4 mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                                <input
                                    type="text"
                                    placeholder="New Doctor Name"
                                    value={newDoctorName}
                                    onChange={(e) => setNewDoctorName(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-custom-beige"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Specialty (e.g., Cardiologist)"
                                    value={newDoctorSpecialty}
                                    onChange={(e) => setNewDoctorSpecialty(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-custom-beige"
                                    required
                                />
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Submit New Doctor</button>
                                <button type="button" onClick={() => setShowAddDoctorForm(false)} className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors mt-2">Cancel</button>
                            </form>
                        )}
                        {showAddDoctorForm && (!currentUserId || currentUserIsAnonymous) && ( // Message if form is open but user is not logged in
                            <p className="text-red-600 mt-2 text-center">Please log in or sign up to add a doctor.</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-800">Doctors with reviews at <span id="display-selected-hospital" className="text-gray-800">{selectedHospital?.name}</span>:</p>
                        <div id="doctors-list" className="flex flex-wrap gap-2 mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-2">
                            {loadingDoctors && <p className="text-gray-500 italic w-full text-center">Loading doctors...</p>}
                            {noDoctorsFound && !loadingDoctors && <p className="text-500 italic w-full text-center">No doctors found for this hospital yet.</p>}
                            {displayedDoctors.map((doctor) => (
                                <button
                                    key={doctor.id}
                                    data-doctor-name={doctor.name}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-custom-beige hover:text-gray-800 transition duration-200 btn-hover-scale"
                                    onClick={() => handleDoctorSelect(doctor)}
                                >
                                    {`${doctor.name} (${doctor.specialty || 'N/A'}) - Avg. ${doctor.averageRating.toFixed(1)} ★ (${doctor.numReviews})`}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main content grid for larger screens (Reviews & Write Review) */}
                <div id="reviews-content-grid" className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${selectedDoctor ? '' : 'hidden'}`}>
                    {/* Left Column: Review Submission Section */}
                    <section
                        id="review-submission-section"
                        ref={reviewSubmissionSectionRef}
                        className={`lg:col-span-1 bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted ${showReviewSubmissionSection || window.innerWidth >= 1024 ? '' : 'hidden'}`}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Write a Review for <span id="display-selected-doctor-submission" className="text-[#CC5500]">{selectedDoctor?.name}</span></h2>
                        {/* Star Rating */}
                        <div className="mb-4">
                            <label htmlFor="review-stars" className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
                            <StarRating rating={reviewRating} onRatingChange={setReviewRating} />
                        </div>
                        {/* Nursing Field Search Bar with Suggestions */}
                        <div className="mb-4 relative"> {/* relative for absolute positioning of suggestions */}
                            <label htmlFor="nursing-field-input" className="block text-gray-700 text-sm font-medium mb-2">
                                Which field of Nursing are you?
                            </label>
                            <input
                                type="text"
                                id="nursing-field-input"
                                className="w-full p-3 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-beige"
                                placeholder="Start typing your nursing field..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Delay to allow click on suggestion
                            />
                            {showSuggestions && filteredNursingFields.length > 0 && (
                                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1">
                                    {filteredNursingFields.map((field, index) => (
                                        <li
                                            key={index}
                                            className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800"
                                            onClick={() => handleSuggestionClick(field)}
                                        >
                                            {field}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <textarea
                            id="review-text"
                            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-custom-beige"
                            rows="6"
                            placeholder="Share your experience or review here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            maxLength={MAX_CHAR_LIMIT}
                        ></textarea>
                        {/* Submit Review Button - Always visible, but triggers login if not authenticated */}
                        <button
                            id="submit-review-btn"
                            className="bg-custom-beige text-gray-800 font-bold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-md w-full btn-hover-scale"
                            onClick={handleSubmitReview}
                        >
                            Submit Review
                        </button>
                        <div className="text-sm text-gray-500 mt-4">
                            Your User ID: <span id="display-user-id">{currentUserId}</span>
                        </div>
                        {window.innerWidth < 1024 && (
                            <button id="cancel-review-mobile-btn" className="bg-gray-400 text-white px-4 py-2 rounded-full mt-4 w-full" onClick={handleCancelReviewMobileClick}>
                                Cancel
                            </button>
                        )}
                    </section>

                    {/* Right Column: Reviews Display Section */}
                    <section id="doctor-reviews-display" ref={doctorReviewsDisplaySectionRef} className="lg:col-span-2 bg-custom-beige p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Reviews for <span id="display-selected-doctor-reviews" className="text-[#CC5500] font-extrabold">{(selectedDoctor && selectedDoctor.name) ? selectedDoctor.name : ''}</span></h2>
                        {window.innerWidth < 1024 && !showReviewSubmissionSection && (
                            <button
                                id="add-review-mobile-btn"
                                className="bg-[#001346] text-white px-5 py-2 rounded-md hover:bg-[#000A2C] transition duration-200 btn-hover-scale mb-4 w-full"
                                onClick={handleAddReviewMobileClick}
                            >
                                Write a Review for {selectedDoctor?.name}
                            </button>
                        )}

                        {loadingReviews && <p className="text-gray-700 italic text-center">Loading reviews...</p>}
                        {noReviewsForDoctor && !loadingReviews && <p className="text-gray-700 italic text-center">No reviews found for this doctor yet. Be the first to add one!</p>}

                        {reviews.length > 0 && (
                            <div id="reviews-list" className="space-y-6">
                                {reviews.map((review, index) => (
                                    <div key={review.date.getTime() + index} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="min-w-0">
                                                <StarRating rating={review.stars} onRatingChange={() => {}} readOnly={true} />
                                                <p className="text-sm text-gray-500 mt-1 break-words">
                                                    {review.nursingField} on: {review.date instanceof Date ? review.date.toLocaleDateString() : 'N/A'}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed mb-4">{review.comment}</p>

                                        {/* Comments Section */}
                                        <div className="mt-4 border-t border-gray-100 pt-4">
                                            <h4 className="text-md font-semibold text-gray-700 mb-3">Comments ({review.comments ? review.comments.length : 0})</h4>
                                            {review.comments && review.comments.length > 0 ? (
                                                <div className="space-y-3 mb-4">
                                                    {review.comments.map((comment, commentIndex) => (
                                                        <div key={comment.date.getTime() + '_' + commentIndex} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
                                                            <p>{comment.text}</p>
                                                            <p className="text-xs text-gray-500 mt-1">
                                                                by {comment.userId} on {comment.date instanceof Date ? comment.date.toLocaleDateString() : 'N/A'}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-gray-500 mb-3">No comments yet. Be the first!</p>
                                            )}
                                            {/* Add Comment Button - Always visible, but triggers login if not authenticated */}
                                            <button
                                                onClick={() => {
                                                    if (!currentUserId || currentUserIsAnonymous) {
                                                        showMessage('Login or Sign Up to add a comment.', 'info');
                                                        setShowAuthModal(true);
                                                    } else {
                                                        setShowCommentInput(prev => ({ ...prev, [review.date.getTime()]: !prev[review.date.getTime()] }));
                                                    }
                                                }}
                                                className="text-blue-500 hover:underline text-sm mb-3"
                                            >
                                                {showCommentInput[review.date.getTime()] && currentUserId && !currentUserIsAnonymous ? 'Cancel Comment' : 'Add a Comment'}
                                            </button>

                                            {showCommentInput[review.date.getTime()] && currentUserId && !currentUserIsAnonymous && ( // Only show input if logged in and not anonymous
                                                <div className="flex mt-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Write a comment..."
                                                        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' && e.target.value.trim()) {
                                                                handleAddCommentToReview(review.date.getTime(), e.target.value);
                                                                e.target.value = ''; // Clear input after posting
                                                            }
                                                        }}
                                                        value={commentText[review.date.getTime()] || ''} // Controlled component for comment input
                                                        onChange={(e) => setCommentText(prev => ({ ...prev, [review.date.getTime()]: e.target.value }))}
                                                    />
                                                    <button
                                                        className="submit-comment-btn bg-gray-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition duration-200 btn-hover-scale"
                                                        onClick={() => {
                                                            const valueToPost = commentText[review.date.getTime()];
                                                            handleAddCommentToReview(review.date.getTime(), valueToPost);
                                                        }}
                                                    >
                                                        Post
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default ReviewsHubPage;
