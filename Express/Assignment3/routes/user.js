const express = require('express');
const router  = express.Router();
const path    = require('path');
const bodyParser = require('body-parser');
router.get('/add-user', (req, res, next ) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});
router.get('/added', (req, res, next ) => {
    res.sendFile(__dirname, '../, ', 'views', 'added.html');
});
module.exports = router;