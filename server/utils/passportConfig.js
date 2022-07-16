const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }), (err, user) => {
      if (err) { 
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    }
  })
)

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'my_secret',
  }, (jwtPayload, done) => {
    User.findOneById(jwtPayload.id), (err, user) => {
      if (err) { 
        return done(err);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  })
)