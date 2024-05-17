const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/admin-page', (req, res, next ) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'admin-page.html') );
});

module.exports = router;