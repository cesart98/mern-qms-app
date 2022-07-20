var jwt = require('jsonwebtoken');
var passport = require('passport');
var { batchModel } = require('../models');

exports.login = (req, res) => {

  passport.authenticate('local', {session: false}, (err, user) => {
    try {
      const token = jwt.sign(user, 'my_secret');
      return res.status(200).json({ user, token });
    } catch {
      return res.status(400).json({ err });
    }
  }) 
}