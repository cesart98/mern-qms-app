"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers'),
    batchController = _require.batchController;

router.get('/', batchController.readAllBatches);
router.get('/:batchId', batchController.readBatch);
router.post('/', batchController.createBatch);
router.put('/:batchId', batchController.updateBatch);
router["delete"]('/:batchId', batchController.deleteBatch);
module.exports = router;