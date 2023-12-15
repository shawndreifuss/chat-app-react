const express = require('express');
// Cross origin request
const cors = require('cors');

const authRoutes = require('./routes/auth');


// Creating instance of express
const app = express();
// Setting up Port
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);

// Routes
app.get('/', ( req, res ) => {
    res.send('Hello World');
})
 

// Starting server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
