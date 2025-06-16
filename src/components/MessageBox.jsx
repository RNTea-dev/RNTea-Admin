// src/components/MessageBox.jsx
import React from 'react';

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

export default MessageBox;
