import React, { useState, useEffect } from 'react';
import builders from '../data/buildersData';
import '../styles/MatchingForm.css';
import { useNavigate } from 'react-router-dom';
import MatchingResults from './MatchingResults'; // ✅ import it

const MatchingForm = () => {
  const [criteria, setCriteria] = useState({ location: '', specialty: '' });
  const [results, setResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = builders.filter(
      (builder) =>
        builder.location.toLowerCase().includes(criteria.location.toLowerCase()) &&
        builder.specialty.toLowerCase().includes(criteria.specialty.toLowerCase())
    );
    setResults(matched);
  };

  if (!isAuthenticated) {
    return (
      <div className="matching-form-container">
        <h2>Find Your Ideal Builder</h2>
        <p className="auth-warning">
          🚫 You must be <span>logged in</span> to use this feature.
        </p>
        <div className="auth-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/login')}>Create Account</button>
        </div>
      </div>
    );
  }

  return (
    <div className="matching-form-container">
      <h2>Find Your Ideal Builder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          onChange={handleChange}
        />
        <input
          type="text"
          name="specialty"
          placeholder="e.g. Residential, Commercial"
          onChange={handleChange}
        />
        <button type="submit">Match Me</button>
      </form>

      {/* ✅ Render saved builder results via separate component */}
      <MatchingResults results={results} />
    </div>
  );
};

export default MatchingForm;
