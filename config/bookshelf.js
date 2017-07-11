let env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
var config = require('../knexfile');
var knex = require('knex')(config[env]);
var bookshelf = require('bookshelf')(knex);

//bookshelf.plugin('virtuals');
//bookshelf.plugin('visibility');

//knex.migrate.latest();

module.exports = bookshelf;
