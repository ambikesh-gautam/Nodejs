const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
/**
app.use((req,res,next)=>{
    console.log('Hello first middle where');
    res.send('<h1> First Route In Next Js </h1>');
    res.next();
});
 */
// You can write this using default route

// app.use('/',(req,res,next)=>{
//     console.log('This always runs');
//     next();
// });
// app.use('/add-product', (req,res,next) =>{
//     console.log('This is add product');
//     res.send('<h1> This is add product middleware</h1>');
// });


/* The line `app.use(bodyParser.urlencoded({extended:false}));` is setting up middleware to parse
incoming request bodies before handling the routes. Specifically, it is configuring the middleware
to parse URL-encoded data and populate the `req.body` object with the parsed data. */
app.use(bodyParser.urlencoded({extended:false}));

/* This code snippet is setting up a middleware function for the route '/add-products'. When a request
is made to this route, the middleware function will be executed. In this case, the middleware
function sends a form back to the client with an input field for 'title' and a submit button. The
form action is set to '/product' with a POST method, indicating that when the form is submitted, the
data will be sent to the '/product' route for further processing. */
app.use('/add-products', (req, res, next ) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</submit> </form>');
});

/* This code snippet sets up a middleware function for the route '/product'. When a POST request is
made to this route, the middleware function is executed. */
app.use('/product', (req, res, next ) => {
    console.log(req.body);
    let input_value = req.body.title;
    console.log( input_value );
    res.redirect('/'); // This will redirect to the root of the route
});

/* The code snippet `app.use('/add-order', (req, res, next ) => { ... }` sets up a middleware function
for the route '/add-order'. When a request is made to this route, the middleware function is
executed. */
app.use('/add-order', (req, res, next ) =>{
    res.send('<form action="/order-added" method="POST"><input type="text" name="order_title"><button type="submit">Add Order</submit> </form>');
});
/* The code `app.get('/random.text', (req, res) => { res.send('random.text') })` sets up a route
handler for the GET request to the path '/random.text'. When a GET request is made to this route,
the server will respond by sending the text 'random.text' back to the client. This means that if you
navigate to 'http://localhost:3000/random.text' in your browser, you will see the text 'random.text'
displayed on the page. */
app.get('/random.text', (req, res) => {
res.send('random.text')
})
/* The code `app.use('/order-added', (req, res, next ) => { res.send('<h1> Thanks for purchasing from
oceanofthemes</h1>'); });` sets up a middleware function for the route '/order-added'. When a
request is made to this route, the middleware function is executed. In this case, it sends a
response back to the client with a heading 'Thanks for purchasing from oceanofthemes'. This message
will be displayed to the user who accesses the '/order-added' route in the browser. */
app.use('/order-added', (req, res, next ) =>{
    res.send('<h1> Thanks for purchaging from oceanofthemes</h1>');
});
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});
app.use('/', (req, res, next ) =>{
    res.send('<h1> Hello this is from Express.js</h1>');
});


//               
//               | // middleware will goes from top to buttom
//               |
//               
// app.use('/', (req,res,next) =>{
//     console.log('This is from first custom route');
//     res.send('<h1> Hell this is from custom route middleware</h1>');
//     next();
// });

app.listen(3000);

