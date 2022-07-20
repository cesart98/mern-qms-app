import { Router } from 'express';
var router = Router();

import batchesRouter from './batch.routes.js';
import authRouter from './auth.routes.js';

router.use('/batches', batchesRouter);
router.use('/auth', authRouter);

export default router;
