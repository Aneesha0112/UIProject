import React, { useState } from 'react';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Credentials:', { username, password });
  };

  return (
    <div>
      <h1 className="text-center display-1">Login</h1>
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
          <button type="submit" className="btn btn-primary"> Login  </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
