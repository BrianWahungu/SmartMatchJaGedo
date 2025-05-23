require('dotenv').config(); // Make sure this is at the top
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Signup
router.post('/signup', async (req, res) => {
  console.log('SIGNUP REQUEST BODY:', req.body); // 🔍 Log incoming data

  const { username, email, password } = req.body;

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );

    const token = jwt.sign({ userId: newUser.rows[0].id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ token, user: newUser.rows[0] });
  } catch (err) {
    console.error('SIGNUP ERROR:', err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  console.log('LOGIN REQUEST BODY:', req.body); // 🔍 Log incoming data

  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user.rows[0].id,
        username: user.rows[0].username,
        email: user.rows[0].email,
      },
    });
  } catch (err) {
    console.error('LOGIN ERROR:', err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
