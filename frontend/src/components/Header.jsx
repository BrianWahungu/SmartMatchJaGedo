import React from 'react';
import '../styles/Header.css';
import backgroundImage from '../assets/builder-client.jpg'; // Ensure this path is correct

const Header = () => {
  const scrollToMatchSection = () => {
    const matchSection = document.getElementById('match-section');
    if (matchSection) {
      matchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="homepage-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay">
        <div className="header-content">
          <h1>Connect with the Right Builder</h1>
          <p>
            Our smart matchmaker pairs clients with trusted builders tailored to their needs. Start your journey toward the perfect project today.
          </p>
          <button className="matchmaker-btn" onClick={scrollToMatchSection}>
            Start Matching
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
