import { Router } from 'express';
import jwt from 'jsonwebtoken';
import db from '../utils/database.util'

const router = Router();

const User = db.model('User')

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({username: username});
    if (!user || user.password !== password) {
      throw new Error('Incorrect username or password')
    }
    const id = await user._id;
    const token = jwt.sign({sub: id}, 'JWT_SECRET');
    res.status(200).json({user, token});
  } catch (err) {
    next(err);
  }
});

export default router;