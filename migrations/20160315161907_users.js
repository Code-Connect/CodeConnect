var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

var githubTable = function(table) {
  table.integer('id').primary();
  table.string('token');
  table.string('name');
  table.string('email');
  table.timestamps();
};

var gitterTable = function(table) {
  table.string('id').primary();
  table.string('token');
  table.timestamps();
};

var taskTable = function(table) {
  table.increments('task_id').primary();
  table.string('input',2000).defaultTo('Add input');
  table.string('output',2000).defaultTo('Add output');
  table.string('description',2000).defaultTo('Add description');
  table.string('name',2000).defaultTo('Add projectname');
  table.string('difficulty',2000).defaultTo('NA');
  table.integer('attempts').defaultTo(0);
  table.specificType('tags', 'jsonb[]').defaultTo('{}');
  table.timestamps()
};

var projectTable = function(table){
  table.integer('project_id').primary();
  table.string('name').defaultTo('NA');
  table.string('chatroom',500).defaultTo('Add chatroom');
  table.string('description',2000).defaultTo('Add description');
  table.string('repourl');
  table.timestamps();
};

var participate = function(table) {
  table.integer('user_id').references('github.id');
  table.integer('task_id').references('tasks.task_id');
  table.timestamps();
};

var hasTask = function(table){
  table.integer('project_id').references('projects.project_id');
  table.integer('task_id').references('tasks.task_id');
  table.timestamps();
};

var isMentor = function(table){
  table.integer('user_id').references('github.id');
  table.integer('project_id').references('projects.project_id');
  table.timestamps();
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('github', githubTable).createTable('gitter', gitterTable)
      .createTable('tasks', taskTable).createTable('participate', participate)
      .createTable('projects', projectTable).createTable('hasTask', hasTask)
      .createTable('isMentor', isMentor);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('participate').dropTableIfExists('isMentor')
      .dropTableIfExists('hasTask').dropTableIfExists('github')
      .dropTableIfExists('tasks').dropTableIfExists('gitter')
      .dropTableIfExists('projects').dropTableIfExists('sessions');
};
