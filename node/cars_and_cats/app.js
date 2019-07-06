const http = require('http');
const fs = require('fs');
const port = '7077';

const server = http.createServer(function(req,res){
  console.log('Client request URL: ', req.url);
  if(req.url === '/'){
    fs.readFile('views/index.html','utf8',function(errors,contents){
      res.writeHead(200,{'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url ==='/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css','utf8',function(errors,contents){
      res.writeHead(200,{'Content-type': 'text/css'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/cars'){
    fs.readFile('views/cars.html','utf8',function(errors,contents){
      res.writeHead(200,{'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url ==='/cars/new'){
    fs.readFile('views/new.html','utf8',function(errors,contents){
      res.writeHead(200,{'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/images/car.jpg'){
    fs.readFile('./images/car.jpg',function(errors,contents){
      res.writeHead(200,{'Content-type': 'images/jpg'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/cats'){
    fs.readFile('views/cats.html','utf8',function(errors,contents){
      res.writeHead(200,{'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    })
  }else if(req.url === '/images/cat.jpg'){
    fs.readFile('./images/cat.jpg',function(errors,contents){
      res.writeHead(200,{'Content-type': 'images/jpg'});
      res.write(contents)
      res.end();
    })
  }else{
    res.end('File not found!!!')
  }
})

server.listen(port);

console.log(`Running on localhost at port ${port}`)