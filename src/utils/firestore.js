// src/utils/firestore.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';

// Add a new post
export async function addPost(data) {
  return await addDoc(collection(db, 'posts'), data);
}

// Get all posts (ordered by newest first)
export async function getAllPosts() {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Delete a post (admin only)
export async function deletePost(postId) {
  return await deleteDoc(doc(db, 'posts', postId));
}
