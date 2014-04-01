/* var http = require('http');

http.createServer(function(req,resp){
	resp.writeHead('200','OK',{'content-type':'text/plain'});
	resp.end('Hello...');
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req,resp){
	fs.readFile('index.html', function(err,data){
		resp.writeHead('200','OK',{'content-type':'text/html'});
		resp.end(data);
	});
}).listen(1337,'127.0.0.1');
console.log('Webserver has started and accept HTML files');
