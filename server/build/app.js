"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("./express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MONGO_URI = process.env.MONGO_URI;
var PORT = process.env.PORT;
var mongoOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

_mongoose["default"].connect(MONGO_URI, mongoOpts).then(function () {
  return _express["default"].listen(PORT);
}).then(function () {
  return console.log("Server is listening on port ".concat(PORT));
})["catch"](function (err) {
  return console.error(err.stack);
});