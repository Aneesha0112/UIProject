import { Outlet, Link } from "react-router-dom";
import React, { useContext, Fragment} from 'react';
import { UserContext } from './Pages/UserContext.js';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome! </h2>
    </Fragment>
  )
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-custom">
        <div className="container-fluid">
        { user.authenticated ? authenticated : guest }
          <Link className="navbar-brand" to="/"></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-textbox">
                  <Link to="/Register">
                    <button className="nav-button">Register</button>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/Login">
                  <button className="nav-button">Log In</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Profile">
                  <button className="nav-button">Profile</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Post">
                  <button className="nav-button">Post</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
