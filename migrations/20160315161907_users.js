var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

var githubTable = function(table) {
  table.integer('id').primary();
  table.string('token');
  table.string('name');
  table.string('email');
  table.timestamps();
}

var taskTable = function(table) {
  table.increments('id').primary();
  table.string('input').defaultTo('Add input');
  table.string('output').defaultTo('Add output');
  table.string('description').defaultTo('Add description');
  table.string('name').defaultTo('Add projectname');
  table.string('difficulty').defaultTo('NA');
  table.integer('attempts').defaultTo(0);
  table.specificType('tags', 'jsonb[]').defaultTo('{}');
  table.timestamps()
}

var participate = function(table) {
  table.integer('user_id').references('github.id');
  table.integer('task_id').references('tasks.id');
  table.timestamps();
}

var belongsTo = function(table) {
  table.integer('user_id').references('github.id');
  table.integer('task_id').references('tasks.id');
  table.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('github', githubTable).createTable('tasks', taskTable).createTable('participate', participate).createTable('belongsTo', belongsTo);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('participate').dropTable('belongsTo').dropTable('github').dropTable('tasks');
};
