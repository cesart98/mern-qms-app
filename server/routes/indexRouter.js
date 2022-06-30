var express = require('express');
var router = express.Router();

var batchesRouter = require('./batchesRouter.js');

router.use('/batches', batchesRouter);

module.exports = router;
