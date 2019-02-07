const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

/**
 * creates a token for a user
 *
 * @param {*} user
 */
const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

/**
 * Checks if an email and a password exist
 *
 * @param {*} email
 * @param {*} password
 * @param {*} res
 */
const checkCredentials = (email, password, res) => {
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and a password' });
  }
};

/**
 * Handles create new user request
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.signup = (req, res, next) => {
  //gets a password and an email strings
  const email = req.body.email;
  const password = req.body.password;

  //checks if they are good
  checkCredentials(email, password, res);

  //checks if user already exist - reject, if not - save
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    //if everything is ok - create a new user and save it
    const newUser = new User({ email, password });
    newUser.save(err => 
      (err ?
        next(err) :
        res.json(
          {
            token: tokenForUser(newUser),
          }
        )
      )
    );
  });
};

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
}
