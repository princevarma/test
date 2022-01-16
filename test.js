//creating http server
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("<h2>This is response from server</h2>");
    res.end("ok bye bye...!");
}).listen(8081);

