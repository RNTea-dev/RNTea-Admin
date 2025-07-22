// src/components/MyReviewsDisplay.jsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FirebaseContext } from '../App.jsx';
import {
    collection,
    query,
    where,
    onSnapshot,
    doc,
    setDoc, // Used for setting like documents in private collection
    deleteDoc, // Used for deleting like documents in private collection
} from 'firebase/firestore';

const MyReviewsDisplay = () => {
    const { db, currentUserId, appId, showMessage, setShowAuthModal, currentUserIsAnonymous } = useContext(FirebaseContext);
    const [myReviews, setMyReviews] = useState([]);
    const [loadingMyReviews, setLoadingMyReviews] = useState(true);

    useEffect(() => {
        let unsubscribeReviews = () => {};
        const unsubscribeComments = {}; // To store unsubscribe functions for comments
        const unsubscribeLikes = {}; // To store unsubscribe functions for likes

        if (!db || !appId || !currentUserId) {
            setLoadingMyReviews(false);
            return;
        }

        setLoadingMyReviews(true);
        const userReviewsCollectionRef = collection(db, `artifacts/${appId}/users/${currentUserId}/myReviews`);

        const q = query(
            userReviewsCollectionRef,
            where("userId", "==", currentUserId)
        );

        unsubscribeReviews = onSnapshot(q, (querySnapshot) => {
            console.log("MyReviewsDisplay: onSnapshot triggered for user reviews.");
            const fetchedReviews = [];
            const newUnsubscribeComments = {};
            const newUnsubscribeLikes = {};

            querySnapshot.forEach((reviewDoc) => {
                const reviewData = reviewDoc.data();
                const reviewId = reviewDoc.id;

                // Set up onSnapshot for comments subcollection of this review
                const commentsColRef = collection(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}/comments`);
                newUnsubscribeComments[reviewId] = onSnapshot(commentsColRef, (commentsSnapshot) => {
                    const comments = commentsSnapshot.docs.map(commentDoc => ({
                        id: commentDoc.id,
                        ...commentDoc.data(),
                        date: commentDoc.data().date && typeof commentDoc.data().date.toDate === 'function' ? commentDoc.data().date.toDate() : new Date(commentDoc.data().date)
                    }));

                    // Update the specific review in the myReviews state with new comments
                    setMyReviews(prevReviews => {
                        const updatedReviews = prevReviews.map(r =>
                            r.id === reviewId ? { ...r, comments: comments } : r
                        );
                        // If the review is new and not yet in state, add it (edge case for initial load)
                        if (!updatedReviews.some(r => r.id === reviewId)) {
                             return [...updatedReviews, { ...reviewData, id: reviewId, comments, likes: [] }].sort((a, b) => (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0));
                        }
                        return updatedReviews;
                    });
                });

                // Set up onSnapshot for likes subcollection of this review
                const likesColRef = collection(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}/likes`);
                newUnsubscribeLikes[reviewId] = onSnapshot(likesColRef, (likesSnapshot) => {
                    const likes = likesSnapshot.docs.map(likeDoc => likeDoc.id); // Store just the userId as the like document ID

                    // Update the specific review in the myReviews state with new likes
                    setMyReviews(prevReviews => {
                        const updatedReviews = prevReviews.map(r =>
                            r.id === reviewId ? { ...r, likes: likes } : r
                        );
                        // If the review is new and not yet in state, add it (edge case for initial load)
                        if (!updatedReviews.some(r => r.id === reviewId)) {
                            return [...updatedReviews, { ...reviewData, id: reviewId, comments: [], likes }].sort((a, b) => (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0));
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
            Object.assign(unsubscribeComments, newUnsubscribeComments);
            Object.assign(unsubscribeLikes, newUnsubscribeLikes);

            fetchedReviews.sort((a, b) => (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0));
            setMyReviews(fetchedReviews); // Set initial reviews without comments/likes
            setLoadingMyReviews(false);
            console.log("MyReviewsDisplay: Fetched user reviews:", fetchedReviews.length);

        }, (error) => {
            console.error("MyReviewsDisplay: Error fetching user's reviews:", error);
            showMessage('Error loading your reviews.', 'error');
            setLoadingMyReviews(false);
        });

        return () => {
            console.log("MyReviewsDisplay: Cleaning up onSnapshot listeners.");
            unsubscribeReviews();
            Object.values(unsubscribeComments).forEach(unsub => unsub());
            Object.values(unsubscribeLikes).forEach(unsub => unsub());
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
            // Reference to the public like document (using userId as the ID)
            const publicLikeDocRef = doc(db, `artifacts/${appId}/public/data/hospitals/${hospitalId}/doctors/${doctorId}/reviews/${reviewId}/likes/${currentUserId}`);
            const publicLikeSnap = await getDoc(publicLikeDocRef);

            // Reference to the private like document (using userId as the ID)
            const privateLikeDocRef = doc(db, `artifacts/${appId}/users/${currentUserId}/myReviews/${reviewId}/likes/${currentUserId}`);

            if (publicLikeSnap.exists()) {
                // User has already liked, so unlike (delete the like document from public and private)
                await deleteDoc(publicLikeDocRef);
                await deleteDoc(privateLikeDocRef); // Ensure private copy is also removed
                showMessage('Review unliked.', 'info');
            } else {
                // User has not liked, so like (create the like document in public and private)
                await setDoc(publicLikeDocRef, {
                    timestamp: new Date(),
                });
                await setDoc(privateLikeDocRef, { // Create private copy
                    timestamp: new Date(),
                });
                showMessage('Review liked!', 'success');
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
                                    // Pass hospitalId and doctorId from the review object
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
                                            <div key={comment.id || (comment.date.getTime() + '_' + commentIndex)} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
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
