"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth.controller"));

var _auth2 = _interopRequireDefault(require("../utils/auth.util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/login', _auth2["default"].authenticate('local', {
  session: false
}), _auth["default"].getToken);
var _default = router;
exports["default"] = _default;