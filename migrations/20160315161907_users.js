var userTable = function(table) {
  table.string('id').primary();
  table.string('token');
  table.string('name');
  table.string('email');
  table.timestamps();
}

var taskTable = function(table){
  table.increment('id').primary();
  table.string('input');
  table.string('output');
  table.string('description');
  table.string('name');
  table.string('difficulty');
  table.string('tag');
  table.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', githubTable).create('project', projectTable);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user').dropTable('project');
};
