var dotenv = require('dotenv');

dotenv.load();

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
};
