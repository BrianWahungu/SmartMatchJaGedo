// src/components/CallToAction.jsx
import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const handleScrollToMatch = () => {
    const matchSection = document.getElementById('match-section');
    if (matchSection) {
      matchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <h2>Ready to Build Your Dream Project?</h2>
      <p>Join hundreds of satisfied clients. Let us match you with the perfect builder today.</p>
      <button className="cta-button" onClick={handleScrollToMatch}>
        Get Started Now
      </button>
    </section>
  );
};

export default CallToAction;
