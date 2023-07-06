import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title,
      content,
    };

    const updatedProfile = {
      ...user.profile,
      posts: [...user.profile.posts, newPost],
    };

    updateUser('profile', updatedProfile);

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
