const path = require('path')
const express = require('express')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')

const helmet = require("helmet")

const cors = require('cors')

const routes = require('./routes')
const app = express()

// Enable CORS for the React app's origin
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'X-CSRF-Token'],
    exposedHeaders: ['X-CSRF-Token']
}))

const middlewares = [
    cookieParser(),
    express.static(path.join(__dirname, 'public')),
    session({
        secret: 'super-secret-key',
        key: 'super-secret-cookie',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
    }),
    flash(),
    express.json(),
    helmet(),
];
app.use(middlewares)
app.use('/', routes)
app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal Server Error' })
})
app.listen(3000, () => {
    console.log('App running at http://localhost:3000')
})