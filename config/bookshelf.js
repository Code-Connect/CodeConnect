var config = require('../knexfile');
var knex = require('knex')(config);
var DB = require('bookshelf')(knex);

//bookshelf.plugin('virtuals');
//bookshelf.plugin('visibility');

//knex.migrate.latest();

module.exports.DB = DB;
