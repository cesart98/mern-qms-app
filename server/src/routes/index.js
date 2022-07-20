import { Router } from 'express';
var router = Router();

import batchesRouter from './batch.router.js';
import authRouter from './auth.router.js';

router.use('/batches', batchesRouter);
router.use('/auth', authRouter);

export default router;
