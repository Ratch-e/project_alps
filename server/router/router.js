const express = require("express");
const passport = require("passport");
const authentication = require("../controllers/authentication");

//importing config for passort with strategies
require("../services/passport");

const router = express.Router();

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

router.use((req, res, next) => {
  next();
});

router.route("/signup").post(authentication.signup);

router.route("/login").post(requireLogin, authentication.login);

module.exports = router;
