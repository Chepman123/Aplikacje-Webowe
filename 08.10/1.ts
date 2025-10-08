const mime = require('mime-types');
const fs = require('fs');

if(fs.existsSync('x.html'))
{
    const html = mime.contentType('x.html');
    fs.writeFileSync('succes.txt',html);
    console.log(fs.readFileSync('succes.txt','utf-8'));
}
else
{
    let error = "404";
    fs.writeFileSync('error.json',error);
    console.log(fs.readFileSync('error.json','utf-8'));
}
