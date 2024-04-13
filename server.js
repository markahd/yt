const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toolRoutes = require('./routes/toolRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/softwareDirectory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/tools', toolRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
