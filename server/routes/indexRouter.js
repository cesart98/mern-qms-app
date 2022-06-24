var express = require('express');
var router = express.Router();

/* redirect to dashboard */
router.get('/', function(req, res, next) {
  res.redirect('/dashboard')
});

router.get('/dashboard', function(req, res, next) {
  res.send('dashboard')
});

router.get('/training', function(req, res, next) {
  res.send('training')
});

router.get('/performance', function(req, res, next) {
  res.send('performance')
});

module.exports = router;
