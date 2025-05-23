// backend/routes/chat.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');

// Send message to a builder
router.post('/send', verifyToken, async (req, res) => {
  const userId = req.user.userId;
  const { builder_id, builder_name, message } = req.body;

  if (!builder_id || !builder_name || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await pool.query(
      'INSERT INTO messages (user_id, builder_id, builder_name, message, sender) VALUES ($1, $2, $3, $4, $5)',
      [userId, builder_id, builder_name, message, 'user']
    );
    res.status(201).json({ message: 'Message sent!' });
  } catch (err) {
    console.error('SEND ERROR:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all messages for a user
router.get('/inbox', verifyToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const result = await pool.query(
      'SELECT * FROM messages WHERE user_id = $1 ORDER BY sent_at DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('FETCH ERROR:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
