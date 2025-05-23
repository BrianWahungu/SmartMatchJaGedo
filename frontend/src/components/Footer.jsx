// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>BuilderMatch</h3>
          <p>Connecting you with trusted builders for your dream projects.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@buildermatch.com</p>
          <p>Phone: +254 712 345 678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BuilderMatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
