const express = require('express')
const path = require('path')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

const PORT = 3000
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})
app.post("/result", (req, res) => {
    // let username = req.body.username
    // let password = req.body.password
    // if (!username || !password){
    //     res.send("Uzupelnij dane!")
    // }
    // else {
    //     res.send("Użytkownik: " + username + "<br>Hasło: " + password)
    // }
    res.send(`Użytkownik: ${req.body.name} <br> Znajomosc jezykow: ${req.body.jezyki}`)
})


app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))