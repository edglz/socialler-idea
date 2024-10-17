import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat, Share, Send } from 'lucide-react';
import Comment from './Comment';

interface PostProps {
  post: {
    id: number;
    user: string;
    content: string;
    image?: string;
    likes: number;
    comments: { user: string; content: string }[];
    reposts: number;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [localComments, setLocalComments] = useState(post.comments);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentContent.trim()) {
      const newComment = { user: 'CurrentUser', content: commentContent };
      setLocalComments([...localComments, newComment]);
      setCommentContent('');
      setIsCommenting(false);
    }
  };

  return (
    <div className="border-b border-gray-700 p-4">
      <div className="flex items-start space-x-3">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`}
          alt={post.user}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="font-bold">{post.user}</p>
          <p className="mt-1">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post image" className="mt-2 rounded-lg w-full" />
          )}
          <div className="flex justify-between mt-3 text-gray-400">
            <button className="flex items-center space-x-1">
              <Heart size={18} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1" onClick={() => setIsCommenting(!isCommenting)}>
              <MessageCircle size={18} />
              <span>{localComments.length}</span>
            </button>
            <button className="flex items-center space-x-1">
              <Repeat size={18} />
              <span>{post.reposts}</span>
            </button>
            <button>
              <Share size={18} />
            </button>
          </div>
          {isCommenting && (
            <form onSubmit={handleAddComment} className="mt-3 flex items-center">
              <input
                type="text"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Añade un comentario..."
                className="flex-1 bg-gray-800 rounded-full px-4 py-2 focus:outline-none"
              />
              <button type="submit" className="ml-2 text-blue-400 hover:text-blue-300">
                <Send size={20} />
              </button>
            </form>
          )}
          {localComments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;