import React from 'react';
import '../styles/MatchingResults.css';

const MatchingResults = ({ results }) => {
  const token = localStorage.getItem('token');

  const saveBuilder = async (builder) => {
    if (!token) {
      alert('Please login to save builders.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/match/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          builder_id: builder.id,
          builder_name: builder.name,
          builder_image: builder.image,
          specialty: builder.specialty || builder.projectTypes?.[0] || 'General',
          experience: builder.experience,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save builder');
      }

      alert('✅ Builder saved to your dashboard!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (!results || results.length === 0) {
    return <p className="no-matches">No builders matched your criteria.</p>;
  }

  return (
    <div className="matching-results">
      <h3>Your Matches:</h3>
      <div className="builder-grid">
        {results.map((builder) => (
          <div key={builder.id} className="builder-card">
            <img src={builder.image} alt={builder.name} />
            <h4>{builder.name}</h4>
            <p>{builder.experience} years of experience</p>
            <p>Specializes in: {builder.projectTypes?.join(', ') || 'N/A'}</p>
            <button onClick={() => saveBuilder(builder)} className="save-btn">
              Save Builder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingResults;
