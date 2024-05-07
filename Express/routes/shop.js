const express = require('express');
const router  = express.Router();
/* This code snippet is defining a route handler for a GET request to the root URL ("/") of the
application. When a GET request is made to the root URL, the callback function `(req, res, next) =>
{ ... }` will be executed. */
router.get('/', (req, res, next ) => {
    res.send(
        '<h1>Hello this is from shop page</h1>'
    );
});


module.exports = router;