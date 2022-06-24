var express = require('express');
var router = express.Router();
var inventory_controller = require('../controllers/inventoryController');
var batch_controller = require('../controllers/batchController');

router.get('/', inventory_controller.index);

router.get('/batch-list', inventory_controller.read);

router.post('/batch', batch_controller.create);

router.get('/batch/:batchId', batch_controller.read);

router.put('/batch/:batchId', batch_controller.update);

router.delete('/batch/:batchId', batch_controller.delete);

module.exports = router;
