const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import routes
const propertyRoutes = require('./routes/propertyRoutes');
const authRoutes = require('./routes/authRoutes'); // Updated path

// Connect to the MongoDB database
connectDB();

// Initialize middleware to parse JSON requests
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: ['http://localhost:5000',
    "http://localhost:5000/api/properties",
    'http://localhost:5173',
    "https://airbnb-clone-be-l1y1.onrender.com",
    "https://airbnb-clone-fe.netlify.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Use routes
app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);


// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Clone API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
