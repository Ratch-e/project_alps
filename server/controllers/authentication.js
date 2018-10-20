const User = require('../models/user')

/**
 * Checks if an email and a password exist
 * 
 * @param {*} email 
 * @param {*} password 
 * @param {*} res 
 */
const checkCredentials = (email, password, res) => {
  if(!email || !password) {
    return res.status(422).send({error: 'You must provide an email and a password'});
  }
};

/**
 * Handles signup request
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
    if(err) { 
      return next(err) 
    }

    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use'});
    }

    //if everything is ok - create a new user and save it
    const newUser = new User({ email, password });
    newUser.save(err => err ? next(err) : res.json(newUser));
  });
};