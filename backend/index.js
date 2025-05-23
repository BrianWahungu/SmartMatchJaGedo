const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load env vars before anything else

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/match');
const chatRoutes = require('./routes/chat'); // ✅ NEW: Chat route

app.use('/api/auth', authRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/chat', chatRoutes); // ✅ Mount chat routes

// Root route (optional for testing)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error-handling middleware (optional but useful)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
