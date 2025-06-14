// React hooks are accessed globally when using Babel in the browser (due to React CDNs in index.html)
const { useState, useEffect, useCallback } = React;

// MANDATORY: Firebase configuration and initial auth token provided by the Canvas environment.
// These are globally available variables in the Canvas runtime.
const canvasFirebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// IMPORTANT: Firebase Configuration for Admin Panel
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = canvasFirebaseConfig || {
    // SECURITY IMPROVEMENT:
    // API Key is now retrieved from an environment variable.
    // For local development, create a .env file in your project's root and add:
    // REACT_APP_FIREBASE_API_KEY="YOUR_ACTUAL_FIREBASE_API_KEY_HERE"
    // Remember to add .env to your .gitignore file!
    apiKey: typeof process !== 'undefined' && process.env.REACT_APP_FIREBASE_API_KEY ? process.env.REACT_APP_FIREBASE_API_KEY : "YOUR_FALLBACK_API_KEY_IF_NOT_IN_ENV_OR_CANVAS",
    authDomain: "rntea-cca78.firebaseapp.com",
    projectId: "rntea-cca78",
    storageBucket: "rntea-cca78.firebasestorage.app",
    messagingSenderId: "806310857835",
    appId: "1:806310857835:web:b03b05847c818ee4fe352e",
    measurementId: "G-ZKZBPS9FGE"
};

// For the purpose of this example, we'll derive a consistent 'appId' for Firestore paths.
// Prefer __app_id from Canvas, otherwise fallback to Firebase project ID.
const appIdentifier = typeof __app_id !== 'undefined' ? __app_id : firebaseConfig.projectId;


// Confirmation Modal Component - Displays a modal for confirmation
const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full space-y-4">
                <p className="text-lg font-semibold text-gray-800">{message}</p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

// Message Box Component - Displays transient success/error messages
const MessageBox = ({ message, type }) => {
    if (!message) return null;
    const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
    const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

    return (
        <div className={`p-3 rounded-md ${bgColor} ${textColor} my-4 message-box-fade show`}>
            {message}
        </div>
    );
};

