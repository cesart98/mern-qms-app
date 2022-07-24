"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _batch = _interopRequireDefault(require("./batch.routes"));

var _auth = _interopRequireDefault(require("./auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  users: _auth["default"],
  batches: _batch["default"]
};
exports["default"] = _default;