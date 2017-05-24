var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.updateTask = function(req, res) {
  knex('tasks').where('task_id', '=', req.body.task.task_id).update(req.body.task).then(() => {
    res.json({success: true, message: 'ok'}); // respond back to request
  });
}

exports.addTask = function(req, res) {
  knex('tasks').insert({name: req.body.name}).returning('task_id').then((task_id) => {
    knex('belongsTo').insert({user_id: req.user.github.id, task_id: task_id[0]}).then(() => {
      res.json({success: true, task_id: task_id[0]});
    });
  });
}

exports.getTasks = function() {
  return knex.select('task_id', 'input', 'output', 'description', 'name', 'difficulty', 'tags', 'attempts').from('tasks');
}

exports.deleteTask = function(req, res) {
  knex('belongsTo').where('task_id', req.body.task_id).del().then(() => {
    knex('tasks').where('task_id', req.body.task_id).del().then(() => {
      res.json({success: true});
    });
  });
}
