const fs = require('fs');

const httpsOptions = {
  key: fs.readFileSync(`${__dirname}/certificates/key.pem`),
  cert: fs.readFileSync(`${__dirname}/certificates/cert.pem`),
  passphrase: process.env.PASSPHRASE,
  requestCert: false,
  rejectUnauthorized: false
};

module.exports = { httpsOptions };
