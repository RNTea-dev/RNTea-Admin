import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App.jsx'; // Assuming FirebaseContext is correctly provided by App.jsx
// import StarRating from '../components/StarRating.jsx'; // Removed StarRating import
import MessageBox from '../components/MessageBox.jsx';
import AuthModal from '../components/AuthModal.jsx';

// Firebase imports specific to this component (only what's needed for operations, not initialization)
import {
    collection,
    doc,
    updateDoc,
    arrayUnion,
    arrayRemove, // Added arrayRemove for unliking
    getDoc,
    onSnapshot,
    setDoc,
} from 'firebase/firestore';

// Define explicit words for content filtering
const EXPLICIT_WORDS = ['fuck', 'shit', 'asshole', 'bitch', 'cunt', 'damn', 'hell'];
const MAX_CHAR_LIMIT = 250; // Max characters for review and comment text

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
    // Destructure Firebase context values - RELYING ON FirebaseContext FOR DB, AUTH, USER STATE
    const { db, auth, currentUserId, currentUserIsAnonymous, appId, showMessage, setShowAuthModal } = useContext(FirebaseContext);

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
    const [reviewRating, setReviewRating] = useState(0); // reviewRating state kept for potential future use or if needed for other components
    const [nursingField, setNursingField] = useState(NURSING_FIELDS[0]); // State for selected nursing field
    const [searchQuery, setSearchQuery] = useState(''); // NEW: State for search input
    const [filteredNursingFields, setFilteredNursingFields] = useState([]); // NEW: State for filtered suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // NEW: State to control suggestion visibility

    // This state is no longer strictly needed for showing/hiding the section,
    // as isShareTeaCollapsed will handle it. Keeping it for mobile button logic.
    const [showReviewSubmissionSection, setShowReviewSubmissionSection] = useState(false);

    const [showCommentInput, setShowCommentInput] = useState({});
    const [commentText, setCommentText] = useState({});
    const [commentSuccessMessage, setCommentSuccessMessage] = useState({}); // Re-introduced for temporary success message

    // NEW STATES for Add Hospital/Doctor forms
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
    const [newHospitalLocation, setNewHospitalLocation] = useState('');

    const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
    const [newDoctorName, setNewDoctorName] = useState('');
    const [newDoctorSpecialty, setNewDoctorSpecialty] = useState('');

    // State to manage the collapsed "Share Some Tea" section
    const [isShareTeaCollapsed, setIsShareTeaCollapsed] = useState(true);

    // Refs for scrolling
    const doctorSelectionSectionRef = React.useRef(null);
    const doctorReviewsDisplaySectionRef = React.useRef(null);
    // reviewSubmissionSectionRef is no longer needed as it's merged
    const addHospitalFormRef = React.useRef(null); // Ref for new hospital form
    const addDoctorFormRef = React.useRef(null); // Ref for new doctor form

    console.log("ReviewsHubPage: Component rendered.");

    // --- Hospital Management ---
    useEffect(() => {
        let unsubscribe = () => {};
        console.log("ReviewsHubPage: useEffect for hospital onSnapshot. DB, AppId Ready:", !!db, !!appId);

        // Only fetch if db and appId are available from context
        if (db && appId) {
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
    }, [db, appId, showMessage]); // Dependencies are db and appId from context


    // NEW FUNCTION: Handle Add Hospital (for general users) - Protected
    const handleAddHospitalByUser = useCallback(async (e) => {
        e.preventDefault();
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to add a hospital. Please sign up or log in.', 'error');
            setShowAuthModal(true);
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
            const tempId = Date.now().toString(); // Temporary ID for immediate UI update
            const newHospital = { id: tempId, name: newHospitalName.trim(), location: newHospitalLocation.trim() };
            // Optimistic UI update
            setHospitals(prevHospitals => [...prevHospitals, newHospital].sort((a, b) => a.name.localeCompare(b.name)));
            setNewHospitalName('');
            setNewHospitalLocation('');
            setShowAddHospitalForm(false);

            const newHospitalRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals`));
            await setDoc(newHospitalRef, {
                name: newHospital.name,
                location: newHospital.location,
                createdAt: new Date().toISOString(),
                createdBy: currentUserId,
            });

            showMessage('Hospital added successfully! You can now add doctors to it.', 'success');

            if (addHospitalFormRef.current) {
                setTimeout(() => {
                    // Find the newly added hospital button and scroll to it
                    const newHospitalButton = document.querySelector(`button.bg-gray-100[data-hospital-name="${newHospital.name}"]`);
                    if (newHospitalButton) {
                        newHospitalButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 500);
            }

        } catch (error) {
            console.error("ReviewsHubPage: Error adding hospital:", error);
            showMessage(`Error adding hospital: ${error.message}`, 'error');
            // Revert optimistic UI update on error
            setHospitals(prevHospitals => prevHospitals.filter(h => h.id !== tempId));
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, newHospitalName, newHospitalLocation, showMessage, setShowAuthModal]);


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
        setNoHospitalsFound(filtered.length === 0 && !loadingHospitals);
    }, [hospitals, hospitalInput, currentHospitalDisplayCount, loadingHospitals]);

    const handleLoadMoreHospitals = useCallback(() => {
        setCurrentHospitalDisplayCount(prevCount => prevCount + 20);
    }, []);

    const handleHospitalSelect = useCallback(async (hospital) => {
        console.log("ReviewsHubPage: handleHospitalSelect called for hospital:", hospital.name);
        setSelectedHospital(hospital);
        console.log("ReviewsHubPage: Populating hospitalInput with:", hospital.name);
        setHospitalInput(hospital.name);

        setDoctorInput('');
        setLoadingDoctors(true);
        setNoDoctorsFound(false);
        setDoctors([]);
        setDisplayedDoctors([]);
        setShowAddDoctorForm(false);

        if (!db || !appId || !hospital.id) {
             showMessage("Firebase or hospital ID missing for fetching doctors.", "error");
             setLoadingDoctors(false);
             setNoDoctorsFound(true);
             return;
        }

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

            // Re-filter displayed doctors based on current doctorInput after new doctors are fetched
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

        return unsubscribeDoctors;

    }, [db, appId, showMessage, doctorInput]); // Added doctorInput to dependencies for correct filtering after hospital select


    // EFFECT for scrolling to doctor selection section when a hospital is selected
    useEffect(() => {
        // Only scroll if a hospital is selected and the hospital input is not the active element (to prevent scrolling while typing)
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
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to add a doctor. Please sign up or log in.', 'error');
            setShowAuthModal(true);
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
            const tempId = Date.now().toString(); // Temporary ID for optimistic UI update
            const newDoctor = {
                id: tempId,
                hospitalId: selectedHospital.id,
                name: newDoctorName.trim(),
                specialty: newDoctorSpecialty.trim(),
                ratings: [],
                averageRating: 0,
                numReviews: 0
            };
            // Optimistic UI update
            setDoctors(prevDoctors => [...prevDoctors, newDoctor].sort((a, b) => a.name.localeCompare(b.name)));
            setNewDoctorName('');
            setNewDoctorSpecialty('');
            setShowAddDoctorForm(false);

            const newDoctorRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`));
            await setDoc(newDoctorRef, {
                name: newDoctor.name,
                specialty: newDoctor.specialty,
                ratings: [], // Initialize with empty ratings array
                createdAt: new Date().toISOString(),
                createdBy: currentUserId,
            });

            showMessage(`Dr. ${newDoctor.name} added successfully to ${selectedHospital.name}!`, 'success');

            if (addDoctorFormRef.current) {
                setTimeout(() => {
                    // Find the newly added doctor button and scroll to it
                    const newDoctorButton = document.querySelector(`button.bg-gray-100[data-doctor-name="${newDoctor.name}"]`);
                    if (newDoctorButton) {
                        newDoctorButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 500);
            }

        } catch (error) {
            console.error("ReviewsHubPage: Error adding doctor:", error);
            showMessage(`Error adding doctor: ${error.message}`, 'error');
            // Revert optimistic UI update on error
            setDoctors(prevDoctors => prevDoctors.filter(d => d.id !== tempId));
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, selectedHospital, newDoctorName, newDoctorSpecialty, showMessage, setShowAuthModal]);


    const handleDoctorSelect = useCallback(async (doctor) => {
        console.log("ReviewsHubPage: handleDoctorSelect called for doctor:", doctor.name);
        setSelectedDoctor(doctor);
        setDoctorInput(doctor.name);
        setLoadingReviews(true);
        setNoReviewsForDoctor(false);

        setIsShareTeaCollapsed(true); // Collapse review submission section when a new doctor is selected

        if (doctorReviewsDisplaySectionRef.current) {
            console.log("ReviewsHubPage: Scrolling to doctor reviews display section.");
            setTimeout(() => {
                requestAnimationFrame(() => {
                    doctorReviewsDisplaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }, 100);
        }
    }, []);

    // New useEffect for managing the onSnapshot listener based on selectedDoctor
    useEffect(() => {
        let unsubscribe = () => {};

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
                        // Handle both Firestore Timestamp objects and ISO strings/Date objects
                        const getDateValue = (date) => {
                            if (date && typeof date.toDate === 'function') {
                                return date.toDate().getTime(); // Firestore Timestamp
                            }
                            if (date instanceof Date) {
                                return date.getTime(); // JavaScript Date object
                            }
                            if (typeof date === 'string') {
                                return new Date(date).getTime(); // ISO string
                            }
                            return 0; // Fallback for invalid dates
                        };
                        const dateA = getDateValue(a.date);
                        const dateB = getDateValue(b.date);
                        return dateB - dateA; // Sort descending (newest first)
                    });

                    const reviewsToDisplay = fetchedReviews.map(review => ({
                        ...review,
                        id: review.id || crypto.randomUUID(), // Ensure review has an ID
                        date: review.date && typeof review.date.toDate === 'function' ? review.date.toDate() : new Date(review.date),
                        comments: review.comments ? review.comments.map(comment => ({
                            ...comment,
                            date: comment.date && typeof comment.date.toDate === 'function' ? comment.date.toDate() : new Date(comment.date)
                        })) : [],
                        likes: review.likes || [] // Ensure likes array exists
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
            // Reset states if selectedDoctor, db, or appId are not ready
            setReviews([]);
            setNoReviewsForDoctor(false);
            setLoadingReviews(false);
        }

        return () => {
            console.log("ReviewsHubPage: Cleaning up onSnapshot listener.");
            unsubscribe();
        }
    }, [selectedDoctor, db, appId, showMessage]);


    // --- Review Submission ---
    const handleSubmitReview = useCallback(async () => {
        console.log("ReviewsHubPage: handleSubmitReview called.");
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to submit a review. Please sign up or log in.', 'error');
            setShowAuthModal(true);
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
        if (nursingField === NURSING_FIELDS[0] || nursingField.trim() === '') {
            showMessage('Please select or type your nursing field.', 'error');
            return;
        }

        const contentCheck = filterContent(reviewText);
        if (!contentCheck.isValid) {
            showMessage(contentCheck.message, 'error');
            return;
        }
        // Removed reviewRating validation
        // if (reviewRating === 0) {
        //     showMessage('Please select a star rating.', 'error');
        //     return;
        // }

        // Log the current user's display name before submission
        console.log("ReviewsHubPage: auth.currentUser?.displayName at submission:", auth.currentUser?.displayName);

        try {
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);

            const reviewId = crypto.randomUUID();
            const reviewDate = new Date();

            const newReview = {
                id: reviewId,
                // stars: reviewRating, // Removed stars
                comment: reviewText,
                // Use auth.currentUser?.displayName directly, or fallback to masked ID
                reviewerId: auth.currentUser?.displayName || `RN-${currentUserId.substring(0, 5)}`,
                date: reviewDate,
                hospitalName: selectedHospital.name,
                doctorName: selectedDoctor.name,
                nursingField: nursingField,
                comments: [], // Initialize comments array for new review
                likes: [] // Initialize likes array for new review
            };
            console.log("ReviewsHubPage: Submitting new review:", newReview);

            // Update the doctor's document with the new review in its 'ratings' array
            await updateDoc(doctorRef, {
                ratings: arrayUnion(newReview)
            });

            // Store a copy of the review in the user's private collection
            // This is useful for "My Reviews" section for the logged-in user
            const userReviewRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}`); // Changed path to users/{userId}/myReviews
            await setDoc(userReviewRef, {
                ...newReview,
                userId: currentUserId, // Explicitly use currentUserId for security rule match
                hospitalId: selectedHospital.id,
                doctorId: selectedDoctor.id,
            });


            setReviewText('');
            setReviewRating(0); // Kept for consistency, though not used in UI
            setNursingField(NURSING_FIELDS[0]);
            setSearchQuery('');
            showMessage('Review submitted successfully!', 'success');
            console.log('ReviewsHubPage: Review submitted successfully!');
            setIsShareTeaCollapsed(true); // Collapse the review form after submission
        } catch (e) {
            console.error("ReviewsHubPage: Error adding review: ", e);
            showMessage(`Error submitting review: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, selectedHospital, selectedDoctor, reviewText, reviewRating, nursingField, db, appId, showMessage, setShowAuthModal, auth]);

    // --- Comment Submission ---
    const handleAddCommentToReview = useCallback(async (reviewId, commentTextValue) => {
        console.log("ReviewsHubPage: handleAddCommentToReview called for reviewId:", reviewId);
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to add a comment. Please sign up or log in.', 'error');
            setShowAuthModal(true);
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
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);

            const newComment = {
                text: commentTextValue,
                // Use auth.currentUser?.displayName directly, or fallback to masked ID
                userId: auth.currentUser?.displayName || `RN-${currentUserId.substring(0, 5)}`,
                date: new Date()
            };

            const docSnap = await getDoc(doctorRef);
            if (docSnap.exists()) {
                const doctorData = docSnap.data();
                let updatedRatings = [...(doctorData.ratings || [])];

                // Find the specific review within the doctor's ratings array
                const targetReviewIndex = updatedRatings.findIndex(review => review.id === reviewId);

                if (targetReviewIndex !== -1) {
                    // Ensure comments array exists for the target review
                    updatedRatings[targetReviewIndex].comments = updatedRatings[targetReviewIndex].comments || [];
                    // Add the new comment
                    updatedRatings[targetReviewIndex].comments.push(newComment);

                    // Update the doctor document with the modified ratings array
                    await updateDoc(doctorRef, {
                        ratings: updatedRatings
                    });
                    console.log('ReviewsHubPage: Comment added successfully to doctor review.');

                    // --- START UPDATED LOGIC FOR MYREVIEWS ---
                    const userReviewRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}`);
                    const userReviewSnap = await getDoc(userReviewRef);

                    if (userReviewSnap.exists()) {
                        // If the user already has this review in their 'myReviews', just update comments
                        await updateDoc(userReviewRef, {
                            comments: arrayUnion(newComment)
                        });
                        console.log('ReviewsHubPage: Comment added successfully to existing user review.');
                    } else {
                        // If the user does NOT have this review in their 'myReviews' (e.g., they are commenting on someone else's review)
                        // Fetch the full review data from the public collection to create a new entry in myReviews
                        const publicReviewDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedDoctor.hospitalId}/doctors/${selectedDoctor.id}`);
                        const publicReviewSnap = await getDoc(publicReviewDocRef);

                        if (publicReviewSnap.exists()) {
                            const publicReviewData = publicReviewSnap.data();
                            const relevantReview = (publicReviewData.ratings || []).find(r => r.id === reviewId);

                            if (relevantReview) {
                                // Create a new 'myReview' document for this specific review
                                await setDoc(userReviewRef, {
                                    ...relevantReview, // Copy the original review details
                                    userId: currentUserId, // Ensure userId is set for rules
                                    hospitalId: selectedDoctor.hospitalId,
                                    doctorId: selectedDoctor.id,
                                    comments: [newComment] // Initialize with the new comment
                                });
                                console.log('ReviewsHubPage: New user review document created with comment.');
                            } else {
                                console.warn('ReviewsHubPage: Could not find relevant review in public data to create user review entry.');
                            }
                        } else {
                            console.warn('ReviewsHubPage: Public doctor document not found when trying to create user review entry for comment.');
                        }
                    }
                    // --- END UPDATED LOGIC FOR MYREVIEWS ---

                    // Clear the comment input for the specific review
                    setCommentText(prev => ({ ...prev, [reviewId]: '' }));
                    // Show temporary success message
                    setCommentSuccessMessage(prev => ({ ...prev, [reviewId]: 'Comment posted successfully!' }));
                    
                    // MODIFIED: Delay hiding the comment input to allow user to see success message
                    setTimeout(() => {
                        setShowCommentInput(prev => ({ ...prev, [reviewId]: false }));
                        setCommentSuccessMessage(prev => ({ ...prev, [reviewId]: '' })); // Clear message after input hides
                    }, 1500); // Adjust delay as needed (e.g., 1500ms for 1.5 seconds)


                } else {
                    console.error('ReviewsHubPage: Error: Review not found by ID in doctor ratings array.', reviewId);
                    showMessage('Failed to post comment: Review not found.', 'error');
                }
            } else {
                console.error('ReviewsHubPage: Doctor document not found for comment addition:', selectedDoctor.id);
                showMessage('Failed to post comment: Doctor not found.', 'error');
            }

        } catch (e) {
            console.error("ReviewsHubPage: Error adding comment to review: ", e);
            showMessage(`Error posting comment: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, selectedHospital, selectedDoctor, db, appId, showMessage, setShowAuthModal, auth]);

    // --- Like Functionality ---
    const handleLikeReview = useCallback(async (reviewId) => {
        console.log("ReviewsHubPage: handleLikeReview called for reviewId:", reviewId);
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to like a review. Please sign up or log in.', 'info');
            setShowAuthModal(true);
            return;
        }
        if (!db || !appId || !selectedHospital || !selectedDoctor) {
            showMessage('Firebase or selected doctor/hospital data not ready.', 'error');
            return;
        }

        try {
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);
            const docSnap = await getDoc(doctorRef);

            if (docSnap.exists()) {
                const doctorData = docSnap.data();
                let updatedRatings = [...(doctorData.ratings || [])];
                const targetReviewIndex = updatedRatings.findIndex(review => review.id === reviewId);

                if (targetReviewIndex !== -1) {
                    let currentLikes = updatedRatings[targetReviewIndex].likes || [];
                    const userHasLiked = currentLikes.includes(currentUserId);

                    if (userHasLiked) {
                        // Unlike the review
                        updatedRatings[targetReviewIndex].likes = currentLikes.filter(uid => uid !== currentUserId);
                        showMessage('Review unliked.', 'info');
                    } else {
                        // Like the review
                        updatedRatings[targetReviewIndex].likes = [...currentLikes, currentUserId];
                        showMessage('Review liked!', 'success');
                    }

                    // Update the doctor document in public collection
                    await updateDoc(doctorRef, {
                        ratings: updatedRatings
                    });
                    console.log('ReviewsHubPage: Doctor document updated with new like status.');

                    // Also update the user's private copy of the review
                    const userReviewRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}`);
                    const userReviewSnap = await getDoc(userReviewRef);

                    if (userReviewSnap.exists()) {
                        // If the user has this review in their 'myReviews', update its likes
                        if (userHasLiked) {
                            await updateDoc(userReviewRef, {
                                likes: arrayRemove(currentUserId)
                            });
                        } else {
                            await updateDoc(userReviewRef, {
                                likes: arrayUnion(currentUserId)
                            });
                        }
                        console.log('ReviewsHubPage: User private review updated with new like status.');
                    } else {
                        // If the user doesn't have this review in their private collection (e.g., they liked someone else's review)
                        // Fetch the full review data from the public collection to create a new entry in myReviews
                        const publicReviewData = updatedRatings[targetReviewIndex];
                        await setDoc(userReviewRef, {
                            ...publicReviewData,
                            userId: currentUserId,
                            hospitalId: selectedHospital.id,
                            doctorId: selectedDoctor.id,
                            likes: publicReviewData.likes // Ensure the likes array is copied correctly
                        });
                        console.log('ReviewsHubPage: New user review document created for liked review.');
                    }

                } else {
                    console.error('ReviewsHubPage: Error: Review not found by ID in doctor ratings array for liking.', reviewId);
                    showMessage('Failed to process like: Review not found.', 'error');
                }
            } else {
                console.error('ReviewsHubPage: Doctor document not found for liking:', selectedDoctor.id);
                showMessage('Failed to process like: Doctor not found.', 'error');
            }
        } catch (e) {
            console.error("ReviewsHubPage: Error liking/unliking review: ", e);
            showMessage(`Error processing like: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, selectedHospital, selectedDoctor, showMessage, setShowAuthModal]);


    // Mobile review form toggle buttons
    const handleAddReviewMobileClick = useCallback(() => {
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to write a review. Please sign up or log in.', 'error');
            setShowAuthModal(true);
            return;
        }
        setShowReviewSubmissionSection(true); // This state is still useful for mobile button visibility
        setIsShareTeaCollapsed(false); // Ensure review form is expanded
        // Scroll to the review submission section within the doctor reviews display
        if (doctorReviewsDisplaySectionRef.current) {
            const reviewSubmissionElement = doctorReviewsDisplaySectionRef.current.querySelector('#review-submission-form-container'); // Updated ID
            if (reviewSubmissionElement) {
                reviewSubmissionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [currentUserId, currentUserIsAnonymous, showMessage, setShowAuthModal]);

    const handleCancelReviewMobileClick = useCallback(() => {
        setShowReviewSubmissionSection(false);
        setIsShareTeaCollapsed(true); // Collapse the review form
        if (doctorReviewsDisplaySectionRef.current) {
            doctorReviewsDisplaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    // NEW: Handlers for interactive search bar (Nursing Field)
    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setNursingField(query); // Keep nursingField updated with current input

        if (query.length > 0) {
            const filtered = NURSING_FIELDS.filter(field =>
                field.toLowerCase().includes(query.toLowerCase()) && field !== NURSING_FIELDS[0]
            );
            setFilteredNursingFields(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredNursingFields([]);
            setShowSuggestions(false);
            setNursingField(NURSING_FIELDS[0]); // Reset to placeholder if input is empty
        }
    };

    const handleSuggestionClick = (field) => {
        setSearchQuery(field);
        setNursingField(field);
        setShowSuggestions(false);
        setFilteredNursingFields([]);
    };


    return (
        <ErrorBoundary>
            <div className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8 pt-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
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
                            disabled={true} // Disabled as search is dynamic via onChange
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
                            {showAddHospitalForm && currentUserId && !currentUserIsAnonymous ? (
                                'Hide Add Hospital Form'
                            ) : (
                                <>or <span className="text-[#CC5500]">Add Hospital</span></>
                            )}
                        </button>
                        {showAddHospitalForm && (!currentUserId || currentUserIsAnonymous) && (
                             <p className="text-red-600 mt-2 text-center">Please log in or sign up to add a hospital.</p>
                        )}
                        {showAddHospitalForm && currentUserId && !currentUserIsAnonymous && (
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
                    </div>

                    <div className="mb-4 mt-8">
                        <p className="text-lg font-semibold text-gray-800">Hospitals with reviews:</p>
                        <div id="hospitals-list" className="flex flex-wrap gap-2 mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-2" aria-live="polite">
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
                    <h2 className="2xl:text-3xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Select a doctor</h2>
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
                            disabled={true} // Disabled as search is dynamic via onChange
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
                            {showAddDoctorForm && currentUserId && !currentUserIsAnonymous ? (
                                'Hide Add Doctor Form'
                            ) : (
                                <>or <span className="text-[#CC5500]">Add Doctor</span></>
                            )}
                        </button>
                        {showAddDoctorForm && (!currentUserId || currentUserIsAnonymous) && (
                            <p className="text-red-600 mt-2 text-center">Please log in or sign up to add a doctor.</p>
                        )}
                        {showAddDoctorForm && currentUserId && !currentUserIsAnonymous && (
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
                    </div>

                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-800">Doctors with reviews:</p>
                        <div id="doctors-list" className="flex flex-wrap gap-2 mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-2" aria-live="polite">
                            {loadingDoctors && <p className="text-gray-500 italic w-full text-center">Loading doctors...</p>}
                            {noDoctorsFound && !loadingDoctors && <p className="text-gray-500 italic w-full text-center">No doctors found for this hospital yet.</p>}
                            {displayedDoctors.map((doctor) => (
                                <button
                                    key={doctor.id}
                                    data-doctor-name={doctor.name}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-[#CC5500] hover:text-white transition duration-200 btn-hover-scale"
                                    onClick={() => handleDoctorSelect(doctor)}
                                >
                                    {`${doctor.name} (${doctor.specialty || 'N/A'}) - Avg. ${doctor.averageRating.toFixed(1)} ★ (${doctor.numReviews})`}
                                </button>
                            ))}
                        </div>
                        {loadMoreHospitalsVisible && (
                            <button
                                id="load-more-hospitals-btn"
                                className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-200 w-full btn-hover-scale"
                                onClick={handleLoadMoreHospitals} // This still calls hospital load more
                            >
                                Load More Hospitals {/* Should be Load More Doctors if this section is for doctors */}
                            </button>
                        )}
                    </div>
                </section>

                {/* Main content grid for larger screens (Reviews & Write Review) */}
                <section id="doctor-reviews-display" ref={doctorReviewsDisplaySectionRef}
                    className={`bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted ${selectedDoctor ? '' : 'hidden'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Psst...Here's The Tea On <span id="display-selected-doctor-reviews" className="text-[#CC5500] font-extrabold">{(selectedDoctor && selectedDoctor.name) ? selectedDoctor.name : ''}</span></h2>
                    
                    {/* The new clickable element to show the review form */}
                    {(currentUserId && !currentUserIsAnonymous) && isShareTeaCollapsed && (
                        <div className="text-center mb-6">
                            <button
                                onClick={() => {
                                    if (!currentUserId || currentUserIsAnonymous) {
                                        showMessage('Login or Sign Up to share your tea.', 'info');
                                        setShowAuthModal(true);
                                    } else {
                                        setIsShareTeaCollapsed(false); // Only show the form
                                    }
                                }}
                                className="text-gray-600 hover:text-custom-beige font-semibold py-2 px-4 rounded-md transition-colors transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            >
                                Have Some Tea? <span className="text-[#CC5500]">Spill it!</span>
                            </button>
                        </div>
                    )}
                    {(!currentUserId || currentUserIsAnonymous) && isShareTeaCollapsed && (
                        <p className="text-red-600 mt-2 text-center">Please log in or sign up to share your tea.</p>
                    )}


                    {/* The review submission form content, shown only when not collapsed and user is logged in */}
                    {!isShareTeaCollapsed && currentUserId && !currentUserIsAnonymous && (
                        <div id="review-submission-form-container" className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                                    Share Your Tea for <span className="text-[#CC5500]">{selectedDoctor?.name}</span>
                                </h3>
                                <button
                                    onClick={() => setIsShareTeaCollapsed(true)} // Hide the form
                                    className="text-gray-600 hover:text-[#CC5500] transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                            </div>
                            {/* Review form elements */}
                            <div className="mt-4">
                                {/* Removed Star Rating section */}
                                {/* Nursing Field Search Bar with Suggestions */}
                                <div className="mb-4 relative">
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
                                        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                                    />
                                    {showSuggestions && filteredNursingFields.length > 0 && (
                                        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1">
                                            {filteredNursingFields.map((field, index) => (
                                                <li
                                                    key={index}
                                                    className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800"
                                                    onMouseDown={(e) => e.preventDefault()} // Prevent blur when clicking suggestion
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
                                    maxLength={MAX_CHAR_LIMIT} // Enforce max length for review text
                                ></textarea>
                                {/* Submit Review Button - Always visible, but triggers login if not authenticated */}
                                <button
                                    id="submit-review-btn"
                                    className="bg-custom-beige text-gray-800 font-bold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-md w-full btn-hover-scale"
                                    onClick={handleSubmitReview}
                                >
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {loadingReviews && <p className="text-gray-700 italic text-center" aria-live="polite">Loading reviews...</p>}
                    {noReviewsForDoctor && !loadingReviews && <p className="text-gray-700 italic text-center" aria-live="polite">No reviews found for this doctor yet. Be the first to add one!</p>}

                    {reviews.length > 0 && (
                        <div id="reviews-list" className="space-y-6">
                            {reviews.map((review, index) => {
                                const reviewSchema = {
                                    "@context": "https://schema.org",
                                    "@type": "Review",
                                    "itemReviewed": {
                                        "@type": "Physician",
                                        "name": selectedDoctor?.name,
                                        "url": `https://www.myrntea.com/doctors/${selectedDoctor?.id}`
                                    },
                                    // "reviewRating": { // Removed reviewRating from schema
                                    //     "@type": "Rating",
                                    //     "ratingValue": review.stars,
                                    //     "bestRating": 5
                                    // },
                                    "author": {
                                        "@type": "Person",
                                        "name": review.reviewerId
                                    },
                                    "reviewBody": review.comment,
                                    "datePublished": review.date instanceof Date ? review.date.toISOString() : new Date(review.date).toISOString()
                                };

                                const userHasLiked = review.likes && currentUserId && review.likes.includes(currentUserId);

                                return (
                                    <div key={review.id} className="p-5 rounded-xl shadow-lg border border-gray-100" style={{backgroundColor: '#fff8e7'}}>
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-custom-beige rounded-full flex items-center justify-center text-gray-800 font-bold text-lg mr-3 shadow-sm">
                                                {review.reviewerId ? review.reviewerId.charAt(0).toUpperCase() : 'RN'}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{review.reviewerId}</p>
                                                <p className="text-sm text-gray-600">{review.nursingField}</p>
                                                <p className="text-xs text-gray-500">
                                                    {review.date instanceof Date ? review.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                                                </p>
                                            </div>
                                            {/* Removed StarRating display */}
                                            {/* <div className="ml-auto">
                                                <StarRating rating={review.stars} onRatingChange={() => {}} readOnly={true} />
                                            </div> */}
                                        </div>

                                        <p className="text-gray-800 leading-relaxed mb-4 text-base">
                                            {review.comment}
                                        </p>

                                        <div className="flex items-center gap-4 border-t border-gray-100 pt-3 mt-3">
                                            <button
                                                onClick={() => handleLikeReview(review.id)}
                                                className={`flex items-center transition-colors ${userHasLiked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                                Like ({review.likes ? review.likes.length : 0})
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (!currentUserId || currentUserIsAnonymous) {
                                                        showMessage('Login or Sign Up to add a comment.', 'info');
                                                        setShowAuthModal(true);
                                                    } else {
                                                        setShowCommentInput(prev => ({ ...prev, [review.id]: !prev[review.id] }));
                                                    }
                                                }}
                                                className="flex items-center text-gray-600 hover:text-green-500 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                Comment ({review.comments ? review.comments.length : 0})
                                            </button>
                                        </div>

                                        {/* Comments Section */}
                                        <div className="mt-4 border-t border-gray-100 pt-4">
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Comments on this review:</h4> {/* Changed heading for clarity */}
                                            {review.comments && review.comments.length > 0 ? (
                                                <div className="space-y-3">
                                                    {review.comments.map((comment, commentIndex) => (
                                                        <div key={comment.date.getTime() + '_' + commentIndex} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
                                                            <div className="flex items-center mb-1">
                                                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 text-xs font-semibold mr-2">
                                                                    {comment.userId ? comment.userId.charAt(0).toUpperCase() : 'U'}
                                                                </div>
                                                                <p className="font-medium text-gray-800">{comment.userId}</p>
                                                                <p className="text-xs text-gray-500 ml-auto">
                                                                    {comment.date instanceof Date ? comment.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                                                                </p>
                                                            </div>
                                                            <p className="ml-8 text-gray-700">{comment.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-gray-500">No comments on this review yet.</p>
                                            )}
                                            {/* Add Comment Input */}
                                            {showCommentInput[review.id] && currentUserId && !currentUserIsAnonymous && (
                                                <div className="flex mt-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Write a comment..."
                                                        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' && e.target.value.trim()) {
                                                                handleAddCommentToReview(review.id, e.target.value);
                                                                e.target.value = ''; // Clear input after posting
                                                            }
                                                        }}
                                                        value={commentText[review.id] || ''}
                                                        onChange={(e) => setCommentText(prev => ({ ...prev, [review.id]: e.target.value }))}
                                                        maxLength={MAX_CHAR_LIMIT} // Enforce max length for comment text
                                                    />
                                                    <button
                                                        className="submit-comment-btn bg-custom-beige text-gray-800 px-4 py-2 rounded-r-md hover:opacity-90 transition duration-200 btn-hover-scale"
                                                        onClick={() => {
                                                            const valueToPost = commentText[review.id];
                                                            handleAddCommentToReview(review.id, valueToPost);
                                                        }}
                                                    >
                                                        Post
                                                    </button>
                                                </div>
                                            )}
                                            {commentSuccessMessage[review.id] && (
                                                <p className="text-green-600 text-sm mt-2">{commentSuccessMessage[review.id]}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>
        </ErrorBoundary>
    );
};

export default ReviewsHubPage;