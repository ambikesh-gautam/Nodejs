const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
/* The lines `const adminRoute = require('./routes/admin');` and `const shopRoute =
require('./routes/shop');` are importing external modules or files in the Node.js application. In
this case, the application is requiring two separate files, `admin.js` and `shop.js`, located in the
`routes` directory. */
const adminRoute = require('./routes/admin');
const shopRoute  = require('./routes/shop');
/* The line `app.use(bodyParser.urlencoded({ extended: false }));` is setting up middleware in Express
to parse incoming request bodies encoded in URL-encoded format. */
app.use(bodyParser.urlencoded({ extended: false }));

/* The lines `app.use(adminRoute);` and `app.use(shopRoute);` are mounting the specified route handlers
on the specified path. In this case, the `adminRoute` and `shopRoute` are middleware functions or
routers that handle specific sets of routes. */
// app.use(adminRoute);
/**
 * How to add separate routes if the route is already mounted.
 * todo: We can probably /<new route name>
 */

/* `app.use('/admin', adminRoute);` is mounting the `adminRoute` middleware on the path '/admin'. This
means that any incoming requests to paths starting with '/admin' will be handled by the `adminRoute`
middleware. This allows for organizing and separating routes based on their functionality or purpose
within the application. */
app.use('/admin', adminRoute);
app.use(shopRoute);

/* This code snippet is creating a middleware function in Express that will be executed for all
incoming requests that do not match any of the defined routes. When a request reaches this
middleware, it sets the HTTP status code to 404 (Not Found) and sends a response with the message
'Oops 404 Not Found'. This is a way to handle requests for routes that are not defined in the
application. */
app.use((req,res,next)=>{
    res.status(404).send('Oops 404 Not Found');
});
app.listen(3000);