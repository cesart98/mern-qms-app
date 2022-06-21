var Inventory = require('../models/inventory')

exports.index = function(req, res) {
  res.send('NOT IMPLEMENTED: Inventory Home Page')
};

// Display entire inventory.
exports.inventory_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch list');
};

// Display page for specific batch.
exports.batch_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch detail: ' + req.params.id);
};

// Display batch create form on GET
exports.batch_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch create GET');
};

// Handle batch create on POST
exports.batch_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch create POST');
};

// Display batch delete form on GET
exports.batch_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch delete GET');
};

// Handle batch delete on POST
exports.batch_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch delete POST');
};

// Display batch update form on GET
exports.batch_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch update GET');
};

// Handle batch update on POST
exports.batch_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Batch update POST');
};