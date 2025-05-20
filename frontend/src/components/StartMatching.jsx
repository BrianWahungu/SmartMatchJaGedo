import React from 'react';
import '../styles/StartMatching.css';

const StartMatching = () => {
  const handleMatchClick = (e) => {
    e.preventDefault();
    alert('Matching process started!'); // Replace with actual logic later
  };

  return (
    <section className="start-matching-section" id="match-section">
      <h2>Start Matching With Builders</h2>
      <p>Tell us a bit about your project and we'll connect you with the best builders for the job.</p>

      <form className="match-form" onSubmit={handleMatchClick}>
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Project Type (e.g., renovation, construction)" required />
        <input type="text" placeholder="Location" required />
        <button type="submit">Find My Builder</button>
      </form>
    </section>
  );
};

export default StartMatching;
