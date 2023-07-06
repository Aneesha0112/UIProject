import React, { useState } from 'react';
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import { useContext } from "react";

const Registerform = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
      const inputData={username,password,email};

      const response = await fetchData('/user/register', inputData, 'POST');

      if (!response.message) {
        updateUser('authenticated', true);
        navigate('/Profile'); 
      }
    } catch (error) {
      console.log(error);
    }
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
              onChange={handleUsernameChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
