var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.addProject = function(req, res) {
  knex('projects').insert({project_id: req.body.project_id, name: req.body.name}).then(() => {
    knex('isMentor').insert({user_id: req.user.github.id, project_id: req.body.project_id}).then(() => {
      res.json({success: true});
    });
  });
}

exports.addTask = function(req, res) {
  knex('tasks').insert({name: req.body.name}).returning('task_id').then((task_id) => {
    knex('belongsTo').insert({user_id: req.user.github.id, task_id: task_id[0]}).then(() => {
      res.json({success: true, task_id: task_id[0]});
    });
  });
}
