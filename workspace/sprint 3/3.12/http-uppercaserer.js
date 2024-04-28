const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
    } else {
        res.writeHead(400);
        res.end('Solicitud no admitida. Se requiere un método POST.');
    }
});

server.listen(port);