const http = require('http');
const fs = require('fs');
http.createServer(function(req,res){
  switch(req.url){
    case "/":
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Strona główna");
        res.end();
    break;
    case req.url==="/json":
        res.writeHead(200,{'Content-Type':'application/json'});
        fs.readFile('1.json','utf-8',(err,data=>{
          res.end(JSON.stringify(data));
        }))
    break;
    case req.url==="/html":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1>Lara top</h1>");
    break;
    case req.url==="/htmlFile":
        res.writeHead(200, {'Content-Type': 'text/plain'});

        fs.readFile('1.html','utf-8',(err,data)=>{
          res.write(data);
        })
        res.end();
    break;
  }
}).listen(8080);
