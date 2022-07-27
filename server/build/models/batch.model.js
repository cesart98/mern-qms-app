"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BatchSchema = new _mongoose["default"].Schema({
  id: {
    type: String,
    required: true
  },
  material_id: {
    type: String,
    required: true
  },
  material_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  quantity_total: {
    type: String,
    required: true
  },
  date_recieve: {
    type: String,
    required: true
  },
  date_expire: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['Pending Inspection', 'Pending Sampling', 'Pending Testing', 'Pending Review', 'Pending Release', 'Released'],
    "default": 'Pending Inspection'
  }
});
BatchSchema.virtual('url').get(function () {
  return '/inventory/batch/' + this._id;
});

var _default = _mongoose["default"].model('Batch', BatchSchema);

exports["default"] = _default;