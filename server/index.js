const express = require('express');
//Cross origin reuest
const cors = require('cors');

const authRoutes = require('./routes/auth.js');
// Creating instance of express
const app = express();
const PORT = process.env.PORT || 3001
;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});