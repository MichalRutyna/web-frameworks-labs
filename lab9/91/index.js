const https = require("https")
fs = require("fs")
helmet = require("helmet")
const options = {
    key: fs.readFileSync("/var/www/example/sslcert/privkey.pem"),
    cert: fs.readFileSync("/var/www/example/sslcert/fullchain.pem"),
    dhparam: fs.readFileSync("/var/www/example/sslcert/dh-strong.pem")
}
const app = express()
app.use(helmet()) // oprogramowanie pośredniczące helmet
app.use((req, res) => {
    res.writeHead(200)
    res.end("hello world\n")
})
app.listen(8000)
https.createServer(options, app).listen(8080)