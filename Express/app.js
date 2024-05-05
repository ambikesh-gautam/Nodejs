const express = require('express');
const app     = express();
app.use( (req, res, next ) => {
    res.sendFile('<h1> development </h1>');
    next();
});
app.listen(5000);