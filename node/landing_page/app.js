var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('client request URL:', req.url);
  if(req.url ==='/'){
    fs.readFile('views/index.html','utf8',function(errors,contents){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/ninjas'){
    fs.readFile('views/ninjas.html','utf8', function(errors,contents){
      res.writeHead(200, {'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/dojos/new'){
    fs.readFile('views/dojos.html', 'utf8', function(errors,contents){
      res.writeHead(200, {'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else{
    res.end('File not found!!!');
  }
})

server.listen(6789);
console.log('Running on localhost at port 6789');