// src/components/MyReviewsDisplay.jsx
import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../App.jsx';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import StarRating from './StarRating.jsx'; // Assuming this component exists

const MyReviewsDisplay = () => {
    const { db, currentUserId, appId, showMessage } = useContext(FirebaseContext);
    const [myReviews, setMyReviews] = useState([]);
    const [loadingMyReviews, setLoadingMyReviews] = useState(true);

    useEffect(() => {
        if (!db || !appId || !currentUserId) {
            setLoadingMyReviews(false);
            return;
        }

        setLoadingMyReviews(true);
        const userReviewsCollectionRef = collection(db, `artifacts/${appId}/userReviews`);
        
        // This query requires a composite index on 'userId' (ascending) and 'date' (descending).
        // The Firebase error message provides a direct link to create this index.
        const q = query(
            userReviewsCollectionRef,
            where("userId", "==", currentUserId),
            orderBy("date", "desc") 
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedReviews = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                fetchedReviews.push({
                    id: doc.id,
                    ...data,
                    date: data.date && typeof data.date.toDate === 'function' ? data.date.toDate() : new Date(data.date),
                    comments: data.comments ? data.comments.map(comment => ({
                        ...comment,
                        date: comment.date && typeof comment.date.toDate === 'function' ? comment.date.toDate() : new Date(comment.date)
                    })) : []
                });
            });
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
                {myReviews.map((review) => (
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
                            <div className="ml-auto">
                                <StarRating rating={review.stars} readOnly={true} />
                            </div>
                        </div>

                        {/* Review Body */}
                        <p className="text-gray-800 leading-relaxed mb-4 text-base">
                            {review.comment}
                        </p>

                        {/* Engagement Summary (Placeholder for now) */}
                        <div className="flex items-center gap-4 border-t border-gray-100 pt-3 mt-3">
                            <span className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                Likes (0)
                            </span>
                            <span className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Comments ({review.comments ? review.comments.length : 0})
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
                ))}
            </div>
        </div>
    );
};

export default MyReviewsDisplay;
