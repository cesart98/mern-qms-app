var express = require('express');
var router = express.Router();

var { Batch } = require('../models');

// GET all batches
router.get('/', async (req, res) => {
  try {
    const batches = await Batch.find();
    return res.status(200).json(batches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//GET specific batch
router.get('/:batchId', async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(201).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.put('/:batchId', async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.batchId, req.body);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.delete('/:batchId', async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
