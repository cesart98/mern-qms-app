import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import db from '../utils/database.util'
const userModel = db.model('User');

let controller = {};

controller.login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({username: req.body.username});
    if (!user || user.password !== req.body.password) {
      throw new Error('Incorrect username or password')
    }
    const id = await user._id;
    const token = jwt.sign({sub: id}, 'JWT_SECRET');
    res.status(200).json({user, token});
  } catch (err) {
    next(err);
  }
}

export default controller;