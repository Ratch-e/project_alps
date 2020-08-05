const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../../config/config");

/**
 * Creates a token for a user
 *
 * @param {User} user
 */
const createToken = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

/**
 * Handles create new user request
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(422)
            .send({ error: "You must provide an email and a password" });
    }

    //checks if user already exist - reject, if not - save
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res
                .status(422)
                .send({ error: "This Email already is in use" });
        }

        //if everything is ok - create a new user and save it
        const newUser = new User({ email, password });
        newUser.save((err) =>
            err
                ? next(err)
                : res.json({
                      token: createToken(newUser),
                      email: newUser.email,
                  })
        );
    });
};

exports.login = (req, res) => {
    res.send({
        token: createToken(req.user),
        email: req.user.email,
    });
};
