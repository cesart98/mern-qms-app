var express = require('express');
var router = express.Router();
var { batchController } = require('../controllers')

router.get('/', batchController.readAllBatches);

router.get('/:batchId', batchController.readBatch);

router.post('/', batchController.createBatch);

router.put('/:batchId', batchController.updateBatch);

router.delete('/:batchId', batchController.deleteBatch);

module.exports = router;
