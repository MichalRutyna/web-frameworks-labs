const express = require('express');
const path = require('path')
const { check, validationResult } = require('express-validator')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());


const sanitizeName = value => {
  let v = value.split(" ")
  return v[0][0] + v[1][0]
}

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form2.html"))
})

app.post("/form", [
  check('nazwisko').isLength({ min: 3, max: 25 }).withMessage("Zla dlugosc")
  .customSanitizer(value => sanitizeName(value))
  .isAlpha().withMessage("Nieprawidlowy znak"),
  
  check('email').bail().normalizeEmail().trim().stripLow().isEmail().withMessage("komunikat o błędzie"),
  // check('email').custom(email => {
    // if(alreadyHaveEmail(email)){
  //   return Promise.reject('Email już istnieje!')
  //   }
  //   }),
  check('wiek').isInt({gt: 0, lt: 110}).withMessage("komunikat o błędzie")
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const nazwisko = req.body.nazwisko
  const email = req.body.email
  const wiek = req.body.wiek
  res.send("Użytkownik: " + nazwisko + "<br>Email: " + email + "<br>Wiek: " + wiek)
})

app.listen(3000);