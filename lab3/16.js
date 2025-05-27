const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    switch (req.url) {
        case "/home":
            res.end('<h1>Strona domowa</h1>')
            break
        case "/about":
            res.end('<h1>Strona o mnie</h1>')
            break
        default:
            res.end('<h1>Nie znaleziono</h1>')
            break
    }
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})