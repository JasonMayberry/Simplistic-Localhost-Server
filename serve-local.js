


var local_file_to_be_served = 'index.html';



const fs = require('fs');
const http = require('http');
const path = require('path');
const basePath = __dirname;
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
	    var stream = fs.createReadStream(path.join(basePath, req.url));
	    stream.on('error', function() {
        res.end(fs.readFileSync(local_file_to_be_served));
	});
	stream.pipe(res);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
