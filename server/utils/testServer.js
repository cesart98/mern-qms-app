var mongoose = require('mongoose');
var { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports.connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true });
  require('../populate-db.js');
};

module.exports.disconnect = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
};