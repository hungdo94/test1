const http = require('http');
http.createServer(function(request, response) {
  console.log('helo');
  response.end('helo ');
  response.writeHead(208,{"conten"})

}).listen(5000)
