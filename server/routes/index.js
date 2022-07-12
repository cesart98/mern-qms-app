var express = require('express');
var router = express.Router();

var batchesRouter = require('./batches.js');

router.use('/batches', batchesRouter);

module.exports = router;
