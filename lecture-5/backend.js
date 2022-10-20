const https= require('http');

const server= https.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<h1>hello world,i love my motherland. i am emrul hassan biplob</h1>');
        res.statusCode=200;
        res.end()
    }else{
        res.write("<h1>something is wrong yfdf mhjh</h1>");
        res.statusCode= 200;
        res.end()
    }
})

server.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})