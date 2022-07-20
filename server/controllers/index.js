var batchController  = require('./batch.controller.js');
var userController = require('./user.controller.js')
var authController = require('./auth.controller.js')

const controllers = { batchController, userController, authController };

module.exports = controllers;