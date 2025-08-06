// src/pages/PostTea.jsx
import { useState } from 'react';
import { addPost } from '../utils/firestore';

export default function PostTea() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setMessage({ type: 'error', text: 'Please enter some text.' });
      return;
    }

    try {
      setLoading(true);
      await addPost({
        text: text.trim(),
        createdAt: Date.now()
      });
      setText('');
      setMessage({ type: 'success', text: 'Your tea was posted!' });
    } catch (error) {
      console.error('Error posting tea:', error);
      setMessage({ type: 'error', text: 'Failed to post. Try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Post Your Tea</h2>
      
      {message && (
        <div className={`mb-4 p-3 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows="6"
          placeholder="Share your experience anonymously..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white font-semibold rounded ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}
        >
          {loading ? 'Posting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
