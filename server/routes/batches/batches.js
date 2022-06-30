var express = require('express');
var router = express.Router();

var models = require('../models');

router.get('/', async (req, res) => {
  const batches = await models.Batch.find();
  return res.json(batches);
});

router.post('/', async (req, res) => {
  const formProps = Object.fromEntries(req.body.formData.entries());
  const batch = await models.Batch.create(formProps);
  return res.send(`Created batch: ${batch}`);
});

router.get('/:batchId', async (req, res) => {
  const batch = await models.Batch.findById(req.params.batchId);
  return res.json(batch);
});

router.put('/:batchId', async (req, res) => {
  const updatedProps = Object.fromEntries(req.body.formData.entries());
  const batch = await models.Batch.findByIdAndUpdate(req.params.batchId, updatedProps);
  return res.send(`Updated specific batch: ${batch}`);
});

router.delete('/:batchId', async (req, res) => {
  const batch = await models.Batch.findByIdAndDelete(req.params.batchId);
  return res.send(`Deleted specific batch: ${batch}`);
});

module.exports = router;
