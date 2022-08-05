import Batch from '../models/batch.model';

let controller = {};

controller.readAllBatches =  async (req, res) => {
  try {
    const batches = await Batch.find();
    return res.status(200).json({batches});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

controller.readBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.batchId);
    return res.status(200).json({batch});  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

controller.createBatch = async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(201).json({batch});  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

controller.updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.batchId, req.body);
    return res.status(200).json({batch});  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

controller.deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.batchId);
    return res.status(200).json({batch});  
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default controller;