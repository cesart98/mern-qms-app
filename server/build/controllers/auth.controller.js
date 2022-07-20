"use strict";

var jwt = require('jsonwebtoken');

var passport = require('passport');

var _require = require('../models'),
    batchModel = _require.batchModel;

exports.login = function (req, res) {
  passport.authenticate('local', {
    session: false
  }, function (err, user) {
    try {
      var token = jwt.sign(user, 'my_secret');
      return res.status(200).json({
        user: user,
        token: token
      });
    } catch (_unused) {
      return res.status(400).json({
        err: err
      });
    }
  });
};