const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Prosty serwer oparty na szkielecie programistycznym Express!')
})

app.get('/about', (req, res) => {
  res.send('Autor strony: Jan Kowalski')
})

app.get('/name/:imie/:imie2', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Czesc ${req.params['imie']} i ${req.params['imie2']}</h1>`)
})
// http://localhost:3000/name/Jacek/Placek


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
