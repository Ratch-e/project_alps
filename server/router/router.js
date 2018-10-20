const express = require('express');
const mongoose = require('mongoose');
const authentication = require('../controllers/authentication');

const router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017/DBAlps', { useNewUrlParser: true });

router.use((req, res, next) => {
  next();
});

router.route('/signup')
  .post(authentication.signup)

module.exports = router;