const express = require('express')

const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/contact', csrfProtection, (req, res) => {
    res.render('contact', {
        data: {},
        errors: {},
        csrfToken: req.csrfToken()
    })
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
        .withMessage('That email doesn‘t look right')
        .bail()
        .trim()
        .normalizeEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('contact', {
            data: req.body,
            errors: errors.mapped(),
            csrfToken: req.csrfToken()
        });
    }
    const data = matchedData(req)
    console.log('Sanitized: ', data)

    if (req.file) {
        console.log('Uploaded: ', req.file)
    }

    

    req.flash('success', 'Thanks for the message! I‘ll be in touch :)')
    res.redirect('/')
})
module.exports = router
