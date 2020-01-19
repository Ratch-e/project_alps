const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const authentication = require("../controllers/authentication");
const passportService = require("../services/passport");

const router = express.Router();

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

mongoose.connect("mongodb://127.0.0.1:27017/Alps", { useNewUrlParser: true });

router.use((req, res, next) => {
  next();
});

router.route("/signup").post(authentication.signup);

router.route("/signin").post(requireSignin, authentication.signin);

module.exports = router;
