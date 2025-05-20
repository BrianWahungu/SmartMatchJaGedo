// src/components/BuildersList.jsx
import React from 'react';
import builders from '../data/buildersData';
import '../styles/BuildersList.css';

const BuildersList = () => {
  return (
    <section className="builders-section">
      <h2 className="section-title">Available Builders</h2>
      <div className="builders-grid">
        {builders.map((builder) => (
          <div key={builder.id} className="builder-card">
            <img src={builder.image} alt={builder.name} className="builder-img" />
            <h3>{builder.name}</h3>
            <p>{builder.experience}+ years of experience</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildersList;
