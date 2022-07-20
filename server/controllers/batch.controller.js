var { batchModel } = require('../models');

exports.readAllBatches =  async (req, res) => {
  try {
    const batches = await batchModel.find();
    return res.status(200).json(batches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.readBatch = async (req, res) => {
  try {
    const batch = await batchModel.findById(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createBatch = async (req, res) => {
  try {
    const batch = await batchModel.create(req.body);
    return res.status(201).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateBatch = async (req, res) => {
  try {
    const batch = await batchModel.findByIdAndUpdate(req.params.batchId, req.body);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteBatch = async (req, res) => {
  try {
    const batch = await batchModel.findByIdAndDelete(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};