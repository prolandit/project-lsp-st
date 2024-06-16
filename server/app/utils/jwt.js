const jwt = require('jsonwebtoken');

const jwtSecretToken = process.env.JWT_SECRET_TOKEN || 'super_strong_key';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '24h';

const createSignToken = (data) => {
    return jwt.sign(data, jwtSecretToken, { expiresIn: jwtExpiresIn });
}

module.exports = { createSignToken }