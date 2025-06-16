// src/components/StarRating.jsx
import React from 'react';

/**
 * Reusable StarRating component for displaying or inputting star ratings.
 * @param {object} props - Component props.
 * @param {number} props.rating - The current rating value (e.g., 3.5).
 * @param {function} [props.onRatingChange] - Callback when an interactive star is clicked. If provided, stars are interactive.
 * @param {number} [props.maxStars=5] - Total number of stars to display.
 * @param {boolean} [props.interactive=false] - If true, stars are clickable for input.
 */
const StarRating = ({ rating, onRatingChange, maxStars = 5, interactive = false }) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        const isFilled = i <= fullStars; // Simple fill for full stars

        let starColor = 'text-gray-300'; // Default for empty
        if (isFilled) {
            starColor = 'text-yellow-400'; // Filled star color
        } else if (i === fullStars + 1 && (rating % 1) > 0) {
            // This is a simple visual for partial stars, could be more advanced with gradients
            starColor = 'text-yellow-200'; // A lighter shade for "half-filled" if needed
        }

        stars.push(
            <span
                key={i}
                className={`star text-xl ${starColor} ${interactive ? 'cursor-pointer transition-transform duration-100 hover:scale-125' : ''}`}
                data-value={i}
                onClick={interactive ? () => onRatingChange(i) : undefined}
            >
                &#9733; {/* Unicode star character */}
            </span>
        );
    }

    return (
        <div className={`flex ${interactive ? 'star-rating' : ''}`}>
            {stars}
        </div>
    );
};

export default StarRating;
