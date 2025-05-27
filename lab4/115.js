const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/about', (req, res) => { 
    res.render('about', { name: 'Jan' })
})

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form2.html"))
})

app.post("/form", (req, res) => {
    res.render('info', {nazwisko: req.body.nazwisko, email: req.body.email, wiek: req.body.wiek})
})

app.listen(3000, () => console.log('Serwer działa!'))