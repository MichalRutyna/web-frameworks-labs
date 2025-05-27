const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let q = url.parse(req.url, true).query
    if (q.toRad == "true") {
        var ret = Number(q.value) / 360 * 2 * Math.PI
    }
    else {
        var ret = (Number(q.value) / (2 * Math.PI) * 360)
    }
    res.end("" + ret)
}).listen(3000, () => console.log(`Server działa na porcie 3000; ` + 'naciśnij Ctrl+C, aby zakończyć'))

//http://localhost:3000/?toRad=true&value=160
//http://localhost:3000/?toRad=false&value=2.79