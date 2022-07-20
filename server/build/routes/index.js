"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _batchRouter = _interopRequireDefault(require("./batch.router.js"));

var _authRouter = _interopRequireDefault(require("./auth.router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/batches', _batchRouter["default"]);
router.use('/auth', _authRouter["default"]);
var _default = router;
exports["default"] = _default;