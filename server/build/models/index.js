"use strict";

var batchModel = require('./batch.model.js');

var userModel = require('./user.model.js');

var models = {
  batchModel: batchModel,
  userModel: userModel
};
module.exports = models;