const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let q = url.parse(req.url, true).query
    let a = Number(q.a)
    let b = Number(q.b)
    let c = Number(q.c)
    var p = 0.5 * (a + b + c)
    var arga = p*(p-a)*(p-b)*(p-c)
    console.log(arga)
    var pole = Math.sqrt(arga)
    console.log(pole)
    res.end(" " + pole)
}).listen(3000, () => console.log(`Server działa na porcie 3000; ` + 'naciśnij Ctrl+C, aby zakończyć'))

//http://localhost:3000/?a=3&b=4&c=5