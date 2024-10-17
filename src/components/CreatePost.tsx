import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

interface CreatePostProps {
  onPostCreated: (post: { content: string; image?: string }) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onPostCreated({ content, image });
      setContent('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-700 p-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="¿Qué está pasando?"
        className="w-full bg-transparent resize-none focus:outline-none"
        rows={3}
      />
      {image && (
        <img src={image} alt="Post preview" className="mt-2 rounded-lg w-full" />
      )}
      <div className="flex justify-between items-center mt-3">
        <button
          type="button"
          onClick={() => setImage(prompt('Enter image URL') || '')}
          className="text-blue-400 hover:text-blue-300"
        >
          <Image size={20} />
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default CreatePost;