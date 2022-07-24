"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _batchController = _interopRequireDefault(require("./batch.controller.js"));

var _userController = _interopRequireDefault(require("./user.controller.js"));

var _authController = _interopRequireDefault(require("./auth.controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  batchController: _batchController["default"],
  userController: _userController["default"],
  authController: _authController["default"]
};
exports["default"] = _default;