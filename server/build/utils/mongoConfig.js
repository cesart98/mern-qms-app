"use strict";

require('dotenv').config();

var mongoose = require('mongoose');

var mongoDb = process.env.ATLAS_URI;
mongoose.connect(mongoDb, {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));