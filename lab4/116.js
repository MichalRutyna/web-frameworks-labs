let formatDate = (req, res, next) => {
    let tekst = getDate()
    tekst += " Klient wyslal zapytanie o plik " + req.originalUrl
    console.log(tekst)
    next()
}

const getDate = require("./116server-files/getDate.js")

const express = require('express')
const app = express()
const port = 3000

app.use(formatDate)

app.get('/', (req, res) => {
  res.send('Prosty serwer oparty na szkielecie programistycznym Express!')
})

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`)
})

//http://localhost:3000/scripts/script.js