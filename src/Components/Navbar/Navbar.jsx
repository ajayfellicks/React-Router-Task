import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <nav>
          <Link className="link" to="/">
            All
          </Link>
          <Link className="link" to="/fullstackdevelopment">
            FULL STACK DEVELOPMENT
          </Link>
          <Link className="link" to="/datascience">
            DATA SCIENCE
          </Link>
          <Link className="link" to="/cybersecurity">
            CYBER SECURITY
          </Link>
          <Link className="link" to="/devops">
            DEV OPS
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
