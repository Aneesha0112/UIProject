import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { fetchData } from '../../main.js';
import Post from './Post.js';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = () => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ username: user.username }),
      headers: { 'Content-Type': 'application/json' },
    };

    fetchData('/post/readpost', requestOptions)
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome {user.username} to SocialSquare!</h1>

      <h2>Your Previous Posts:</h2>
      <ul>
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      <Link to="/Post">Create a Post</Link>
    </div>
  );
};

export default Profile;
