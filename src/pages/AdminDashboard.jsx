// src/pages/AdminDashboard.jsx
import { useEffect, useState } from 'react';
import { getAllPosts, deletePost } from '../utils/firestore';

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <p className="text-gray-600 mb-4">Manage and delete anonymous posts.</p>
      <div className="space-y-4">
        {posts.length === 0 && <p>No posts found.</p>}
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            <span>{post.text}</span>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
