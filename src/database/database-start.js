const mongoose = require('mongoose');
const { mongoDBURL } = require('./database-config');

const debug = require('../log/log');

const debugDataBaseStart = debug('app:database-start');

const options = {
  poolSize: 5,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoDBURL, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
  debugDataBaseStart('Connection error: ', err);
});

mongoose.connection.on('disconnected', (err) => {
  debugDataBaseStart('Application disconnected: ', err);
});

mongoose.connection.on('connected', () => {
  debugDataBaseStart('Application connected in database.');
});

// Fired when the process is closed, so mongoose connection needs to be closed
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    debugDataBaseStart('Application is disconnected due to application termination.');
    process.exit(0);
  });
});

module.exports = mongoose;
