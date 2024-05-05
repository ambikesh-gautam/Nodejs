const http = require('http');
const fs   = require('fs');

const server = http.createServer((req, res )=>{
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    const method = req.method;
    if( '/' === url ){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> My First route </title></header');
        res.write('<body><h1> Hello from note route </h1> <form action="/message" method="POST"> <input type="text" name="input_text"> <button type="submit">submit</button></form> </body>');
        res.write('</html>');
        return res.end();
    }

    if( 'POST' === method && url == '/message' ) {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message ); // Here if you see you're trying to write in the file asynchronously
            // what if you want to write file without sync
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // res.statusCode = 302;
            // res.setHeader('Localtion', '/');
            // return res.end();

        });
        // fs.writeFileSync('message.txt', 'DUMMY');
        // res.statusCode = 302;
        // res.setHeader('Localtion', '/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> My First Page </title> </header');
    res.write('<body><h1> Hello from Node js sever ! </h1> </body>');
    res.write('</html>');
    res.end();
});

server.listen( 3000 ); 
