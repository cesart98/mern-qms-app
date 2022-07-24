import 'dotenv/config'
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import routes from './routes'

const app = express();

import './utils/database.util';


import db from './utils/database.util'
import { Strategy as jwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';
const User = db.model('User')


passport.use(new jwtStrategy({
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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', routes.users);
app.use('/api/batches', passport.authenticate('jwt', {session: false}), routes.batches)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json(`Error: ${err.message}`);
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3000')
})

export default app;
