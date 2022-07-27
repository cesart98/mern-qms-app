"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _batch = _interopRequireDefault(require("../controllers/batch.controller"));

var _auth = _interopRequireDefault(require("../utils/auth.util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_auth["default"].authenticate('jwt', {
  session: false
}));
router.get('/', _batch["default"].readAllBatches);
router.get('/:batchId', _batch["default"].readBatch);
router.post('/', _batch["default"].createBatch);
router.put('/:batchId', _batch["default"].updateBatch);
router["delete"]('/:batchId', _batch["default"].deleteBatch);
var _default = router;
exports["default"] = _default;