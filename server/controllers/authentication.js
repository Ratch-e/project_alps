const User = require('../models/user')

const checkCredentials = (email, password, res) => {
  if(!email || !password) {
    return res.status(422).send({error: 'You must provide an email and a password'});
  }
};

exports.signup = (req, res, next) => {
  //get password and email
  const email = req.body.email;
  const password = req.body.password;

  //chack if they are good
  checkCredentials(email, password, res);

  //check if exist - reject, if not - save
  User.findOne({ email: email }, (err, existingUser) => {
    if(err) { 
      return next(err) 
    }

    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use'});
    }

    const user = new User({ email, password });

    user.save(err => err ? next(err) : res.json(user));
  });
};