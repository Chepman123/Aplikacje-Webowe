const http = require('http');
const fs = require('fs').promises;
const { URL, URLSearchParams } = require('url');

const url = new URL('https://Lara.com/?name=Lara&age=7');

const params = new URLSearchParams(url.search);

console.log(params.get('name'));

console.log(params.get('age'));

params.append('sname','Ivanovna');

console.log(params.get('sname'));

const user = {name:params.get('name'),age:params.get('age'),sname:params.get('sname')};

fs.writeFile('data.json',JSON.stringify(user),'utf8');

readFile('data.json',function(err,data)
{
  console.log(JSON.parse(data));
});

http.createServer(function(req,res)
{
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
