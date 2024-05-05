const http = require('http');

// Create server object
http.createServer((req,res)=>{
    // Write reponse 
    res.write('Hello Word');
    res.end();
}).listen(5000, ()=> console.log('Web Server running.......'));