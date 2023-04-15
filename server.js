You need to modify the existing code in `/server.js` to serve the "index.html", "styles.css", and "script.js" files when requested by the browser. Here's the modified code:

```
const http = require('http');
const fs = require('fs');
const path = require('path');

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
  } else if (req.url === '/styles.css') {
    const filePath = path.join(__dirname, 'styles.css');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    const filePath = path.join(__dirname, 'script.js');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Internal Server Error</h1>');
      } else {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
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
```

In the modified code, we added two more `else if` blocks to check if the requested URL is "/styles.css" or "/script.js". If the requested URL matches either of these, we read the corresponding file using `fs.readFile()` and send the content back to the browser with the appropriate content type. We used the `path.join()` method to construct the file path relative to the current directory. Finally, we added a `Content-Type` header to the response based on the file type.