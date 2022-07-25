"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _batch = _interopRequireDefault(require("../controllers/batch.controller"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use(function (req, res, next) {
  try {
    _passport["default"].authenticate('jwt', {
      session: false
    });

    next();
  } catch (err) {
    next(err);
  }
});
router.get('/', _batch["default"].readAllBatches);
router.get('/:batchId', _batch["default"].readBatch);
router.post('/', _batch["default"].createBatch);
router.put('/:batchId', _batch["default"].updateBatch);
router["delete"]('/:batchId', _batch["default"].deleteBatch);
var _default = router;
exports["default"] = _default;