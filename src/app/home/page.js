'use client';

import Navbar from '../Navbar';
import { useState } from 'react';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = (e) => {
    if (e.key === 'Enter' && newComment.trim() !== '') {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-6 space-y-4">
        <h1 className="text-2xl font-bold">We&apos;re Building Something Amazing! 🚧</h1>
        <h2 className="text-lg text-gray-600">In the meantime, explore the &apos;Tools&apos; tab—it&apos;s fully operational! TELL US WHAT YOU THINK!</h2>

        <div className="w-full max-w-md">
          <div className="border p-4 rounded-lg shadow">
            {comments.map((comment, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <span>{comment}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteComment(index)}
                >
                  ×
                </button>
              </div>
            ))}
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={addComment}
              placeholder="Type your comment and press Enter..."
              className="w-full mt-4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}