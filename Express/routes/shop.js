const express = require('express');
const router  = express.Router();
const path    = require('path');
/* This code snippet is defining a route handler for a GET request to the root URL ("/") of the
application. When a GET request is made to the root URL, the callback function `(req, res, next) =>
{ ... }` will be executed. */
router.get('/', (req, res, next ) => {
    // res.send(
    //     '<h1>Hello this is from shop page</h1>'
    // );
    /* `res.sendFile( path.join(__dirname, '../', 'views', 'shop.html') );` is a method call that sends
    the file specified by the path to the client in response to the HTTP request. In this case, it
    sends the 'shop.html' file located in the 'views' directory relative to the current file. The
    `path.join()` method is used to construct the absolute path to the 'shop.html' file by joining
    the directory names together. */
    res.sendFile( path.join(__dirname, '../', 'views', 'shop.html') );
});


module.exports = router;