// src/components/MyReviewsDisplay.jsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App.jsx';
import { 
    collection, 
    query, 
    where, 
    onSnapshot, 
    doc, // Added for doc reference
    updateDoc, // Added for updating document
    arrayUnion, // Added for adding to array (likes)
    arrayRemove, // Added for removing from array (unlikes)
    getDoc // Added for fetching individual review for like toggle
} from 'firebase/firestore';
// import StarRating from './StarRating.jsx'; // Removed StarRating import as it's no longer used

const MyReviewsDisplay = () => {
    const { db, currentUserId, appId, showMessage, setShowAuthModal, currentUserIsAnonymous } = useContext(FirebaseContext);
    const [myReviews, setMyReviews] = useState([]);
    const [loadingMyReviews, setLoadingMyReviews] = useState(true);

    useEffect(() => {
        if (!db || !appId || !currentUserId) {
            setLoadingMyReviews(false);
            return;
        }

        setLoadingMyReviews(true);
        // Corrected Firestore collection path to match where ReviewsHubPage stores user reviews.
        // It should be 'artifacts/{appId}/users/{userId}/myReviews'
        const userReviewsCollectionRef = collection(db, `artifacts/${appId}/users/${currentUserId}/myReviews`);
        
        // Removed orderBy as per previous instruction to avoid potential index issues.
        // Data will be sorted in memory if needed.
        const q = query(
            userReviewsCollectionRef,
            where("userId", "==", currentUserId) // This clause is essential for security rules
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedReviews = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                fetchedReviews.push({
                    id: doc.id,
                    ...data,
                    // Ensure date objects are correctly parsed for display
                    date: data.date && typeof data.date.toDate === 'function' ? data.date.toDate() : new Date(data.date),
                    // Ensure comments are also parsed correctly, handling potential Firestore Timestamp objects
                    comments: data.comments ? data.comments.map(comment => ({
                        ...comment,
                        date: comment.date && typeof comment.date.toDate === 'function' ? comment.date.toDate() : new Date(comment.date)
                    })) : [],
                    likes: data.likes || [] // Ensure likes array exists and is initialized
                });
            });
            // Sort reviews by date in descending order (newest first) in memory
            fetchedReviews.sort((a, b) => b.date.getTime() - a.date.getTime());
            setMyReviews(fetchedReviews);
            setLoadingMyReviews(false);
            console.log("MyReviewsDisplay: Fetched user reviews:", fetchedReviews.length);
        }, (error) => {
            console.error("MyReviewsDisplay: Error fetching user's reviews:", error);
            showMessage('Error loading your reviews.', 'error');
            setLoadingMyReviews(false);
        });

        return () => {
            console.log("MyReviewsDisplay: Cleaning up onSnapshot listener.");
            unsubscribe();
        };
    }, [db, appId, currentUserId, showMessage]);


    // --- Like Functionality for MyReviewsDisplay ---
    const handleLikeReview = useCallback(async (reviewId, hospitalId, doctorId) => {
        console.log("MyReviewsDisplay: handleLikeReview called for reviewId:", reviewId);
        if (!currentUserId || currentUserIsAnonymous) {
            showMessage('You must be logged in to like a review. Please sign up or log in.', 'info');
            setShowAuthModal(true);
            return;
        }
        if (!db || !appId || !hospitalId || !doctorId) {
            showMessage('Firebase or review data missing for like operation.', 'error');
            return;
        }

        try {
            // Reference to the public doctor document containing all reviews
            const doctorRef = doc(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors/${doctorId}`);
            const doctorDocSnap = await getDoc(doctorRef);

            if (doctorDocSnap.exists()) {
                const doctorData = doctorDocSnap.data();
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

                    // Update the public doctor document with the modified ratings array
                    await updateDoc(doctorRef, {
                        ratings: updatedRatings
                    });
                    console.log('MyReviewsDisplay: Public doctor document updated with new like status.');

                    // Also update the user's private copy of the review in myReviews
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
                        console.log('MyReviewsDisplay: User private review updated with new like status.');
                    } else {
                        // This case should ideally not happen if the review is in myReviews,
                        // but as a fallback, create the entry if it's missing.
                        const publicReviewData = updatedRatings[targetReviewIndex];
                        await setDoc(userReviewRef, {
                            ...publicReviewData,
                            userId: currentUserId,
                            hospitalId: hospitalId,
                            doctorId: doctorId,
                            likes: publicReviewData.likes // Ensure the likes array is copied correctly
                        });
                        console.log('MyReviewsDisplay: New user review document created for liked review (fallback).');
                    }

                } else {
                    console.error('MyReviewsDisplay: Error: Review not found by ID in doctor ratings array for liking.', reviewId);
                    showMessage('Failed to process like: Review not found.', 'error');
                }
            } else {
                console.error('MyReviewsDisplay: Doctor document not found for liking:', doctorId);
                showMessage('Failed to process like: Doctor not found.', 'error');
            }
        } catch (e) {
            console.error("MyReviewsDisplay: Error liking/unliking review: ", e);
            showMessage(`Error processing like: ${e.message}`, 'error');
        }
    }, [currentUserId, currentUserIsAnonymous, db, appId, showMessage, setShowAuthModal]);


    if (loadingMyReviews) {
        return (
            <div className="flex justify-center items-center h-48">
                <p className="text-center text-gray-500 italic">Loading your reviews...</p>
            </div>
        );
    }

    if (myReviews.length === 0) {
        return (
            <div className="flex justify-center items-center h-48">
                <p className="text-center text-gray-500 italic">You haven't posted any reviews yet. Share your first tea!</p>
            </div>
        );
    }

    return (
        <div className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">My Tea</h1>
            <p className="text-lg text-gray-700 text-center mb-6">Here's a look at the reviews you've shared and the engagement they've received.</p>
            
            <div className="space-y-8">
                {myReviews.map((review) => {
                    const userHasLiked = review.likes && currentUserId && review.likes.includes(currentUserId);
                    return (
                        <div key={review.id} className="p-6 rounded-xl shadow-lg border border-gray-100 bg-white">
                            {/* Review Header */}
                            <div className="flex items-center mb-4">
                                {/* User Avatar Placeholder */}
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
                            </div>

                            {/* Review Body */}
                            <p className="text-gray-800 leading-relaxed mb-4 text-base">
                                {review.comment}
                            </p>

                            {/* Engagement Summary */}
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-3 mt-3">
                                <button 
                                    onClick={() => handleLikeReview(review.id, review.hospitalId, review.doctorId)}
                                    className={`flex items-center transition-colors ${userHasLiked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    Like ({review.likes ? review.likes.length : 0})
                                </button>
                                <span className="flex items-center text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    Comment ({review.comments ? review.comments.length : 0})
                                </span>
                            </div>

                            {/* Comments Section */}
                            <div className="mt-4 border-t border-gray-100 pt-4">
                                <h4 className="text-lg font-semibold text-gray-700 mb-3">Comments on your review:</h4>
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyReviewsDisplay;
