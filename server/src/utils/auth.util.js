import db from '../utils/database.util'
import { Strategy as jwtStrategy } from 'passport-jwt';
import { Strategy as localStrategy } from 'passport-local';
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';

const User = db.model('User')

passport.use('local', new localStrategy({
  session: false,
  passReqToCallback: true
}, async (req, username, password, done) => {
  try {
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    if (!user) { throw new Error('Incorrect username or password') }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}))

passport.use('jwt', new jwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'JWT_SECRET'
}, async (payload, done) => {
  try {
    const user = await User.findOne({_id: payload.sub});
    if (!user) { throw new Error('No user that matches id') }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}))

export default passport;