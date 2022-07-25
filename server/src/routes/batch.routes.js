import { Router } from 'express';
import batchController from '../controllers/batch.controller';
import passport from 'passport';
const router = Router();

router.use((req, res, next) => {
  try {
    passport.authenticate('jwt', {session: false});
    next();
  } catch (err) {
    next(err)
  }
})

router.get('/', batchController.readAllBatches);

router.get('/:batchId', batchController.readBatch);

router.post('/', batchController.createBatch);

router.put('/:batchId', batchController.updateBatch);

router.delete('/:batchId', batchController.deleteBatch);

export default router;
