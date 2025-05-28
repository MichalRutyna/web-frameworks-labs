const express = require('express')

const csrf = require('csurf')
const csrfProtection = csrf({ 
    cookie: true
})

const router = express.Router()

const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "592c6dc9323031",
      pass: "532fe18245305e"
    }
  });

// MongoDB setup
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact', new mongoose.Schema({
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
}));

mongoose.connect('mongodb://localhost:27017/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('MongoDB connection error:', err));

router.get('/contact', csrfProtection, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken(), { 
        httpOnly: false,
    });
    res.json({ 
        csrfToken: req.csrfToken()
    });
})

const { check, validationResult, matchedData } = require('express-validator')

const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

router.post('/contact', upload.single('photo'), csrfProtection, [
    check('message')
        .isLength({ min: 1 })
        .withMessage('Message is required')
        .trim(),
    check('email')
        .isEmail()
        .withMessage('That email doesn\'t look right')
        .bail()
        .trim()
        .normalizeEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array(),
            data: req.body
        });
    }
    const data = matchedData(req)
    console.log('Sanitized: ', data)

    if (req.file) {
        console.log('Uploaded: ', req.file)
    }

    // Save to MongoDB
    try {
        const contact = new Contact(data);
        await contact.save();
        console.log('Saved to MongoDB:', contact);
    } catch (err) {
        console.error('Error saving to MongoDB:', err);
        return res.status(500).json({ error: 'Failed to save data' });
    }

    const mailOptions = {
        from: 'test@test.com', // Replace with your email
        to: 'test@test.com', // Replace with the static email address
        subject: 'New Contact Form Submission',
        text: `New message from ${data.email}: ${data.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error)
            return res.status(500).json({ error: 'Failed to send email' })
        }
        console.log('Email sent: ', info.response)
        res.json({ 
            success: 'Thanks for the message! I\'ll be in touch :)'
        });
    })
})

module.exports = router
