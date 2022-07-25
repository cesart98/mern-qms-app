"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _batch = _interopRequireDefault(require("./routes/batch.routes"));

require("./utils/database.util");

var _auth2 = _interopRequireDefault(require("./utils/auth.util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])());
app.use(_auth2["default"].initialize());
app.use('/api/users', _auth["default"]);
app.use('/api/batches', _batch["default"]);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json("Error: ".concat(err.message));
});
app.listen(process.env.PORT, function () {
  console.log('Listening on port 3000');
});
var _default = app;
exports["default"] = _default;