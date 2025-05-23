// src/components/HowItWorks.jsx
import React from 'react';
import '../styles/HowItWorks.css';

const steps = [
  {
    id: 1,
    title: 'Post Your Project',
    description: 'Describe your construction needs and set your budget to begin.',
    icon: '📋',
  },
  {
    id: 2,
    title: 'Get Matched with Builders',
    description: 'We’ll connect you with experienced and trusted professionals.',
    icon: '🤝',
  },
  {
    id: 3,
    title: 'Start Building',
    description: 'Chat, hire, and kick off your project with full confidence.',
    icon: '🏗️',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
