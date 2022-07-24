"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userModel = _mongoose["default"].model('User');

var authController = {
  login: function login(req, res, next) {
    userModel.findOne({
      username: req.body.username
    }).then(function (user) {
      return _jsonwebtoken["default"].sign({
        id: user
      }, "JWT_SECRET");
    }).then(function (token) {
      return res.status(200).json({
        token: token
      });
    })["catch"](next(err));
  }
};
var _default = authController;
exports["default"] = _default;