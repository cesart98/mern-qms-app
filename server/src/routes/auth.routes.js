import { Router } from 'express';
const router = Router();
import authController from '../controllers/auth.controller';
import passport from '../utils/auth.util';

router.use(passport.authenticate('local', {session: false}));

router.post('/login', authController.login);

export default router;