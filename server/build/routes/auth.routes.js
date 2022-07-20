"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers'),
    authController = _require.authController;

router.post('/login', authController.login);
module.exports = router;