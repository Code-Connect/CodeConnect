var dotenv = require('dotenv');

dotenv.load();

// module.exports = {
//   client: 'pg',
//   connection: process.env.DATABASE_URL
// };

module.exports = {
  client: 'pg',
  connection: {
    host : 'localhost',
    user : process.env.LOCALDATABASE_USER,
    password :  process.env.LOCALDATABASE_PASSWORD,
    database : 'postgres'
  }
};
