const express = require('express');

const api = require('./v1/apis');

const router = express.Router();

router.use('/api/v1', api);

module.exports = router;
