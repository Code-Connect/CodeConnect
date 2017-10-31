var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.updateTask = function(req, res) {
  knex('tasks').where('task_id', '=', req.body.task.task_id).update(req.body.task).then(() => {
    res.json({success: true}); // respond back to request
  });
}

exports.addTask = function(req, res) {
  knex('tasks').insert({name: req.body.name}).returning('task_id').then((task_id) => {
    knex('hasTask').insert({task_id: task_id[0], project_id: req.params.id}).then(() => {
      res.json({success: true, task_id: task_id[0]});
    });
  });
}

exports.getTasks = function() {
  return knex.select('task_id', 'input', 'output', 'description', 'name', 'difficulty', 'tags', 'attempts').from('tasks');
}

//TODO rename getTask into getTasks
exports.getTask = function(req, res) {
  return knex.select('tasks.task_id', 'input', 'output', 'description', 'name', 'difficulty', 'tags', 'attempts').from('tasks').join('hasTask', function() {
    this.on('tasks.task_id', '=', 'hasTask.task_id')
  }).where('hasTask.project_id', '=', req.params.id).then((item) => {
    res.json({success: true, tasks: item});
  });
}

exports.deleteTask = function(req, res) {
  knex('hasTask').where('task_id', req.params.task_id).del().then(() => {
    knex('tasks').where('task_id', req.params.task_id).del().then(() => {
      res.json({success: true});
    });
  });
}

exports.participateTask = function(req, res) {
  knex('participate').insert({task_id: req.body.task_id, user_id: req.user.github.id}).then((task_id) => {
    res.json({success: true});
  });
}

exports.getParticipants = function(req, res) {
  //TODO Participate return all the participants as user
  return knex.select('sdd').from('participants');
}
