// src/components/StarRating.jsx
import React from 'react';

const StarRating = ({ rating, onRatingChange, readOnly = false }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="star-rating">
            {stars.map((starValue) => (
                <span
                    key={starValue}
                    className={`star ${starValue <= rating ? 'filled' : ''}`}
                    data-value={starValue}
                    onClick={() => !readOnly && onRatingChange(starValue)}
                    onMouseOver={(e) => {
                        if (!readOnly) {
                            // When hovering, fill stars up to the hovered star
                            const currentTarget = e.currentTarget;
                            const allStars = Array.from(currentTarget.parentNode.children);
                            allStars.forEach(star => {
                                if (parseInt(star.dataset.value) <= starValue) {
                                    star.classList.add('filled');
                                } else {
                                    star.classList.remove('filled');
                                }
                            });
                        }
                    }}
                    onMouseOut={(e) => {
                        if (!readOnly) {
                            // On mouse out, revert to the current 'set' rating
                            const currentTarget = e.currentTarget;
                            const allStars = Array.from(currentTarget.parentNode.children);
                            allStars.forEach(star => {
                                if (parseInt(star.dataset.value) <= rating) { // Use the actual 'rating' prop
                                    star.classList.add('filled');
                                } else {
                                    star.classList.remove('filled');
                                }
                            });
                        }
                    }}
                    style={{ cursor: readOnly ? 'default' : 'pointer' }}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
};

export default StarRating;
