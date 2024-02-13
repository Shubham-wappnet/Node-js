const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'textplain'})
    res.end("server is running");
});
server.listen(3000);