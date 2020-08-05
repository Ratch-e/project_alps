const passport = require("passport");
const User = require("../models/user");
const config = require("../../config/config");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const localStrategy = require("passport-local");

//Create local strategy
const localLogin = new localStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
) {
    //verify this email and password
    //call done if it is the correct email and password
    //otherwise, call done with false
    User.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (!user) {
            return done(null, false);
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                return done(err, false);
            }

            return isMatch ? done(null, user) : done(null, false);
        });
    });
});

//Login by jwt
const jwtOptions = {
    jwtFromRequest: extractJwt.fromHeader("auth"),
    secretOrKey: config.secret,
};
const jwtLogin = new jwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }

        return user ? done(null, user) : done(null, false);
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
