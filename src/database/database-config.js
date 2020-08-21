/* eslint-disable no-nested-ternary */
const mongoDBURL = process.env.NODE_ENV.toLowerCase() === 'prod'
  ? process.env.URL_DATABASE_PROD
  : process.env.NODE_ENV.toLowerCase() === 'homolog'
    ? process.env.URL_DATABASE_HOMOLOG
    : process.env.URL_DATABASE_DEVELOPMENT;

module.exports = {
  mongoDBURL,
};
