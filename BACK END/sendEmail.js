const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: 'ninale2k7@gmail.com', // Your email
    pass: 'ragg jvej xegg qswu', // Your email password or app-specific password
  },
});

// Define the email options
let mailOptions = {
  from: 'ninale2k7@gmail.com', // Sender address
  to: 'ninale2k7@gmail.com', // Receiver's email
  subject: 'Hello from Node.js!',
  text: 'This is a test email sent from a Node.js script using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully! Info:', info.response);
  }
});
