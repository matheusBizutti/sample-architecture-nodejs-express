const https = require('https');
const debug = require('./log/log');
const app = require('./app');
const { httpsOptions } = require('./https-config/https-config');

const port = process.env.PORT || 3000;

const debugServer = debug('app:server');

if (process.env.NODE_ENV === 'local') {
  https.createServer(httpsOptions, app).listen(port, () => {
    debugServer(`Sample server is running with https on port: ${port}`);
  });
} else {
  app.listen(port, () => {
    debugServer(`Sample server is running on port ${port}`);
  });
}
