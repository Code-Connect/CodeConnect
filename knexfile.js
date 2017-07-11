// Load environment variables from .env file
if (process.env.NODE_ENV !== "production")
    loadEnvironmentVariables();
function loadEnvironmentVariables() {
    let dotenv = require('dotenv');
    dotenv.load();
}

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host : 'localhost',
            user : process.env.LOCALDATABASE_USER,
            password :  process.env.LOCALDATABASE_PASSWORD,
            database : 'postgres'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
