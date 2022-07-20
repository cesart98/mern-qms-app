var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
require('./utils/mongoConfig.js');
require('./utils/passportConfig.js');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

module.exports = app;
