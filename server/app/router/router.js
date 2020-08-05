const express = require("express");
const passport = require("passport");
const { signup, login } = require("../controllers/authentication");
const photos = require("../controllers/photos");

//importing config for passort with strategies
require("../services/passport");
// const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

const router = express.Router();
router.use((req, res, next) => {
    next();
});

//auth
router.route("/signup").post(signup);
router.route("/login").post(requireLogin, login);

//photos
router.route("/photos/upload").post(photos.upload);

module.exports = router;
