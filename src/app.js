const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/api/routes');

const app = express();

// - MongoDB Connection
require('./database/database-start');

app.use(express.static('public'));
app.use(express.static('api'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;
