import express from 'express';
const router = express.Router();
import authController from '../controllers/auth.controller';
import passport from '../utils/auth.util';

router.post('/login', 
  passport.authenticate('local', {session: false}), 
  authController.getToken
);

export default router;