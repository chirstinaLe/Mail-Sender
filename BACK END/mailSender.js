const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: 'ninale2k7@gmail.com', // Your email
    pass: 'ragg jvej xegg qswu', // Your email password or app-specific password
  },
});