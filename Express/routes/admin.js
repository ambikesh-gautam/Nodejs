const express = require('express');
const router  = express.Router();
const path    = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) =>{
    res.sendFile(path.join( rootDir , 'views', 'add-product.html'));
});

/* `module.exports = router;` is exporting the router object so that it can be used in other parts of
the application. By assigning `router` to `module.exports`, the router object becomes available for
other modules to require and use it. This allows the defined routes and middleware in the router to
be utilized by the main application or other modules that require this router file. */
module.exports = router;