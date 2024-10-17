import React, { useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'frankbaunok',
      content: 'Ya no la veré de la misma forma 😂🤣😂🤣',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      likes: 12900,
      comments: [],
      reposts: 210,
    },
    {
      id: 2,
      user: 'puerto_rico_algarete',
      content: 'LO QUE CALLAMOS LOS HOMBRES\nTUERCA Y TORNILLO 🔧🔩🔧🔩🔧',
      image: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce',
      likes: 5000,
      comments: [],
      reposts: 100,
    },
  ]);

  const handlePostCreated = (newPost: { content: string; image?: string }) => {
    setPosts([
      {
        id: posts.length + 1,
        user: 'CurrentUser',
        content: newPost.content,
        image: newPost.image,
        likes: 0,
        comments: [],
        reposts: 0,
      },
      ...posts,
    ]);
  };

  return (
    <div className="space-y-4">
      <CreatePost onPostCreated={handlePostCreated} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;