// src/pages/AdminPanel.jsx

import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FirebaseContext } from '../App.jsx'; // Import FirebaseContext from the new main App.jsx
import MessageBox from '../components/MessageBox.jsx'; // Ensure MessageBox is imported with .jsx extension
import ConfirmModal from '../components/ConfirmModal.jsx'; // Import ConfirmModal with .jsx extension

// AdminPanel now consumes FirebaseContext for all its Firebase operations
const AdminPanel = () => {
    const {
        db,
        auth, // auth is needed for signInWithEmailAndPassword, signOut
        userId,
        appId,
        loadingFirebase, // This indicates if Firebase is globally initialized
        showMessage,
        // message is no longer directly accessed from context, as showMessage handles it
        collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, arrayUnion
    } = useContext(FirebaseContext);

    // Local state variables for managing UI and data within the Admin Panel
    const [activeSection, setActiveSection] = useState('hospitals');
    const [hospitals, setHospitals] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [loading, setLoading] = useState(false); // Local loading for admin panel operations
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null);

    // State for login form inputs
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Admin login status for this panel

    // State for UI elements
    const [showAddHospitalForm, setShowAddHospitalForm] = useState(false);
    const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
    const [doctorSearchTerm, setDoctorSearchTerm] = useState('');


    // Function to check if the authenticated user is an admin
    const checkAdminStatus = useCallback(async (uid, dbInstance) => {
        if (!dbInstance || !appId) {
            console.error("[AdminAuthCheck] Firestore instance or appId not provided. Cannot check admin status.");
            return false;
        }
        try {
            const adminDocRef = doc(dbInstance, `artifacts/${appId}/admins`, uid);
            const adminDocSnap = await getDoc(adminDocRef);
            return adminDocSnap.exists();
        } catch (error) {
            console.error("[AdminStatus] Error checking admin status:", error);
            if (showMessage) showMessage(`Error verifying admin status: ${error.message}.`, 'error');
            return false;
        }
    }, [appId, doc, getDoc, showMessage]);

    // Effect to check admin status on auth state change (from main App.jsx)
    useEffect(() => {
        if (auth && db && userId && !loadingFirebase) {
            // Check admin status when the global userId from context becomes available
            checkAdminStatus(userId, db).then(isAdmin => {
                setIsAdminLoggedIn(isAdmin);
                if (!isAdmin) {
                    if (showMessage) showMessage('Access Denied: Not authorized as an administrator.', 'error');
                } else {
                    // If admin, proceed to fetch hospitals
                    fetchHospitals();
                }
            });
        }
    }, [auth, db, userId, loadingFirebase, checkAdminStatus, fetchHospitals, showMessage]);


    // Callback for fetching all hospitals from Firestore
    const fetchHospitals = useCallback(async () => {
        // Only fetch if Firebase is ready and admin is logged in
        if (!db || !appId || !isAdminLoggedIn) {
            return;
        }
        setLoading(true); // Start loading state
        try {
            const hospitalsCollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals`);
            const hospitalDocsSnapshot = await getDocs(hospitalsCollectionRef);
            const fetchedHospitals = hospitalDocsSnapshot.docs.map(document => ({ id: document.id, ...document.data() }));
            setHospitals(fetchedHospitals);
            if (showMessage) showMessage('Hospitals loaded successfully!', 'success');
        } catch (error) {
            console.error("Error fetching hospitals from Firestore:", error);
            if (showMessage) showMessage(`Error loading hospitals: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, appId, collection, getDocs, isAdminLoggedIn, showMessage]);


    // Callback for fetching doctors for a specific hospital
    const fetchDoctors = useCallback(async (hospitalId) => {
        if (!db || !appId || !isAdminLoggedIn) {
            if (showMessage) showMessage("Authorization required to fetch doctors. Please login.", 'error');
            return;
        }
        setLoading(true);
        try {
            const doctorsColRef = collection(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors`);
            const doctorSnapshot = await getDocs(doctorsColRef);
            const fetchedDoctors = doctorSnapshot.docs.map(document => ({ id: document.id, ...document.data() }));
            setDoctors(fetchedDoctors);
            if (showMessage) showMessage(`Doctors for ${selectedHospital?.name || 'selected hospital'} loaded successfully!`, 'success');
        } catch (error) {
            console.error("Error fetching doctors:", error);
            if (showMessage) showMessage(`Error loading doctors: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, appId, collection, getDocs, isAdminLoggedIn, selectedHospital, showMessage]);

    // Callback for fetching reviews for a specific doctor
    const fetchReviews = useCallback(async (hospitalId, doctorId) => {
        if (!db || !appId || !isAdminLoggedIn) {
            if (showMessage) showMessage("Authorization required to fetch reviews. Please login.", 'error');
            return;
        }
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
                if (showMessage) showMessage(`Reviews for ${selectedDoctor?.name || 'selected doctor'} loaded successfully!`, 'success');
            } else {
                setReviews([]);
                if (showMessage) showMessage('Doctor not found, no reviews to display.', 'error');
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
            if (showMessage) showMessage(`Error loading reviews: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    }, [db, appId, doc, getDoc, isAdminLoggedIn, selectedDoctor, showMessage]);


    // --- Hospital Management Functions ---
    const handleAddHospital = async (e) => {
        e.preventDefault();
        if (!db || !appId || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized. Please login.", 'error'); return; }
        const form = e.target;
        const name = form.name.value.trim();
        const location = form.location.value.trim();
        if (!name || !location) { if (showMessage) showMessage("Please fill all fields for hospital.", 'error'); return; }

        setLoading(true);
        try {
            const newHospitalRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals`));
            await setDoc(newHospitalRef, { name, location });

            const dummyDoctorRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals/${newHospitalRef.id}/doctors`), 'dummy_placeholder');
            await setDoc(dummyDoctorRef, { _placeholder: true });
            await deleteDoc(dummyDoctorRef);

            if (showMessage) showMessage('Hospital added successfully!', 'success');
            form.reset();
            fetchHospitals();
        } catch (error) {
            console.error("Error adding hospital:", error);
            if (showMessage) showMessage(`Error adding hospital: ${error.message}.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleEditHospital = async (id, newName, newLocation) => {
        if (!db || !appId || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized. Please login.", 'error'); return; }
        setLoading(true);
        try {
            const hospitalDocRef = doc(db, `artifacts/${appId}/public/data/hospitals`, id);
            await updateDoc(hospitalDocRef, { name: newName.trim(), location: newLocation.trim() });
            if (showMessage) showMessage('Hospital updated successfully!', 'success');
            fetchHospitals();
        } catch (error) {
            console.error("Error updating hospital:", error);
            if (showMessage) showMessage(`Error updating hospital: ${error.message}.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteHospital = (hospitalId) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!db || !appId || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized. Please login.", 'error'); return; }
            setLoading(true);
            try {
                const doctorsToDeleteSnapshot = await getDocs(collection(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors`));
                for (const d of doctorsToDeleteSnapshot.docs) {
                    await deleteDoc(d.ref);
                }
                const hospitalDocRef = doc(db, `artifacts/${appId}/public/data/hospitals`, hospitalId);
                await deleteDoc(hospitalDocRef);
                if (showMessage) showMessage('Hospital and its doctors deleted successfully!', 'success');
                fetchHospitals();
            } catch (error) {
                console.error("Error deleting hospital:", error);
                if (showMessage) showMessage(`Error deleting hospital: ${error.message}.`, 'error');
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
            if (!db || !appId || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized. Please login.", 'error'); return; }
            setLoading(true);
            try {
                const hospitalsColRef = collection(db, `artifacts/${appId}/public/data/hospitals`);
                const hospitalDocsSnapshot = await getDocs(hospitalsColRef);
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
                    if (showMessage) showMessage('No duplicate hospitals found.', 'success');
                } else {
                    if (showMessage) showMessage(`Found ${duplicatesToDelete.length} duplicate hospitals. Deleting...`, 'info');
                    for (const duplicate of duplicatesToDelete) {
                        try {
                            const doctorsSubcollectionRef = collection(db, `artifacts/${appId}/public/data/hospitals/${duplicate.id}/doctors`);
                            const doctorsSnapshot = await getDocs(doctorsSubcollectionRef);
                            for (const doctorDoc of doctorsSnapshot.docs) {
                                await deleteDoc(doctorDoc.ref);
                            }
                            await deleteDoc(duplicate.ref);
                        } catch (deletionError) {
                            console.error(`Error deleting duplicate hospital ${duplicate.id}:`, deletionError);
                            if (showMessage) showMessage(`Partial success: Could not delete all duplicates. Error with ${duplicate.id}: ${deletionError.message}`, 'error');
                        }
                    }
                    if (showMessage) showMessage('Duplicate hospitals and their associated doctors/reviews deleted successfully!', 'success');
                }
                fetchHospitals();
            } catch (error) {
                console.error("Error identifying/deleting duplicate hospitals:", error);
                if (showMessage) showMessage(`Error processing duplicates: ${error.message}`, 'error');
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
        if (!db || !appId || !selectedHospital || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized or hospital not selected.", 'error'); return; }
        const form = e.target;
        const name = form.name.value.trim();
        const specialty = form.specialty.value.trim();
        if (!name || !specialty) { if (showMessage) showMessage("Please fill all fields for doctor.", 'error'); return; }

        setLoading(true);
        try {
            const newDoctorRef = doc(collection(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`));
            await setDoc(newDoctorRef, { name, specialty, ratings: [] });
            if (showMessage) showMessage('Doctor added successfully!', 'success');
            form.reset();
            fetchDoctors(selectedHospital.id);
        } catch (error) {
            console.error("Error adding doctor:", error);
            if (showMessage) showMessage(`Error adding doctor: ${error.message}.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleEditDoctor = async (id, newName, newSpecialty) => {
        if (!db || !appId || !selectedHospital || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized or hospital not selected.", 'error'); return; }
        setLoading(true);
        try {
            const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, id);
            await updateDoc(doctorDocRef, { name: newName.trim(), specialty: newSpecialty.trim() });
            if (showMessage) showMessage('Doctor updated successfully!', 'success');
            fetchDoctors(selectedHospital.id);
        } catch (error) {
            console.error("Error updating doctor:", error);
            if (showMessage) showMessage(`Error updating doctor: ${error.message}.`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteDoctor = (doctorId) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!db || !appId || !selectedHospital || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized or hospital not selected.", 'error'); return; }
            setLoading(true);
            try {
                const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, doctorId);
                await deleteDoc(doctorDocRef);
                if (showMessage) showMessage('Doctor deleted successfully!', 'success');
                fetchDoctors(selectedHospital.id);
            } catch (error) {
                console.error("Error deleting doctor:", error);
                if (showMessage) showMessage(`Error deleting doctor: ${error.message}.`, 'error');
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
            if (!db || !appId || !selectedHospital || !selectedDoctor || !isAdminLoggedIn) { if (showMessage) showMessage("Not authorized or doctor/hospital not selected.", 'error'); return; }
            setLoading(true);
            try {
                const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
                const updatedRatings = reviews.filter((_, index) => index !== reviewIndex);
                await updateDoc(doctorDocRef, { ratings: updatedRatings });
                if (showMessage) showMessage('Review deleted successfully!', 'success');
                fetchReviews(selectedHospital.id, selectedDoctor.id);
            } catch (error) {
                console.error("Error deleting review:", error);
                if (showMessage) showMessage(`Error deleting review: ${error.message}.`, 'error');
            } finally {
                setLoading(false);
                setShowConfirm(false);
                setConfirmAction(null);
            }
        });
    };

    // Function to handle deleting a comment from a specific review
    const handleDeleteComment = (reviewIndex, commentIndex) => {
        setShowConfirm(true);
        setConfirmAction(() => async () => {
            if (!db || !appId || !selectedHospital || !selectedDoctor || !isAdminLoggedIn) {
                if (showMessage) showMessage("Not authorized or doctor/hospital not selected.", 'error');
                setShowConfirm(false);
                setConfirmAction(null);
                return;
            }
            setLoading(true);
            try {
                const doctorDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${selectedHospital.id}/doctors`, selectedDoctor.id);
                const doctorSnap = await getDoc(doctorDocRef);

                if (!doctorSnap || !doctorSnap.exists()) {
                    if (showMessage) showMessage('Doctor not found or data is invalid. Cannot delete comment.', 'error');
                    setLoading(false);
                    setShowConfirm(false);
                    setConfirmAction(null);
                    return;
                }

                const doctorData = doctorSnap.data();
                const currentRatings = doctorData.ratings || [];

                const updatedRatings = JSON.parse(JSON.stringify(currentRatings));

                if (updatedRatings[reviewIndex] && updatedRatings[reviewIndex].comments) {
                    updatedRatings[reviewIndex].comments.splice(commentIndex, 1);
                } else {
                    if (showMessage) showMessage('Review or comment not found.', 'error');
                    setLoading(false);
                    setShowConfirm(false);
                    setConfirmAction(null);
                    return;
                }

                await updateDoc(doctorDocRef, { ratings: updatedRatings });
                if (showMessage) showMessage('Comment deleted successfully!', 'success');
                fetchReviews(selectedHospital.id, selectedDoctor.id);
            } catch (error) {
                console.error("Error deleting comment:", error);
                if (showMessage) showMessage(`Error deleting comment: ${error.message}.`, 'error');
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
        if (showMessage) showMessage('', ''); // Clear previous messages
        try {
            if (auth) {
                 await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
            } else {
                throw new Error("Firebase Auth not initialized.");
            }
            if (showMessage) showMessage('Authenticating...', 'info');
        } catch (error) {
            console.error("Login error:", error);
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
            if (showMessage) showMessage(errorMessage, 'error');
            setLoading(false);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        if (!auth) return;
        setLoading(true);
        try {
            await auth.signOut();
            if (showMessage) showMessage('Logged out successfully!', 'success');
            setHospitals([]);
            setDoctors([]);
            setReviews([]);
            setSelectedHospital(null);
            setSelectedDoctor(null);
            setActiveSection('hospitals');
            setLoginEmail('');
            setLoginPassword('');
            setIsAdminLoggedIn(false);
        } catch (error) {
            console.error("Logout error:", error);
            if (showMessage) showMessage(`Logout failed: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };


    // Conditional rendering logic based on `isAdminLoggedIn` state
    const renderContent = () => {
        if (loadingFirebase || loading) { // Check global firebase loading as well
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
                const filteredHospitals = hospitals.filter(hospital =>
                    hospital.name.toLowerCase().includes(hospitalSearchTerm.toLowerCase()) ||
                    hospital.location.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
                );

                return (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-3">Hospitals ({hospitals.length} Total)</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search hospitals by name or location..."
                                value={hospitalSearchTerm}
                                onChange={(e) => setHospitalSearchTerm(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 shadow-sm"
                            />
                        </div>
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
                                {reviews.map((review, reviewIndex) => (
                                    <div key={reviewIndex} className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col justify-between items-start">
                                        <div className="w-full flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold text-gray-800">Rating: {review.stars} stars</p>
                                                <p className="text-sm text-gray-600 italic">"{review.comment || 'No comment provided'}"</p>
                                                <p className="text-xs text-gray-500 mt-1">Date: {review.date || 'N/A'} (Reviewer: {review.reviewerId || 'Unknown'})
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
                                        {review.comments && review.comments.length > 0 && (
                                            <div className="w-full mt-4 pt-4 border-t border-gray-200 space-y-2">
                                                <p className="font-semibold text-gray-700 text-sm">Comments:</p>
                                                {review.comments.map((comment, commentIndex) => (
                                                    <div key={comment.date + commentIndex} className="bg-gray-100 p-3 rounded-md flex justify-between items-start text-sm">
                                                        <div>
                                                            <p className="text-gray-800">{comment.text}</p>
                                                            <p className="text-xs text-gray-500 mt-1">Date: {comment.date ? new Date(comment.date).toLocaleDateString() : 'N/A'} (Commenter: {comment.userId || 'Unknown'})</p>
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
                    {isAdminLoggedIn && (
                        <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors">Logout</button>
                    )}
                </div>
            </header>

            <main className="flex-grow container py-8">
                {/* Message Box is now a direct child in AdminPanel, consuming showMessage from context */}
                <MessageBox message={showMessage.text} type={showMessage.type} />
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
};

export default AdminPanel; // Export AdminPanel as default
