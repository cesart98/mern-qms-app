import { Router } from 'express';
import db from '../utils/database.util'

const router = Router();

const Batch = db.model('Batch')

router.get('/', async (req, res, next) => {
  try {
    const batches = await Batch.find();
    return res.status(200).json(batches);
  } catch (err) {
    return next(err);
  }
});

router.get('/:batchId', async (req, res, next) => {
  try {
    const batch = await Batch.findById(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(201).json(batch);  
  } catch (err) {
    return next(err);
  }
});

router.put('/:batchId', async (req, res, next) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.batchId, req.body);
    return res.status(200).json(batch);  
  } catch (err) {
    return next(err);
  }
});

router.delete('/:batchId', async (req, res, next) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.batchId);
    return res.status(200).json(batch);  
  } catch (err) {
    return next(err);
  }
});

export default router;
