const http = require('http')
let items = []

function show(res) {
    let html = '<html><head><title>Lista zadan</title></head><body>'
        + '<h1>Lista zadan</h1>'
        + '<form method="post" action="/">'
        + '<p><input type="text" name="item" />'
        + '<input type="submit" value="Dodaj" /></p>'
        + '<ul>'
        + items.map(function (item) {
            return '<li>' + item + '</li>'
        }).join('')
        + '</ul>'
        + '</form></body></html>'
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    res.end(html)
}

function notFound(res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('Not Found')
}

function badRequest(res) {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain')
    res.end('Bad Request')
}

let qs = require('querystring')
function add(req, res) {
    var body = ''
    req.setEncoding('utf8')
    req.on('data', function (chunk) { body += chunk })
    req.on('end', function () {
        var obj = qs.parse(body)
        items.push(obj.item)
        show(res)
    })
}

const server = http.createServer(function (req, res) {
    if ('/' == req.url) {
        switch (req.method) {
            case 'GET':
                show(res)
                break
            case 'POST':
                add(req, res)
                break
            default:
                badRequest(res)
        }
    } else {
        notFound(res)
    }
})
server.listen(3000)