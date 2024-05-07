const express = require('express');
const router = express.Router();
/* This code snippet defines a route using the GET method for the path '/add-product'. When a GET
request is made to this route, it sends back an HTML form as a response. The form has a text input
field with the name 'add_product' and a submit button labeled 'Add Product'. The form is set to
submit a POST request to the '/product' route with the enctype attribute set to 'multipart'. */
router.get('/add-product', (req, res) => {
    res.send(
        '<form method="post" action="/admin/product" enctype="multipart"><input type="text" name="add_product"><button type="submit">Add Product</button></form'
    );
});

/* The code snippet `router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/product-added');
    next();
    return true;
});` defines a route using the POST method for the path '/product'. When a POST request is made to
this route, it logs the data sent in the request body using `console.log(req.body)`. */
router.post('/admin/product', (req, res) => {
    console.log(req.body);
    res.redirect('/admin/product-added');
    next();
    return true;
});
/* The code snippet `router.get('/product-added', (req, res) => {
    res.send('<h1>Product Added</h1>');
});` defines a route using the GET method for the path '/product-added'. When a GET request is made
to this route, it sends back an HTML response that contains a heading element `<h1>` with the text
'Product Added'. This response is displayed in the browser when the '/product-added' route is
accessed. */
router.get('/admin/product-added', (req, res) => {
    res.send('<h1>Product Added</h1>');
});

/* `module.exports = router;` is exporting the router object so that it can be used in other parts of
the application. By assigning `router` to `module.exports`, the router object becomes available for
other modules to require and use it. This allows the defined routes and middleware in the router to
be utilized by the main application or other modules that require this router file. */
module.exports = router;