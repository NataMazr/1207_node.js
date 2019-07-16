let http = require('http');
let server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('<h1>Hello Http, server - ok</h1>');
});

server.listen(8080);
console.log('Server running on port 8080');