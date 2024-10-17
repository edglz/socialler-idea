import React from 'react';

interface CommentProps {
  comment: {
    user: string;
    content: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex items-start space-x-3 mt-2">
      <img
        src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.user}`}
        alt={comment.user}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 bg-gray-800 rounded-lg p-2">
        <p className="font-bold text-sm">{comment.user}</p>
        <p className="text-sm">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;