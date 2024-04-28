const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const iso = urlObj.query.iso;

  if (urlObj.pathname === '/api/parsetime') {
    const date = new Date(iso);
    const jsonResponse = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  } else if (urlObj.pathname === '/api/unixtime') {
    const unixTime = new Date(iso).getTime();
    const jsonResponse = { unixtime: unixTime };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});