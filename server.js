const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});