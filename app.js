var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/indexRouter');
var inventoryRouter = require('./routes/inventoryRouter');
var usersRouter = require('./routes/usersRouter');

var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.ATLAS_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/inventory', inventoryRouter);
app.use('/users', usersRouter);

module.exports = app;
