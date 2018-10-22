const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

//Setup for JWT Strategy
const jwtOptions = {};

//Login by jwt
const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if(err) {
      return done(err, false);
    }

    return user ? done(null, user) : done(null, false);
  });
});