import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
const userModel = mongoose.model('User')

const authController = {
  login: (req, res, next) => {
    userModel.findOne({username: req.body.username})
      .then((user) => jwt.sign({id: user}, "JWT_SECRET"))
      .then((token) => res.status(200).json({ token: token }))
      .catch(next(err))
  }
}

export default authController;