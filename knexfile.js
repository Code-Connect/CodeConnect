// Load environment variables from .env file
if (process.env.NODE_ENV !== "production")
    loadEnvironmentVariables();
function loadEnvironmentVariables() {
    let dotenv = require('dotenv');
    dotenv.load();
}
let env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

let knexfile = {
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
        client: 'mssql',
        connection: {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
            options: {
                encrypt: true,
            },
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
module.exports = knexfile[env];
