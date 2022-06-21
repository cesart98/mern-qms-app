var express = require('express');
var router = express.Router();
var inventory_controller = require('../controllers/inventoryController');

// GET inventory page.
router.get('/', inventory_controller.index);

// GET request to create batch.
router.get('/batch/create', inventory_controller.batch_create_get);

// POST request to create batch.
router.post('/batch/create', inventory_controller.batch_create_post);

// GET request to delete batch.
router.get('/batch/:id/delete', inventory_controller.batch_delete_get);

// POST request to delete batch.
router.post('/batch/:id/delete', inventory_controller.batch_delete_post);

// GET request to update batch.
router.get('/batch/:id/update', inventory_controller.batch_update_get);

// POST request to update batch.
router.post('/batch/:id/update', inventory_controller.batch_update_post);

// GET request for one batch.
router.get('/batch/:id', inventory_controller.batch_detail);

// GET request for list of all batches.
router.get('/batches', inventory_controller.inventory_list);

module.exports = router;
