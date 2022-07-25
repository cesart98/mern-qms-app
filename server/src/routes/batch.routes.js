import { Router } from 'express';
import batchController from '../controllers/batch.controller';
import passport from '../utils/auth.util';
const router = Router();

router.use(passport.authenticate('jwt', {session: false}))

router.get('/', batchController.readAllBatches);

router.get('/:batchId', batchController.readBatch);

router.post('/', batchController.createBatch);

router.put('/:batchId', batchController.updateBatch);

router.delete('/:batchId', batchController.deleteBatch);

export default router;
