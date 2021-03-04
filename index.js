const http = require('http');
 
const port = process.env.PORT || 80;
 
console.log('Starting server on port ', port);
 
http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello from Azure!');
}).listen(port);
 
console.log(`Server running at http://localhost:${port}`);

