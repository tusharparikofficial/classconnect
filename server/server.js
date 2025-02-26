const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes (to be added)
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/questions', require('./routes/questions.routes'));
app.use('/api/papers', require('./routes/papers.routes'));

// Default route
app.get('/', (req, res) => {
  res.send('ClassConnect API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});