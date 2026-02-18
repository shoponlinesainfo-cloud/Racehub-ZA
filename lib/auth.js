// lib/auth.js

const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; // Replace with your actual secret key

// Generate JWT token
function generateToken(user) {
    return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
}

// Verify JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};