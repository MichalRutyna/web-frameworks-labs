const express = require('express')

const csrf = require('csurf')
const csrfProtection = csrf({ 
    cookie: true
})

const router = express.Router()

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
], (req, res) => {
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

    res.json({ 
        success: 'Thanks for the message! I\'ll be in touch :)'
    });
})

module.exports = router
