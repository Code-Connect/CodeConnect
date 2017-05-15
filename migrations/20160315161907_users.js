var githubTable = function(table) {
  table.string('id').primary();
  table.string('token');
  table.string('name');
  table.string('email');
  table.timestamps();
}

var taskTable = function(table) {
  table.increments('id').primary();
  table.string('input');
  table.string('output');
  table.string('description');
  table.string('name');
  table.string('difficulty');
  table.string('tag');
  table.timestamps();
}

var participate = function(table) {
  table.integer('user_id').unique();
  table.integer('project_id').unique();
  table.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('github', githubTable).createTable('tasks', taskTable).createTable('participate', participate);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('github').dropTable('tasks').dropTable('participate');
};
