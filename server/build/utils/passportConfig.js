"use strict";

var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var passportJWT = require("passport-jwt");

var JWTStrategy = passportJWT.Strategy;
var ExtractJWT = passportJWT.ExtractJwt;
passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({
    username: username
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user || user.password !== password) {
      return done(null, false);
    }

    return done(null, user);
  });
}));
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'my_secret'
}, function (jwtPayload, done) {
  User.findOneById(jwtPayload.id), function (err, user) {
    if (err) {
      return done(err);
    }

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  };
}));