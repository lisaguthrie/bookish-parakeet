// Create web server

var express = require('express');
var router = express.Router();

// Get the comments page
router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Comments' });
});

module.exports = router;