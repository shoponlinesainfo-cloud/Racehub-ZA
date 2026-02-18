'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Mock user data - In a real application, you would use a database
const users = [
    {
        id: 1,
        username: 'user1',
        password: '$2b$10$somethinghashed', // Change this to a real hashed password
    },
];

// Login route
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Respond with token
    res.json({ token });
});

module.exports = router;
