const http = require('http')
const fs = require('fs')
const port = 3000
function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Blad wewnetrzny')
        }
        res.writeHead(responseCode, { 'Content-Type': contentType })
        res.end(data)
    })
}
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/1':
            serveStaticFile(res, '/117public/1.html', 'text/html')
            break
        case '/2':
            serveStaticFile(res, '/117public/2.html', 'text/html')
            break
        case '/3':
            serveStaticFile(res, '/117public/3.html', 'text/html')
            break
        case '/4':
            serveStaticFile(res, '/117public/4.html', 'text/html')
            break
        case '/5':
            serveStaticFile(res, '/117public/5.html', 'text/html')
            break
        default:
            res.end("404")
            break
    }
})
server.listen(port, () => console.log(`Server działa na porcie ${port}; ` + 'naciśnij Ctrl+C, aby zakończyć'))