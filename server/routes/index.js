var express = require('express');
var router = express.Router();

var batchesRouter = require('./batches.js');
var authRouter = require('./auth.js');

router.use('/batches', batchesRouter);
router.use('/auth', authRouter);

module.exports = router;
