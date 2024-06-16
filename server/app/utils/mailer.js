const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'raihanputromaulana477@gmail.com',
        pass: 'phph ttzn gavy mkmf' 
    }
})

module.exports = { transporter }