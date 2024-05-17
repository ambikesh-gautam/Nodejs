const express    = require('express');
const app        = express();
const path       = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const homeRoute  = require('./routes/home');
const addUser    = require('./routes/user');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoute);
app.use( '/user', addUser );
app.use(homeRoute);
app.use((req,res,next)=>{
    // res.status(404).send('Oops 404 Not Found');
    res.status(400).sendFile(path.join(__dirname, 'views', '404.html') );
});
app.listen(5000);