const http = require('http');

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;
    if( url === '/'){
        //... do something
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> Welcome to Home</title></header>');
        res.write('<body><p> Welcome to My Page </p> <form action="/create-user" method= "POST"> <input type="text" name="username"> <button type="submit"> Submit </button> </form> </body>');
        res.write('</html>');
        return res.end();
    }

    if( url === '/users'){
       res.setHeader('Content-Type', 'text/html');
       res.write('<html>');
        res.write('<header><title>User page</title></header>');
        res.write('<body> <ul> <li> User 1</li> <li> User 2</li> </ul> </body>');
        res.write('</html>');
        return res.end();
    }

    if( url === '/create-user'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]); // User details
        });

        res.statusCode = 302;
        res.setHeader('Localtion', '/');
        res.end();
    }
 
});

server.listen(3000);