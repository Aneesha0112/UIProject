import React, { useState } from 'react';

const Profile = () => {
  const [Username, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Bio, setBio] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const bioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log('User Details:', { Username, Email, Bio });
  };

  return (
    <div>
      <h1 className="text-center display-1">Profile</h1>
      <div className="container">
        <hr />
        <h2 className="text-center">Welcome to the profile page</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="Username"
              value={Username}
              onChange={nameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              value={Email}
              onChange={emailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Bio">Bio:</label>
            <textarea
              className="form-control"
              id="bio"
              value={Bio}
              onChange={bioChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary"> Save Profile </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

        
