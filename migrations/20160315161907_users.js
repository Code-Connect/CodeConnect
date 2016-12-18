exports.up = function(knex, Promise) {
  return knex.schema.createTable('github', function(table) {
    table.string('id').primary();
    table.string('token');
    table.string('name');
    table.string('email');
  }).createTable('project', function(table) {
    table.string('project_id').primary();
    table.string('name');
    table.string('contributor').unique().references('github.id');
    table.string('mentor_id').unique().references('github.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('github')
    .dropTable('project');
};
