"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _batch = _interopRequireDefault(require("./batch.model"));

var _user = _interopRequireDefault(require("./user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  users: _user["default"],
  batches: _batch["default"]
};
exports["default"] = _default;