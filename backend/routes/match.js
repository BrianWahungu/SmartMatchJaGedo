const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');

// ✅ Test route
router.get('/', (req, res) => {
  res.json({ message: 'Match route is working!' });
});

// ✅ Save a matched builder to user's dashboard
router.post('/save', verifyToken, async (req, res) => {
  const userId = req.user.userId;
  const { builder_id, builder_name, builder_image, specialty, experience } = req.body;

  try {
    const existing = await pool.query(
      'SELECT * FROM saved_builders WHERE user_id = $1 AND builder_id = $2',
      [userId, builder_id]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Builder already saved.' });
    }

    await pool.query(
      'INSERT INTO saved_builders (user_id, builder_id, builder_name, builder_image, specialty, experience) VALUES ($1, $2, $3, $4, $5, $6)',
      [userId, builder_id, builder_name, builder_image, specialty, experience]
    );

    res.status(201).json({ message: 'Builder saved successfully' });
  } catch (err) {
    console.error('SAVE ERROR:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ NEW: Get all saved builders for the logged-in user
router.get('/saved', verifyToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const result = await pool.query(
      'SELECT * FROM saved_builders WHERE user_id = $1 ORDER BY saved_at DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('FETCH ERROR:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ DELETE route to remove a saved builder by builderId
router.delete('/remove/:builderId', verifyToken, async (req, res) => {
  const userId = req.user.userId;
  const builderId = req.params.builderId;

  try {
    await pool.query(
      'DELETE FROM saved_builders WHERE user_id = $1 AND id = $2',
      [userId, builderId]
    );
    res.json({ message: 'Builder removed successfully' });
  } catch (err) {
    console.error('DELETE ERROR:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
