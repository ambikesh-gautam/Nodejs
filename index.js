const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer((req,res)=>{
    // if( req.url==='/'){
    //     fs.readFile(path.join(__dirname,'public', 'index.html'), (error, content)=>{
    //         res.writeHead(200, {'Content-type':'text/html'});
    //         res.end(content);
    //     });
    // }
    // if( req.url==='/about'){
    //     fs.readFile(path.join(__dirname,'public', 'about.html'), (error, content)=>{
    //         res.writeHead(200, {'Content-type':'text/html'});
    //         res.end(content);
    //     });
    // }

    // if(req.url==='api/users'){
    //     const users = [
    //         {name:'Bob smith', age:40},
    //         {name:'Ambikesh', age:22},
    //     ];
    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }
    
    /**
     * Make the file path dynamic
     */
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url );
   
    // Extention of the file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and content type. 

    switch(extname){
        case '.js' :
            contentType = 'text/javascript';
        case '.css' :
            contentType = 'text/css';
        case '.json':
            contentType = 'application/json';
        case '.png':
            contentType = 'image/png';
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // console.log(filePath);
    // filePath = '/home/cedcoss/NodeCrashCourse/Day1/public/index.html';
    // Read file
    fs.readFile(filePath, (err,content)=>{
        if(err){
            console.log(`There was some error on ${err}`);
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public','404.html'),(error,content)=>{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    return res.end(content,'utf8');
                });
            }else{
                // Some server error
                res.writeHead(500);
              return res.end(`Server Error : ${err.code}`);
            }
        }else{
            // Success
           res.writeHead(200, {'Content-Type':contentType});
           return res.end(content,'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`Server running on post ${PORT}`));