"use strict";

var batchController = require('./batch.controller.js');

var userController = require('./user.controller.js');

var authController = require('./auth.controller.js');

var controllers = {
  batchController: batchController,
  userController: userController,
  authController: authController
};
module.exports = controllers;