// Main Admin App Component
function App() {
    // State variables for managing UI and data
    const [activeSection, setActiveSection] = useState('hospitals');
    const [hospitals, setHospitals] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);

    // Firebase instances and user ID, stored in component state after initialization
    const [dbInstance, setDbInstance] = useState(null);
    const [authInstance, setAuthInstance] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Tracks if an admin is securely logged in

    // State for login form inputs
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState(''); // Corrected: was missing `= useState('')`

    // NEW State for UI elements
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false); // To toggle add hospital form visibility
    const [hospitalSearchTerm, setHospitalSearchTerm] = useState(''); // For hospital search
    const [doctorSearchTerm, setDoctorSearchTerm] = useState('');     // For doctor search


    // Callback for displaying transient messages (success/error)
    const showMessage = useCallback((text, type) => {
        setMessage({ text, type });
        // Auto-hide message after 5 seconds
        const timer = setTimeout(() => setMessage({ text: '', type: '' }), 5000);
        return () => clearTimeout(timer);
    }, []);

    // Function to check if the authenticated user is an admin
    // This function now RETURNS the admin status
    const checkAdminStatus = useCallback(async (uid, db, auth) => {
        console.log(`[AdminAuthCheck] Initiating admin status check for UID: ${uid}`);
        if (!db || !appIdentifier) {
            console.error("[AdminAuthCheck] Firestore instance or appIdentifier not provided. Cannot check admin status.");
            showMessage('Firebase database not ready for admin check. Please try refreshing.', 'error');
            return false; // Return false on error
        }
        try {
            console.log(`[AdminAuthCheck] Attempting to fetch admin document at path: artifacts/${appIdentifier}/admins/${uid}`);
            // Use doc and getDoc for a single document fetch as per Firestore v9+ best practices
            const adminDocRef = db.collection(`artifacts/${appIdentifier}/admins`).doc(uid);
            const adminDocSnap = await adminDocRef.get();

            if (adminDocSnap.exists) {
                console.log(`[AdminStatus] User ${uid} found in admins collection. Admin access granted.`);
                return true;
            } else {
                console.warn(`[AdminStatus] User ${uid} is authenticated but NOT listed as an admin.`);
                return false;
            }
        } catch (error) {
            console.error("[AdminStatus] Error checking admin status:", error);
            showMessage(`Error verifying admin status: ${error.message}. Please ensure Firestore rules allow read access to 'artifacts/${appIdentifier}/admins/{userId}' for logged-in users.`, 'error');
            return false;
        }
    }, [appIdentifier, showMessage]);


    // Effect 1: Initialize Firebase App and Services, and set up Auth State Listener (runs once)
    useEffect(() => {
        // Only proceed if window.firebase is available and Firebase hasn't been initialized in state yet
        if (window.firebase && !authInstance && !dbInstance) {
            try {
                console.log("[FirebaseInit] Initializing Firebase app and services.");
                const firebaseApp = window.firebase.initializeApp(firebaseConfig);
                const authentication = window.firebase.auth();
                const database = window.firebase.firestore();

                setAuthInstance(authentication);
                setDbInstance(database);
                console.log("[FirebaseInit] Firebase services (Auth, Firestore) initialized and set in state. App Name:", firebaseApp.name);

                // Set up auth state listener immediately after Firebase is initialized
                const unsubscribeAuth = authentication.onAuthStateChanged(async (user) => {
                    console.log("[AuthState] onAuthStateChanged triggered.");
                    if (user) {
                        console.log(`[AuthState] User authenticated with UID: ${user.uid}. Checking admin status.`);
                        setCurrentUserId(user.uid);
                        // Call checkAdminStatus and update isAdminLoggedIn based on its return
                        const isAdmin = await checkAdminStatus(user.uid, database, authentication);
                        setIsAdminLoggedIn(isAdmin); // Set isAdminLoggedIn state
                        setLoading(false); // Stop loading after admin check completes
                        console.log(`[AuthState] isAdminLoggedIn set to: ${isAdmin}. Loading set to false.`);

                        if (!isAdmin) {
                             // If not admin, ensure they are logged out
                            await authentication.signOut();
                            showMessage('Access Denied: Your account is not authorized as an administrator. Logging out...', 'error');
                        }
                    } else {
                        console.log("[AuthState] No user authenticated. Displaying login form.");
                        setCurrentUserId(null);
                        setIsAdminLoggedIn(false);
                        setLoading(false); // Stop loading if no user is authenticated
                        showMessage('Please log in to access the Admin Panel.', 'info');
                    }
                });

                // Attempt automatic sign-in with Canvas token *after* listener is set up
                if (initialAuthToken) {
                    console.log("[FirebaseInit] Attempting sign-in with __initial_auth_token.");
                    authentication.signInWithCustomToken(initialAuthToken)
                        .then(() => console.log("[FirebaseInit] Automatic login attempt resolved."))
                        .catch(tokenError => {
                            console.error("[FirebaseInit] Error signing in with __initial_auth_token:", tokenError);
                            showMessage(`Automatic login failed: ${tokenError.message}. Please try manual login.`, 'error');
                            setLoading(false); // Stop loading if auto-login fails
                        });
                } else if (!authentication.currentUser) {
                    // If no initial token and no current user, ensure loading stops
                    setLoading(false);
                    console.log("[FirebaseInit] No initial token and no current user. Loading set to false.");
                }

                return () => {
                    console.log("[FirebaseInit] Cleaning up Firebase effects. Unsubscribing auth listener.");
                    unsubscribeAuth(); // Clean up the listener when component unmounts
                };

            } catch (error) {
                console.error("[FirebaseInit] Firebase Initialization Error:", error);
                let errorMessage = `Failed to initialize Firebase: ${error.message}.`;
                if (error.code === 'auth/api-key-not-valid') {
                    errorMessage += " Please double-check your Firebase API key in firebaseConfig. It might be incorrect or not enabled for Authentication.";
                }
                setMessage({ text: errorMessage, type: 'error' });
                setLoading(false);
            }
        } else if (!window.firebase) {
            console.warn("[FirebaseInit] window.firebase not available yet. Ensure Firebase SDKs are loaded in index.html.");
            // This warning will show if the script runs before Firebase global is available.
            // React's re-renders might pick it up later if CDNs are slow.
        }
    }, [firebaseConfig, initialAuthToken, showMessage, checkAdminStatus, authInstance, dbInstance]); // Dependencies for this effect

    // Callback for fetching all hospitals from Firestore
    const fetchHospitals = useCallback(async () => {
        // Ensure Firebase is ready and admin is logged in before attempting fetches
        if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) {
            console.warn("[FetchHospitals] Skipping fetch: Firebase not ready, not authenticated, or not admin.");
            return;
        }
        setLoading(true); // Start loading state
        try {
            console.log("[FetchHospitals] Fetching hospitals from Firestore...");
            const hospitalsCollectionRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals`);
            const hospitalDocsSnapshot = await hospitalsCollectionRef.get();
            const fetchedHospitals = hospitalDocsSnapshot.docs.map(document => ({ id: document.id, ...document.data() }));

            setHospitals(fetchedHospitals);
            showMessage('Hospitals loaded successfully!', 'success');
            console.log(`[FetchHospitals] Loaded ${fetchedHospitals.length} hospitals.`);
        } catch (error) {
            console.error("[FetchHospitals] Error fetching hospitals from Firestore:", error);
            showMessage(`Error loading hospitals: ${error.message}`, 'error');
        } finally {
            setLoading(false);
            console.log("[FetchHospitals] Loading set to false after hospital fetch.");
        }
    }, [dbInstance, currentUserId, appIdentifier, isAdminLoggedIn, showMessage]);

    // Effect to trigger fetchHospitals once admin is logged in and DB instance is ready
    useEffect(() => {
        console.log(`[DataFetch Trigger] isAdminLoggedIn: ${isAdminLoggedIn}, dbInstance: ${!!dbInstance}, currentUserId: ${!!currentUserId}`);
        if (isAdminLoggedIn && dbInstance && currentUserId) {
            console.log("[DataFetch] Admin is logged in and DB instance is ready. Initiating hospital fetch.");
            fetchHospitals();
        }
        // Removed the "else if (!loading && !isAdminLoggedIn)" block to prevent premature clearing
    }, [isAdminLoggedIn, dbInstance, currentUserId, fetchHospitals]);


    // Callback for fetching doctors for a specific hospital
    const fetchDoctors = useCallback(async (hospitalId) => {
        console.log(`[FetchDoctors] Called for hospitalId: ${hospitalId}`); // Added log
        if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) {
            showMessage("Authorization required to fetch doctors. Please login.", 'error');
            console.warn("[FetchDoctors] Skipping fetch because not authorized or Firebase not ready."); // Added log
            return;
        }
        setLoading(true);
        try {
            console.log(`[FetchDoctors] Fetching doctors from path: artifacts/${appIdentifier}/public/data/hospitals/${hospitalId}/doctors`); // Added log
            const doctorsColRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${hospitalId}/doctors`);
            const doctorSnapshot = await doctorsColRef.get();
            const fetchedDoctors = doctorSnapshot.docs.map(document => ({ id: document.id, ...document.data() }));
            setDoctors(fetchedDoctors);
            showMessage(`Doctors for ${selectedHospital?.name || 'selected hospital'} loaded successfully!`, 'success');
            console.log(`[FetchDoctors] Loaded ${fetchedDoctors.length} doctors for ${selectedHospital?.name || hospitalId}.`); // Added log
        } catch (error) {
            console.error("[FetchDoctors] Error fetching doctors:", error);
            showMessage(`Error loading doctors: ${error.message}`, 'error');
        } finally {
            setLoading(false);
            console.log("[FetchDoctors] Loading set to false after doctor fetch."); // Added log
        }
    }, [dbInstance, currentUserId, selectedHospital, appIdentifier, isAdminLoggedIn, showMessage]);

    // Callback for fetching reviews for a specific doctor
    const fetchReviews = useCallback(async (hospitalId, doctorId) => {
        if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) {
            showMessage("Authorization required to fetch reviews. Please login.", 'error');
            return;
        }
        setLoading(true);
        try {
            console.log(`[FetchReviews] Fetching reviews for doctor ID: ${doctorId} in hospital ID: ${hospitalId}`);
            const doctorDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${hospitalId}/doctors`).doc(doctorId);
            const doctorSnap = await doctorDocRef.get();
            if (doctorSnap.exists) {
                const doctorData = doctorSnap.data();
                // Ensure comments array is always present, even if empty
                const reviewsWithComments = (doctorData.ratings || []).map(review => ({
                    ...review,
                    comments: review.comments || []
                }));
                setReviews(reviewsWithComments);
                showMessage(`Reviews for ${selectedDoctor?.name || 'selected doctor'} loaded successfully!`, 'success');
                console.log(`[FetchReviews] Loaded ${doctorData.ratings?.length || 0} reviews for ${selectedDoctor?.name || doctorId}.`);
                // NEW: Log the reviews array with comments to debug its structure
                console.log("[FetchReviews] Reviews after processing (with comments field guaranteed):", reviewsWithComments);
            } else {
                setReviews([]);
                showMessage('Doctor not found, no reviews to display.', 'error');
                console.warn(`[FetchReviews] Doctor document ${doctorId} not found.`);
            }
        } catch (error) {
            console.error("[FetchReviews] Error fetching reviews:", error);
            showMessage(`Error loading reviews: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [dbInstance, currentUserId, selectedDoctor, appIdentifier, isAdminLoggedIn, showMessage]);

    // --- Hospital Management Functions ---
    const handleAddHospital = async (e) => {
        e.preventDefault();
        if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) { showMessage("Not authorized. Please login.", 'error'); return; }
        const form = e.target;
        const name = form.name.value.trim();
        const location = form.location.value.trim();
        if (!name || !location) { showMessage("Please fill all fields for hospital.", 'error'); return; }

        setLoading(true);
        try {
            console.log(`[HospitalMgmt] Adding new hospital: ${name}`);
            const newHospitalRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals`).doc();
            await newHospitalRef.set({ name, location });

            // Create and delete a dummy doc in subcollection to ensure it exists for rules
            const dummyDoctorRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${newHospitalRef.id}/doctors`).doc('dummy_placeholder');
            await dummyDoctorRef.set({ _placeholder: true });
            await dummyDoctorRef.delete();

            showMessage('Hospital added successfully!', 'success');
            form.reset();
            fetchHospitals();
        } catch (error) {
            console.error("[HospitalMgmt] Error adding hospital:", error);
            showMessage(`Error adding hospital: ${error.message}. Check Firestore rules for /public/data/hospitals.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleEditHospital = async (id, newName, newLocation) => {
        if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) { showMessage("Not authorized. Please login.", 'error'); return; }
        setLoading(true);
        try {
            console.log(`[HospitalMgmt] Editing hospital ID: ${id}`);
            const hospitalDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals`).doc(id);
            await hospitalDocRef.update({ name: newName.trim(), location: newLocation.trim() });
            showMessage('Hospital updated successfully!', 'success');
            fetchHospitals();
        } catch (error) {
            console.error("[HospitalMgmt] Error updating hospital:", error);
            showMessage(`Error updating hospital: ${error.message}. Check Firestore rules for /public/data/hospitals.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteHospital = (hospitalId) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) { showMessage("Not authorized. Please login.", 'error'); return; }
            setLoading(true);
            try {
                console.log(`[HospitalMgmt] Deleting hospital ID: ${hospitalId} and its doctors.`);
                const doctorsToDeleteSnapshot = await dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${hospitalId}/doctors`).get();
                for (const d of doctorsToDeleteSnapshot.docs) {
                    await d.ref.delete();
                }
                const hospitalDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals`).doc(hospitalId);
                await hospitalDocRef.delete();
                showMessage('Hospital and its doctors deleted successfully!', 'success');
                fetchHospitals();
            } catch (error) {
                console.error("Admin: Error deleting hospital:", error);
                showMessage(`Error deleting hospital: ${error.message}. Check Firestore rules for /public/data/hospitals.`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };

    const handleRemoveDuplicateHospitals = () => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!dbInstance || !currentUserId || !appIdentifier || !isAdminLoggedIn) { showMessage("Not authorized. Please login.", 'error'); return; }
            setLoading(true);
            try {
                console.log("[HospitalMgmt] Initiating duplicate hospital removal.");
                const hospitalsColRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals`);
                const hospitalDocsSnapshot = await hospitalsColRef.get();
                const uniqueHospitalsMap = new Map();
                const duplicatesToDelete = [];

                for (const docSnap of hospitalDocsSnapshot.docs) {
                    const hospitalData = docSnap.data();
                    const compositeKey = `${hospitalData.name.toLowerCase()}|${hospitalData.location.toLowerCase()}`;

                    if (uniqueHospitalsMap.has(compositeKey)) {
                        duplicatesToDelete.push({ id: docSnap.id, ref: docSnap.ref });
                    } else {
                        uniqueHospitalsMap.set(compositeKey, { id: docSnap.id, ref: docSnap.ref });
                    }
                }

                if (duplicatesToDelete.length === 0) {
                    showMessage('No duplicate hospitals found.', 'success');
                    console.log("Admin: No duplicate hospitals found.");
                } else {
                    showMessage(`Found ${duplicatesToDelete.length} duplicate hospitals. Deleting...`, 'info');
                    console.log(`Admin: Found ${duplicatesToDelete.length} duplicate hospitals. Proceeding with deletion.`);
                    for (const duplicate of duplicatesToDelete) {
                        try {
                            const doctorsSubcollectionRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${duplicate.id}/doctors`);
                            const doctorsSnapshot = await doctorsSubcollectionRef.get();
                            for (const doctorDoc of doctorsSnapshot.docs) {
                                await doctorDoc.ref.delete();
                                console.log(`Admin: Deleted doctor ${doctorDoc.id} from duplicate hospital ${duplicate.id}`);
                            }
                            await duplicate.ref.delete();
                            console.log(`Admin: Deleted duplicate hospital: ${duplicate.id}`);
                        } catch (deletionError) {
                            console.error(`Admin: Error deleting duplicate hospital ${duplicate.id}:`, deletionError);
                            showMessage(`Partial success: Could not delete all duplicates. Error with ${duplicate.id}: ${deletionError.message}`, 'error');
                        }
                    }
                    showMessage('Duplicate hospitals and their associated doctors/reviews deleted successfully!', 'success');
                }
                fetchHospitals();
            } catch (error) {
                console.error("Admin: Error identifying/deleting duplicate hospitals:", error);
                showMessage(`Error processing duplicates: ${error.message}`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };


    // --- Doctor Management Functions ---
    const handleAddDoctor = async (e) => {
        e.preventDefault();
        if (!dbInstance || !currentUserId || !appIdentifier || !selectedHospital || !isAdminLoggedIn) { showMessage("Not authorized or hospital not selected.", 'error'); return; }
        const form = e.target;
        const name = form.name.value.trim();
        const specialty = form.specialty.value.trim();
        if (!name || !specialty) { showMessage("Please fill all fields for doctor.", 'error'); return; }

        setLoading(true);
        try {
            console.log(`Admin: Adding new doctor: ${name} to hospital ${selectedHospital.id}`);
            const newDoctorRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${selectedHospital.id}/doctors`).doc();
            await newDoctorRef.set({ name, specialty, ratings: [] });
            showMessage('Doctor added successfully!', 'success');
            form.reset();
            fetchDoctors(selectedHospital.id);
        } catch (error) {
            console.error("Admin: Error adding doctor:", error);
            showMessage(`Error adding doctor: ${error.message}. Check Firestore rules for /public/data/hospitals/{hospitalId}/doctors.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleEditDoctor = async (id, newName, newSpecialty) => {
        if (!dbInstance || !currentUserId || !appIdentifier || !selectedHospital || !isAdminLoggedIn) { showMessage("Not authorized or hospital not selected.", 'error'); return; }
        setLoading(true);
        try {
            console.log(`Admin: Editing doctor ID: ${id} in hospital ${selectedHospital.id}`);
            const doctorDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${selectedHospital.id}/doctors`).doc(id);
            await doctorDocRef.update({ name: newName.trim(), specialty: newSpecialty.trim() });
            showMessage('Doctor updated successfully!', 'success');
            fetchDoctors(selectedHospital.id);
        } catch (error) {
            console.error("Admin: Error updating doctor:", error);
            showMessage(`Error updating doctor: ${error.message}. Check Firestore rules for /public/data/hospitals/{hospitalId}/doctors.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteDoctor = (doctorId) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!dbInstance || !currentUserId || !appIdentifier || !selectedHospital || !isAdminLoggedIn) { showMessage("Not authorized or hospital not selected.", 'error'); return; }
            setLoading(true);
            try {
                console.log(`Admin: Deleting doctor ID: ${doctorId} from hospital ${selectedHospital.id}`);
                const doctorDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${selectedHospital.id}/doctors`).doc(doctorId);
                await doctorDocRef.delete();
                showMessage('Doctor deleted successfully!', 'success');
                fetchDoctors(selectedHospital.id);
            } catch (error) {
                console.error("Admin: Error deleting doctor:", error);
                showMessage(`Error deleting doctor: ${error.message}. Check Firestore rules for /public/data/hospitals/{hospitalId}/doctors.`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };

    // --- Review Management Functions ---
    const handleDeleteReview = (reviewIndex) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!dbInstance || !currentUserId || !appIdentifier || !selectedHospital || !selectedDoctor || !isAdminLoggedIn) { showMessage("Not authorized or doctor/hospital not selected.", 'error'); return; }
            setLoading(true);
            try {
                console.log(`Admin: Deleting review at index ${reviewIndex} for doctor ${selectedDoctor.id}`);
                const doctorDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${selectedHospital.id}/doctors`).doc(selectedDoctor.id);
                const updatedRatings = reviews.filter((_, index) => index !== reviewIndex);
                await doctorDocRef.update({ ratings: updatedRatings });
                showMessage('Review deleted successfully!', 'success');
                fetchReviews(selectedHospital.id, selectedDoctor.id);
            } catch (error) {
                console.error("Admin: Error deleting review:", error);
                showMessage(`Error deleting review: ${error.message}. Check Firestore rules for /public/data/hospitals/{hospitalId}/doctors.`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };

    // NEW: Function to handle deleting a comment from a specific review
    const handleDeleteComment = (reviewIndex, commentIndex) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!dbInstance || !currentUserId || !appIdentifier || !selectedHospital || !selectedDoctor || !isAdminLoggedIn) {
                showMessage("Not authorized or doctor/hospital not selected.", 'error');
                setShowConfirm(false);
                setConfirmAction(null);
                return;
            }
            setLoading(true);
            try {
                console.log(`Admin: Deleting comment at index ${commentIndex} from review at index ${reviewIndex} for doctor ${selectedDoctor.id}`);

                const doctorDocRef = dbInstance.collection(`artifacts/${appIdentifier}/public/data/hospitals/${selectedHospital.id}/doctors`).doc(selectedDoctor.id);
                console.log("[DEBUG] doctorDocRef:", doctorDocRef); // Log the ref
                const doctorSnap = await doctorDocRef.get();

                // Extensive logging of doctorSnap for debugging
                console.log("[DEBUG] doctorSnap (after await):", doctorSnap);
                console.log("[DEBUG] typeof doctorSnap:", typeof doctorSnap);
                console.log("[DEBUG] doctorSnap.exists:", doctorSnap.exists);
                console.log("[DEBUG] typeof doctorSnap.exists:", typeof doctorSnap.exists);

                // FIX: Changed from typeof doctorSnap.exists !== 'function' to direct boolean check
                if (!doctorSnap || !doctorSnap.exists) { // Check if doctorSnap is null/undefined or if it simply doesn't exist
                    showMessage('Doctor not found or data is invalid. Cannot delete comment.', 'error');
                    setLoading(false);
                    setShowConfirm(false);
                    setConfirmAction(null);
                    return;
                }

                const doctorData = doctorSnap.data();
                const currentRatings = doctorData.ratings || [];

                // Deep copy to ensure immutability before modification
                const updatedRatings = JSON.parse(JSON.stringify(currentRatings));

                if (updatedRatings[reviewIndex] && updatedRatings[reviewIndex].comments) {
                    updatedRatings[reviewIndex].comments.splice(commentIndex, 1); // Remove the comment
                } else {
                    showMessage('Review or comment not found.', 'error');
                    setLoading(false);
                    setShowConfirm(false);
                    setConfirmAction(null);
                    return;
                }

                await doctorDocRef.update({ ratings: updatedRatings });
                showMessage('Comment deleted successfully!', 'success');
                fetchReviews(selectedHospital.id, selectedDoctor.id); // Re-fetch reviews to update UI
            } catch (error) {
                console.error("Admin: Error deleting comment:", error);
                showMessage(`Error deleting comment: ${error.message}. Check Firestore rules.`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };

    // Handle Login Submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' }); // Clear previous messages
        try {
            console.log(`[LoginAttempt] Attempting login for: ${loginEmail}`);
            if (authInstance) {
                 const userCredential = await authInstance.signInWithEmailAndPassword(loginEmail, loginPassword);
                 console.log("[LoginAttempt] signInWithEmailAndPassword resolved. User:", userCredential.user.uid);
                 // The onAuthStateChanged listener will now pick this up and check admin status
            } else {
                throw new Error("Firebase Auth not initialized.");
            }
            showMessage('Authenticating...', 'info'); // Provide immediate feedback
        } catch (error) {
            console.error("[LoginAttempt] Login error:", error);
            let errorMessage = "Login failed. Please check your credentials.";
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                errorMessage = "Invalid email or password.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Invalid email format.";
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = "Network error. Check your internet connection.";
            } else if (error.code === 'auth/api-key-not-valid') {
                errorMessage = "Login failed. Your Firebase API key is not valid or not configured for Authentication.";
            }
            setMessage({ text: errorMessage, type: 'error' });
            setLoading(false); // Stop loading if login fails
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        if (!authInstance) return;
        setLoading(true);
        try {
            console.log("Admin: Logging out user.");
            await authInstance.signOut();
            showMessage('Logged out successfully!', 'success');
            // Reset states after logout
            setHospitals([]);
            setDoctors([]);
            setReviews([]);
            setSelectedHospital(null);
            setSelectedDoctor(null);
            setActiveSection('hospitals'); // Go back to default section (which will show login)
            setLoginEmail('');
            setLoginPassword('');
            setIsAdminLoggedIn(false);
        } catch (error) {
            console.error("Admin: Logout error:", error);
            showMessage(`Logout failed: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };


    // Conditional rendering logic based on `isAdminLoggedIn` state
    const renderContent = () => {
        if (loading) {
            return <p className="text-center text-gray-500 py-8">Loading application...</p>;
        }

        if (!isAdminLoggedIn) {
            return (
                <div className="text-center py-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admin Login</h3>
                    <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
                        <input
                            type="email"
                            placeholder="Admin Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Admin Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500"
                            required
                        />
                        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200">Login</button>
                    </form>
                </div>
            );
        }

        switch (activeSection) {
            case 'hospitals':
                // Filter hospitals based on search term
                const filteredHospitals = hospitals.filter(hospital =>
                    hospital.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase()) ||
                    hospital.location.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
                );

                return (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Hospitals ({hospitals.length} Total)</h2>

                        {/* Hospital Search Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search hospitals by name or location..."
                                value={hospitalSearchTerm}
                                onChange={(e) => setHospitalSearchTerm(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"
                            />
                        </div>

                        {/* Collapsible Add New Hospital Section */}
                        <div className="mb-6">
                            <button
                                onClick={() => setShowAddHospitalForm(!showAddHospitalForm)}
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                            >
                                {showAddHospitalForm ? 'Collapse Add Hospital Form' : 'Add New Hospital'}
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${showAddHospitalForm ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {showAddHospitalForm && (
                                <form onSubmit={handleAddHospital} className="space-y-4 mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                                    <input type="text" name="name" placeholder="Hospital Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500" required />
                                    <input type="text" name="location" placeholder="Location (e.g., Boston, MA)" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500" required />
                                    <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200">Add Hospital</button>
                                </form>
                            )}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Existing Hospitals</h3>
                        <button
                            onClick={handleRemoveDuplicateHospitals}
                            className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105"
                        >
                            Remove Duplicate Hospitals
                        </button>
                        {filteredHospitals.length === 0 ? (
                            <p className="text-gray-500">No hospitals found matching your search or none added yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {filteredHospitals.map(hospital => (
                                    <div key={hospital.id} className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{hospital.name}</p>
                                            <p className="text-sm">{hospital.location}</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => { setSelectedHospital(hospital); setActiveSection('doctors'); fetchDoctors(hospital.id); }}
                                                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                                            >
                                                Manage Doctors
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const newName = prompt("Enter new hospital name:", hospital.name);
                                                    const newLocation = prompt("Enter new hospital location:", hospital.location);
                                                    if (newName !== null && newLocation !== null) {
                                                        handleEditHospital(hospital.id, newName, newLocation);
                                                    }
                                                }}
                                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteHospital(hospital.id)}
                                                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'doctors':
                // Filter doctors based on search term
                const filteredDoctors = doctors.filter(doctor =>
                    doctor.name.toLowerCase().includes(doctorSearchTerm.toLowerCase()) ||
                    doctor.specialty.toLowerCase().includes(doctorSearchTerm.toLowerCase())
                );

                return (
                    <div>
                        <button
                            onClick={() => { setActiveSection('hospitals'); setSelectedHospital(null); setDoctors([]); setDoctorSearchTerm(''); }}
                            className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                        >
                            &larr; Back to Hospitals
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">
                            Doctors at {selectedHospital?.name} ({doctors.length} Total)
                        </h2>

                        {/* Doctor Search Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search doctors by name or specialty..."
                                value={doctorSearchTerm}
                                onChange={(e) => setDoctorSearchTerm(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Add New Doctor</h3>
                        <form onSubmit={handleAddDoctor} className="space-y-4 mb-8">
                            <input type="text" name="name" placeholder="Doctor Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500" required />
                            <input type="text" name="specialty" placeholder="Specialty (e.g., Cardiologist)" className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500" required />
                            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200">Add Doctor</button>
                        </form>

                        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Existing Doctors</h3>
                        {filteredDoctors.length === 0 ? (
                            <p className="text-gray-500">No doctors found matching your search or none added for this hospital yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {filteredDoctors.map(doctor => (
                                    <div key={doctor.id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-gray-800">{doctor.name}</p>
                                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                                            <p className="text-xs text-gray-500">
                                                {doctor.ratings && doctor.ratings.length > 0 ? `${doctor.ratings.length} reviews` : 'No reviews'}
                                            </p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => { setSelectedDoctor(doctor); setActiveSection('reviews'); fetchReviews(selectedHospital.id, doctor.id); }}
                                                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                                            >
                                                Manage Reviews
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const newName = prompt("Enter new doctor name:", doctor.name);
                                                    const newSpecialty = prompt("Enter new doctor specialty:", doctor.specialty);
                                                    if (newName !== null && newSpecialty !== null) {
                                                        handleEditDoctor(doctor.id, newName, newSpecialty);
                                                    }
                                                }}
                                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDoctor(doctor.id)}
                                                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'reviews':
                return (
                    <div>
                        <button
                            onClick={() => { setActiveSection('doctors'); setSelectedDoctor(null); setReviews([]); }}
                            className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                        >
                            &larr; Back to Doctors
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">
                            Reviews for {selectedDoctor?.name}
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Existing Reviews</h3>
                        {reviews.length === 0 ? (
                            <p className="text-gray-500">No reviews found for this doctor.</p>
                        ) : (
                            <div className="space-y-3">
                                {reviews.map((review, reviewIndex) => ( // Changed 'index' to 'reviewIndex' for clarity
                                    <div key={reviewIndex} className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col justify-between items-start">
                                        <div className="w-full flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-800">Rating: {review.stars} stars</p>
                                                <p className="text-sm text-gray-600 italic">"{review.comment || 'No comment provided'}"</p>
                                                <p className="text-xs text-gray-500 mt-1">Date: {review.date || 'N/A'} (Reviewer: {review.reviewerId || 'Unknown'})
                                                {/* NEW: Display comments count if available */}
                                                {review.comments && review.comments.length > 0 && (
                                                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                        {review.comments.length} Comment{review.comments.length > 1 ? 's' : ''}
                                                    </span>
                                                )}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteReview(reviewIndex)}
                                                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors ml-4"
                                            >
                                                Delete Review
                                            </button>
                                        </div>

                                        {/* Display Comments */}
                                        {review.comments && review.comments.length > 0 && (
                                            <div className="w-full mt-4 pt-4 border-t border-gray-200 space-y-2">
                                                <p className="font-semibold text-gray-700 text-sm">Comments:</p>
                                                {review.comments.map((comment, commentIndex) => (
                                                    <div key={commentIndex} className="bg-gray-100 p-3 rounded-md flex justify-between items-start text-sm">
                                                        <div>
                                                            <p className="text-gray-800">{comment.text}</p>
                                                            <p className="text-xs text-gray-500 mt-1">Date: {comment.date || 'N/A'} (Commenter: {comment.userId || 'Unknown'})</p>
                                                        </div>
                                                        <button
                                                            onClick={() => handleDeleteComment(reviewIndex, commentIndex)}
                                                            className="px-2 py-1 bg-red-400 text-white text-xs rounded-md hover:bg-red-500 transition-colors ml-4"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            default:
                return <p className="text-center text-gray-500 py-8">Select a section from the navigation.</p>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-4 shadow-lg">
                <div className="container flex items-center justify-between">
                    <h1 className="text-3xl font-bold rounded-lg px-3 py-1 bg-white text-purple-800 shadow-md">RNTea Admin</h1>
                    {/* Logout button moved here, outside <nav> but still in header */}
                    {isAdminLoggedIn && (
                        <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors">Logout</button>
                    )}
                </div>
            </header>

            <main className="flex-grow container py-8">
                <MessageBox message={message.text} type={message.type} />
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    {renderContent()}
                </div>
            </main>

            <ConfirmModal
                isOpen={showConfirm}
                message="Are you sure you want to delete this item? This action cannot be undone."
                onConfirm={() => confirmAction()}
                onCancel={() => { setShowConfirm(false); setConfirmAction(null); }}
            />
        </div>
    );
}

// Mount the React app to the 'root' div defined in index.html
// This will only run once the DOM is ready due to the script being at the end of <body>
const rootElement = document.getElementById('root');
if (rootElement) {
    console.log("Attempting to mount React App..."); // Added log
    ReactDOM.createRoot(rootElement).render(<App />);
    console.log("React App mounted successfully.");
} else {
    console.error("Root element not found in DOM.");
}
