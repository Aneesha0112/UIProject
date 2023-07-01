import React, { useState } from 'react';

const Registerform = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Details:', { username, email, password });
  };

  return (
    <div>
      <h1 className="text-center display-1">Register</h1>
      <div className="container">
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={usernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={emailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={passwordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary"> Register </button>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
