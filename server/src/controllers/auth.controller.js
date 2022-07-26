import jwt from 'jsonwebtoken'

let controller = {};

controller.getToken = async (req, res, next) => {
  try {
    const user = req.user;
    const token = jwt.sign({sub: req.user}, 'JWT_SECRET');
    return res.status(200).json({user, token});
  } catch (err) {
    return next(err);
  }
}

export default controller;