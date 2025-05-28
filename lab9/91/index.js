const https = require("https")
const express = require("express")
fs = require("fs")
helmet = require("helmet")

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
    dhparam: fs.readFileSync("dh-strong.pem")
}
const app = express()
app.use(helmet()) // oprogramowanie pośredniczące helmet
app.use((req, res) => {
    res.writeHead(200)
    res.end("hello world\n")
})
app.listen(8000)
//http://localhost:8000/
https.createServer(options, app).listen(8080)
//https://localhost:8080/