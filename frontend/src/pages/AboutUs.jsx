// src/pages/AboutUs.jsx
import React from 'react';
import '../styles/AboutUs.css';
import aboutImage from '../assets/about-us.jpg'; // Replace with your actual image

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to BuilderMatch! We connect clients with trusted, experienced builders to help bring your dream projects to life.
          Our mission is to make the process simple, transparent, and reliable.
        </p>
        <p>
          Founded in 2025, BuilderMatch prides itself on quality, professionalism, and client satisfaction.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img src={aboutImage} alt="Team working together" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
