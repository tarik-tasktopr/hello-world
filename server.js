Create a file named `server.js` with the following content:

```javascript
const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/css' });
        res.end('/* Internal Server Error */');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile('script.js', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/javascript' });
        res.end('// Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This code creates a simple HTTP server that listens on port 3000. When a request is made to the server, it checks the URL of the request and serves the appropriate file (index.html, style.css, or script.js). If the requested file is not found, it returns a 404 error. If there is an error reading the file, it returns a 500 error.