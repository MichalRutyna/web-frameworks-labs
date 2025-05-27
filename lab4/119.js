const http = require('http')
const url = require('url')
const hbs = require('hbs')
const express = require('express')

const path = require('path')
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => { 
    let q = url.parse(req.url, true).query
    console.log(q)
    res.render('color', { bg_color: q.bg})
})
app.listen(3000, () => console.log('Serwer działa!'))

//http://localhost:3000/?bg=750011