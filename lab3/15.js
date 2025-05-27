const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
        '\
        <h1>Aplikacja w node</h1>\
        <h3>To jest odpowiedz html</h3>\
        <ol>\
            <li></li>\
            <li></li>\
            <li></li>\
        </ol>\
        '
    )
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})