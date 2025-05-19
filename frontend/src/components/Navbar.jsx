import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Adjust path based on your folder structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">SignUp/Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
