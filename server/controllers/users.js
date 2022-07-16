var jwt = require('jsonwebtoken');
var passport = require('passport');
var { User } = require('../models');

exports.login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if ( err || !user ) {
      return res.status(400).json({ message: 'Incorrect email or password' })
    }
    req.login(user, { session: false }, (err) => {
      if (err) { 
        res.send(err); 
      }
      const token = jwt.sign(user, 'my_secret');
      return res.json({user, token});
    });
  });
};