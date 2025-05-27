const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let q = url.parse(req.url, true).query
    let txt = q.year + " " + q.month + " " + q.day
    res.end(txt)
}).listen(3000)

//http://localhost:3000/?year=2017&month=July&day=23