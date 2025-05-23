// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, Legend, ResponsiveContainer
} from 'recharts';

const Dashboard = ({ user }) => {
  const [savedBuilders, setSavedBuilders] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const fetchSavedBuilders = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/match/saved', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setSavedBuilders(data);
      else console.error(data.error);
    } catch (err) {
      console.error('Error fetching saved builders:', err);
    }
  };

  useEffect(() => {
    fetchSavedBuilders();
  }, []);

  const handleRemove = async (builderId) => {
    if (!window.confirm('Are you sure you want to remove this builder?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/match/remove/${builderId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchSavedBuilders();
      else {
        const err = await res.json();
        alert(err.error || 'Failed to remove builder');
      }
    } catch (err) {
      console.error('REMOVE ERROR:', err);
    }
  };

  const handleOpenContact = (builder) => {
    setSelectedBuilder(builder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBuilder(null);
    setMessage('');
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    try {
      const res = await fetch('http://localhost:5000/api/match/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          builder_id: selectedBuilder.builder_id,
          message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('📨 Message sent!');
        handleCloseModal();
      } else {
        alert(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('SEND ERROR:', err);
      alert('Error sending message');
    }
  };

  const filtered = savedBuilders
    .filter((b) =>
      b.builder_name.toLowerCase().includes(filter.toLowerCase()) ||
      b.specialty.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.builder_name.localeCompare(b.builder_name);
      if (sortBy === 'experience') return b.experience - a.experience;
      return 0;
    });

  // Chart Data
  const specialtyCounts = savedBuilders.reduce((acc, builder) => {
    acc[builder.specialty] = (acc[builder.specialty] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(specialtyCounts).map(([name, value]) => ({
    name,
    value
  }));

  const experienceData = savedBuilders.map(builder => ({
    name: builder.builder_name,
    experience: builder.experience
  }));

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#f56c6c', '#5dade2'];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {user?.username || 'User'} 👋</h2>
      </div>

      <div className="dashboard-controls">
        <input
          type="text"
          placeholder="Search builders..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="experience">Experience</option>
        </select>
      </div>

      <h3>Saved Builders</h3>
      {filtered.length === 0 ? (
        <p>No builders found.</p>
      ) : (
        <div className="builder-grid">
          {filtered.map((builder) => (
            <div key={builder.id} className="builder-card">
              <img src={builder.builder_image} alt={builder.builder_name} />
              <h4>{builder.builder_name}</h4>
              <p>{builder.specialty}</p>
              <p>{builder.experience} years of experience</p>
              <p>Saved: {new Date(builder.saved_at).toLocaleString()}</p>
              <button onClick={() => handleOpenContact(builder)} className="contact-btn">📧 Contact</button>
              <button onClick={() => handleRemove(builder.id)} className="remove-btn">❌ Remove</button>
            </div>
          ))}
        </div>
      )}

      {/* 📊 Charts */}
      {savedBuilders.length > 0 && (
        <>
          <h3>Builder Analytics</h3>
          <div className="charts-grid">
            <div className="chart-card">
              <h4>Experience by Builder</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={experienceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="experience" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h4>Specialty Breakdown</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {showModal && (
        <div className="modal-backdrop">
          <div className="contact-modal">
            <h3>Contact {selectedBuilder.builder_name}</h3>
            <textarea
              placeholder="Write your message here..."
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSendMessage} className="send-btn">Send</button>
              <button onClick={handleCloseModal} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
