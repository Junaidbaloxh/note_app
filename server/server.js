const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/', (req, res) => {
    res.send('Note app API is running!');
});

// Start Server

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})