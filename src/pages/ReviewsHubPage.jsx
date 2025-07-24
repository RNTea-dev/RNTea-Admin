import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App.jsx'; // Assuming FirebaseContext is correctly provided by App.jsx
import MessageBox from '../components/MessageBox.jsx';
import AuthModal from '../components/AuthModal.jsx';

// Firebase imports specific to this component (only what's needed for operations, not initialization)
import {
    collection,
    doc,
    updateDoc,
    getDoc,
    onSnapshot,
    setDoc,
    addDoc, // Added addDoc for creating new documents in subcollections
    deleteDoc, // Added deleteDoc for removing likes
    query, // Added query for fetching subcollections
    getDocs, // Added getDocs for one-time fetches (e.g., calculating average rating)
    runTransaction // Added runTransaction for atomic updates
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
                <div className="flex flex-col items-center justify-center min-h-[calc(10vh-120px)] p-4 bg-red-100 text-red-800 rounded-lg shadow-md">
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
    // Removed starRating state
    const [nursingField, setNursingField] = useState(NURSING_FIELDS[0]); // State for selected nursing field
    const [searchQuery, setSearchQuery] = useState(''); // NEW: State for search input
    const [filteredNursingFields, setFilteredNursingFields] = useState([]); // NEW: State for filtered suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // NEW: State to control suggestion visibility

    const [showCommentInput, setShowCommentInput] = useState({}); // Corrected: Initialized with useState({})
    const [commentText, setCommentText] = useState({});
    const [commentSuccessMessage, setCommentSuccessMessage] = useState({}); // Re-introduced for temporary success message - CORRECTED

    // NEW STATES for Add Hospital/Doctor forms
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [newHospitalName, setNewHospitalName] = useState('');
    const [newHospitalLocation, setNewHospitalLocation] = '';

    const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
    const [newDoctorName, setNewDoctorName] = useState('');
    const [newDoctorSpecialty, setNewDoctorSpecialty] = useState('');

    // State to manage the collapsed "Share Some Tea" section
    const [isShareTeaCollapsed, setIsShareTeaCollapsed] = useState(true);

    // Refs for scrolling
    const doctorSelectionSectionRef = React.useRef(null);
    const doctorReviewsDisplaySectionRef = React.useRef(null);
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

    // --- Doctor Management ---
    const handleHospitalSelect = useCallback(async (hospital) => { // Made async to allow await inside
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
        setSelectedDoctor(null); // Clear selected doctor when new hospital is selected

        if (!db || !appId || !hospital.id) {
             showMessage("Firebase or hospital ID missing for fetching doctors.", "error");
             setLoadingDoctors(false);
             setNoDoctorsFound(true);
             return;
        }

        // Fetch doctors from the subcollection
        const doctorsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${hospital.id}/doctors`);
        const unsubscribeDoctors = onSnapshot(doctorsColRef, async (querySnapshot) => { // Made onSnapshot callback async
            console.log("ReviewsHubPage: onSnapshot triggered for doctors.");
            const fetchedDoctorsPromises = querySnapshot.docs.map(async (docRef) => {
                const data = docRef.data();
                const doctorId = docRef.id;
                let numReviews = 0; // Default to 0

                if (data.name) {
                    try {
                        // Fetch the actual number of reviews from the subcollection
                        // This ensures the displayed count is accurate, even if the 'numReviews' field
                        // on the doctor document isn't updated due to security rules for non-admin users.
                        const reviewsSnapshot = await getDocs(collection(db, `artifacts/${appId}/public/data/hospitals/${hospital.id}/doctors/${doctorId}/reviews`));
                        numReviews = reviewsSnapshot.docs.length;
                    } catch (error) {
                        console.error(`ReviewsHubPage: Error fetching reviews count for doctor ${doctorId}:`, error);
                        // numReviews will remain 0 if there's an error fetching the subcollection
                    }

                    return {
                        id: doctorId,
                        hospitalId: hospital.id,
                        ...data,
                        averageRating: data.averageRating || 0,
                        numReviews: numReviews, // Use dynamically calculated count
                        numComments: data.numComments || 0 // Keep numComments from doc for now, or calculate similarly if needed
                    };
                }
                return null; // Return null for invalid doctor documents
            });

            // Wait for all review counts to be fetched for all doctors
            const fetchedDoctors = (await Promise.all(fetchedDoctorsPromises)).filter(Boolean); // Filter out any nulls

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
            console.error("ReviewsHubPage: Error fetching doctors with onSnapshot (outer listener):", error);
            showMessage('Error loading doctors.', 'error');
            setLoadingDoctors(false);
            setNoDoctorsFound(true);
        });

        // Return the unsubscribe function for cleanup
        return () => {
            console.log("ReviewsHubPage: Cleaning up doctor onSnapshot listener for previous hospital.");
            unsubscribeDoctors();
        };

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
                averageRating: 0, // Initialize with 0
                numReviews: 0, // Initialize with 0
                numComments: 0 // Initialize with 0
            };
            // Optimistic UI update
            setDoctors(prevDoctors => [...prevDoctors, newDoctor].sort((a, b) => a.name.localeCompare(b.name)));
            setNewDoctorName('');
            setNewDoctorSpecialty('');
            setShowAddDoctorForm(false);

            // Add doctor to the subcollection
            const newDoctorRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`));
            await setDoc(newDoctorRef, {
                name: newDoctor.name,
                specialty: newDoctor.specialty,
                createdAt: new Date().toISOString(),
                createdBy: currentUserId,
                averageRating: 0, // Initialize on creation
                numReviews: 0,    // Initialize on creation
                numComments: 0    // Initialize on creation
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


    // --- Review Management ---
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

    // New useEffect for managing the onSnapshot listener for reviews
    useEffect(() => {
        let unsubscribeReviews = () => {};
        const unsubscribeComments = {}; // To store unsubscribe functions for comments
        const unsubscribeLikes = {}; // To store unsubscribe functions for likes

        if (selectedDoctor && db && appId) {
            const reviewsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedDoctor.hospitalId}/doctors/${selectedDoctor.id}/reviews`);
            console.log("ReviewsHubPage: Setting up onSnapshot for reviewsColRef:", reviewsColRef.path);

            unsubscribeReviews = onSnapshot(reviewsColRef, (querySnapshot) => {
                console.log("ReviewsHubPage: onSnapshot triggered for reviewsColRef.");
                setLoadingReviews(false);
                const fetchedReviews = [];
                const newUnsubscribeComments = {};
                const newUnsubscribeLikes = {};

                querySnapshot.forEach((reviewDoc) => {
                    const reviewData = reviewDoc.data();
                    const reviewId = reviewDoc.id;

                    // Set up onSnapshot for comments subcollection
                    const commentsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedDoctor.hospitalId}/doctors/${selectedDoctor.id}/reviews/${reviewId}/comments`);
                    newUnsubscribeComments[reviewId] = onSnapshot(commentsColRef, (commentsSnapshot) => {
                        const comments = commentsSnapshot.docs.map(commentDoc => ({
                            id: commentDoc.id,
                            ...commentDoc.data(),
                            date: commentDoc.data().date && typeof commentDoc.data().date.toDate === 'function' ? commentDoc.data().date.toDate() : new Date(commentDoc.data().date)
                        }));

                        // Update the specific review in the reviews state with new comments
                        setReviews(prevReviews => {
                            const updatedReviews = prevReviews.map(r =>
                                r.id === reviewId ? { ...r, comments: comments } : r
                            );
                            // If the review is new and not yet in state, add it (edge case for initial load)
                            if (!updatedReviews.some(r => r.id === reviewId)) {
                                // Find the original review data if it exists in the snapshot, otherwise use a minimal structure
                                const originalReview = querySnapshot.docs.find(doc => doc.id === reviewId)?.data() || reviewData;
                                return [...updatedReviews, { ...originalReview, id: reviewId, comments, likes: [] }].sort((a, b) => (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0));
                            }
                            return updatedReviews;
                        });
                    });

                    // Set up onSnapshot for likes subcollection
                    const likesColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedDoctor.hospitalId}/doctors/${selectedDoctor.id}/reviews/${reviewId}/likes`);
                    newUnsubscribeLikes[reviewId] = onSnapshot(likesColRef, (likesSnapshot) => {
                        const likes = likesSnapshot.docs.map(likeDoc => likeDoc.id); // Store just the userId as the like document ID

                        // Update the specific review in the reviews state with new likes
                        setReviews(prevReviews => {
                            const updatedReviews = prevReviews.map(r =>
                                r.id === reviewId ? { ...r, likes: likes } : r
                            );
                            // If the review is new and not yet in state, add it (edge case for initial load)
                            if (!updatedReviews.some(r => r.id === reviewId)) {
                                // Find the original review data if it exists in the snapshot, otherwise use a minimal structure
                                const originalReview = querySnapshot.docs.find(doc => doc.id === reviewId)?.data() || reviewData;
                                return [...updatedReviews, { ...originalReview, id: reviewId, comments: [], likes }].sort((a, b) => (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0));
                            }
                            return updatedReviews;
                        });
                    });

                    // Add initial review data to fetchedReviews array (comments and likes will be updated by their own listeners)
                    fetchedReviews.push({
                        id: reviewId,
                        ...reviewData,
                        date: reviewData.date && typeof reviewData.date.toDate === 'function' ? reviewData.date.toDate() : new Date(reviewData.date),
                        comments: [], // Initialize empty, will be populated by comments onSnapshot
                        likes: [] // Initialize empty, will be populated by likes onSnapshot
                    });
                });

                // Clean up old listeners that are no longer needed
                Object.keys(unsubscribeComments).forEach(id => {
                    if (!newUnsubscribeComments[id]) {
                        unsubscribeComments[id]();
                    }
                });
                Object.keys(unsubscribeLikes).forEach(id => {
                    if (!newUnsubscribeLikes[id]) {
                        unsubscribeLikes[id]();
                    }
                });
                // Update the current unsubscribe objects
                Object.assign(unsubscribeComments, newUnsubscribeComments);
                Object.assign(unsubscribeLikes, newUnsubscribeLikes);


                fetchedReviews.sort((a, b) => {
                    const dateA = a.date ? a.date.getTime() : 0;
                    const dateB = b.date ? b.date.getTime() : 0;
                    return dateB - dateA; // Sort descending (newest first)
                });

                setReviews(fetchedReviews); // Set initial reviews without comments/likes
                setNoReviewsForDoctor(fetchedReviews.length === 0);
                console.log("ReviewsHubPage: Reviews state updated. Current reviews count:", fetchedReviews.length);

            }, (error) => {
                console.error("ReviewsHubPage: Error fetching reviews with onSnapshot:", error);
                showMessage('Error loading reviews.', 'error');
                setLoadingReviews(false);
                setNoReviewsForDoctor(true);
            });
        } else {
            setReviews([]);
            setNoReviewsForDoctor(false);
            setLoadingReviews(false);
        }

        return () => {
            console.log("ReviewsHubPage: Cleaning up reviews onSnapshot listener.");
            unsubscribeReviews();
            Object.values(unsubscribeComments).forEach(unsub => unsub());
            Object.values(unsubscribeLikes).forEach(unsub => unsub());
        };
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
        // Removed starRating validation

        const contentCheck = filterContent(reviewText);
        if (!contentCheck.isValid) {
            showMessage(contentCheck.message, 'error');
            return;
        }

        // Log the current user's display name before submission
        console.log("ReviewsHubPage: auth.currentUser?.displayName at submission:", auth.currentUser?.displayName);

        try {
            // Reference to the reviews subcollection of the selected doctor
            const reviewsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}/reviews`);
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);

            const newReviewData = {
                stars: 0, // Default to 0 stars as per user request to remove star rating input
                comment: reviewText,
                // CORRECTED: Use currentUserId (UID) for security rules match
                reviewerId: currentUserId,
                reviewerDisplayName: auth.currentUser?.displayName || `RN-${currentUserId.substring(0, 5)}`, // Store display name separately for UI
                date: new Date(), // Firestore Timestamp will handle this automatically
                nursingField: nursingField,
                hospitalId: selectedHospital.id, // Store references for easier querying
                doctorId: selectedDoctor.id,
            };
            console.log("ReviewsHubPage: Submitting new review data:", newReviewData);

            await runTransaction(db, async (transaction) => {
                // Add the new review document to the reviews subcollection
                const docRef = doc(reviewsColRef); // Create a new doc ref with an auto-generated ID
                transaction.set(docRef, newReviewData);
                const newReviewId = docRef.id;

                // Store a copy of the review in the user's private collection
                const userReviewRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${newReviewId}`);
                transaction.set(userReviewRef, {
                    ...newReviewData,
                    id: newReviewId, // Include the ID for the private copy
                    userId: currentUserId, // Explicitly use currentUserId for security rule match
                });

                // Update the doctor's review counts and average rating
                // IMPORTANT: This update will only succeed if the current user is an admin,
                // as per your Firestore security rules (`allow update: if isAdmin()`).
                // For non-admin users, this part of the transaction will fail silently due to permissions,
                // meaning `numReviews` and `averageRating` on the doctor document will not be updated by client-side writes.
                // For a robust, scalable, and reliable solution, these aggregated fields should be updated
                // by a Firebase Cloud Function triggered by review additions/deletions.
                const doctorSnap = await transaction.get(doctorDocRef);
                if (doctorSnap.exists()) {
                    const doctorData = doctorSnap.data();
                    const currentNumReviews = doctorData.numReviews || 0;
                    const currentTotalStars = (doctorData.averageRating || 0) * currentNumReviews; // Reconstruct total stars

                    const updatedNumReviews = currentNumReviews + 1;
                    const updatedTotalStars = currentTotalStars + newReviewData.stars;
                    const updatedAverageRating = updatedNumReviews > 0 ? (updatedTotalStars / updatedNumReviews) : 0;

                    transaction.update(doctorDocRef, {
                        numReviews: updatedNumReviews,
                        averageRating: updatedAverageRating,
                    });
                } else {
                    console.warn("ReviewsHubPage: Doctor document not found for updating review counts.");
                    // If doctor doc doesn't exist, it might be a new doctor added recently but not yet propagated.
                    // For now, we'll proceed without updating counts, but in a real app, you might want to create it or handle this edge case.
                }
            });

            setReviewText('');
            // Removed starRating reset
            setNursingField(NURSING_FIELDS[0]);
            setSearchQuery('');
            showMessage('Review submitted successfully!', 'success');
            console.log('ReviewsHubPage: Review submitted successfully!');
            setIsShareTeaCollapsed(true); // Collapse the review form after submission
        } catch (e) {
            console.error("ReviewsHubPage: Error adding review: ", e);
            showMessage(`Error submitting review: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, selectedHospital, selectedDoctor, reviewText, nursingField, db, appId, showMessage, setShowAuthModal, auth]);

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
            // Reference to the comments subcollection of the specific review
            const commentsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}/reviews/${reviewId}/comments`);
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}`);

            const newCommentData = {
                text: commentTextValue,
                // CORRECTED: Use currentUserId (UID) for security rules match
                userId: currentUserId,
                userDisplayName: auth.currentUser?.displayName || `RN-${currentUserId.substring(0, 5)}`, // Store display name separately for UI
                date: new Date(),
            };

            await runTransaction(db, async (transaction) => {
                // Add the new comment document to the comments subcollection
                const commentDocRef = doc(commentsColRef);
                transaction.set(commentDocRef, newCommentData);
                const newCommentId = commentDocRef.id;

                // Update the user's private copy of the review with the new comment
                const userReviewDocRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}`);
                const userReviewSnap = await transaction.get(userReviewDocRef);

                if (!userReviewSnap.exists()) {
                    // If the private review document doesn't exist, create a minimal one
                    const publicReviewDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}/reviews/${reviewId}`);
                    const publicReviewSnap = await transaction.get(publicReviewDocRef);
                    if (publicReviewSnap.exists()) {
                        transaction.set(userReviewDocRef, {
                            ...publicReviewSnap.data(),
                            id: reviewId,
                            userId: currentUserId,
                            hospitalId: selectedHospital.id,
                            doctorId: selectedDoctor.id,
                            comments: [],
                            likes: []
                        });
                    }
                }
                const userReviewCommentsColRef = collection(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}/comments`);
                transaction.set(doc(userReviewCommentsColRef, newCommentId), newCommentData);

                // Increment numComments on the doctor document
                // IMPORTANT: Similar to numReviews, this update will only succeed if the current user is an admin,
                // as per your Firestore security rules (`allow update: if isAdmin()`).
                // For non-admin users, this part of the transaction will fail silently due to permissions.
                // For a robust, scalable, and reliable solution, these aggregated fields should be updated
                // by a Firebase Cloud Function triggered by comment additions/deletions.
                const doctorSnap = await transaction.get(doctorDocRef);
                if (doctorSnap.exists()) {
                    const doctorData = doctorSnap.data();
                    const currentNumComments = doctorData.numComments || 0;
                    transaction.update(doctorDocRef, {
                        numComments: currentNumComments + 1,
                    });
                } else {
                    console.warn("ReviewsHubPage: Doctor document not found for updating comment counts.");
                }
            });

            // Clear the comment input for the specific review
            setCommentText(prev => ({ ...prev, [reviewId]: '' }));
            // Show temporary success message
            setCommentSuccessMessage(prev => ({ ...prev, [reviewId]: 'Comment posted successfully!' }));

            setTimeout(() => {
                setShowCommentInput(prev => ({ ...prev, [reviewId]: false }));
                setCommentSuccessMessage(prev => ({ ...prev, [reviewId]: '' })); // Clear message after input hides
            }, 1500); // Adjust delay as needed (e.g., 1500ms for 1.5 seconds)

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
            // Reference to the specific like document (using userId as the ID)
            const publicLikeDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors/${selectedDoctor.id}/reviews/${reviewId}/likes/${currentUserId}`);
            const privateLikeDocRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}/likes/${currentUserId}`);

            await runTransaction(db, async (transaction) => {
                const publicLikeSnap = await transaction.get(publicLikeDocRef);

                if (publicLikeSnap.exists()) {
                    // User has already liked, so unlike (delete the like document from public and private)
                    transaction.delete(publicLikeDocRef);
                    transaction.delete(privateLikeDocRef); // Ensure private copy is also removed
                    showMessage('Review unliked.', 'info');
                } else {
                    // User has not liked, so like (create the like document in public and private)
                    transaction.set(publicLikeDocRef, {
                        timestamp: new Date(),
                    });
                    transaction.set(privateLikeDocRef, { // Create private copy
                        timestamp: new Date(),
                    });
                    showMessage('Review liked!', 'success');
                }
            });

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

    // Removed renderStarRating helper function


    return (
        <ErrorBoundary>
            <div className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8 pt-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Share Your RN<span className="text-[#CC5500]">Tea</span>!</h1>

                {/* Hospital Selection Section */}
                <section id="hospital-selection-section" className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Find Your Hospital</h2>
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
                    <h2 className="2xl:text-3xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Select A Doctor</h2>
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
                                    {/* Display numReviews from the doctor document, assuming it's correctly aggregated by a server-side process. */}
                                    {`${doctor.name} (${doctor.numReviews})`}
                                </button>
                            ))}
                        </div>
                        {/* Removed Load More Hospitals button from here as it's not relevant for doctors display */}
                    </div>
                </section>

                {/* Main content grid for larger screens (Reviews & Write Review) */}
                <section id="doctor-reviews-display" ref={doctorReviewsDisplaySectionRef}
                    className={`bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8 section-hover scroll-margin-top-adjusted ${selectedDoctor ? '' : 'hidden'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Psst... Here's The Tea On <span id="display-selected-doctor-reviews" className="text-[#CC5500] font-extrabold">{(selectedDoctor && selectedDoctor.name) ? selectedDoctor.name : ''}</span></h2>

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
                                {/* Removed Star Rating Input */}
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
                    {noReviewsForDoctor && !loadingReviews && <p className="text-gray-700 italic text-center" aria="polite">No reviews found for this doctor yet. Be the first to add one!</p>}

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
                                    "author": {
                                        "@type": "Person",
                                        "name": review.reviewerDisplayName // Use reviewerDisplayName for schema
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
                                                {review.reviewerDisplayName ? review.reviewerDisplayName.charAt(0).toUpperCase() : 'RN'}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{review.reviewerDisplayName}</p>
                                                <p className="text-sm text-gray-600">{review.nursingField}</p>
                                                <p className="text-xs text-gray-500">
                                                    {review.date instanceof Date ? review.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-gray-800 leading-relaxed mb-4 text-base">
                                            {review.comment}
                                        </p>

                                        {/* Removed Display the star rating of the review */}

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
                                                        <div key={comment.id || (comment.date.getTime() + '_' + commentIndex)} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
                                                            <div className="flex items-center mb-1">
                                                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 text-xs font-semibold mr-2">
                                                                    {comment.userDisplayName ? comment.userDisplayName.charAt(0).toUpperCase() : 'U'}
                                                                </div>
                                                                <p className="font-medium text-gray-800">{comment.userDisplayName}</p>
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
