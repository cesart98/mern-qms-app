import db from '../utils/database.util'
import { Strategy as jwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';

const User = db.model('User')

passport.use('jwt', new jwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'JWT_SECRET',
  algorithms: ['RS256']
}, async (payload, done) => {
  try {
    const user = await User.findOne({_id: payload.sub});
    if (!user) { throw new Error('No user that matches id') }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}))

export default passport