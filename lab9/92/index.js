const path = require('path')
const express = require('express')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')

const helmet = require("helmet")
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })

const hbs = require("handlebars")
const exphbs = require("express-handlebars")
const routes = require('./routes')
const app = express()

// app.engine(
//     "hbs",
//     exphbs.engine({
//         extname: "hbs",
//         defaultLayout: "layout",
//         layoutsDir: __dirname + "/views",
//     })
// )

app.set("view engine", "hbs")
app.set('views', path.join(__dirname, 'views'))

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
    express.urlencoded({ extended: true }),
    helmet(),
];
app.use(middlewares)
app.use('/', routes)
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(3000, () => {
    console.log('App running at http://localhost:3000')
})