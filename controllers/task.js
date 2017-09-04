var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.updateTask = function(req, res) {
  console.log(req.body.task);
  knex('tasks').where('task_id', '=', req.body.task.task_id).update(req.body.task).then(() => {
    res.json({success: true}); // respond back to request
  });
}

exports.addTask = function(req, res) {
  knex('tasks').insert({name: req.body.name}).returning('task_id').then((task_id) => {
    knex('hasTask').insert({task_id: task_id[0], project_id: req.body.project_id}).then(() => {
      res.json({success: true, task_id: task_id[0]});
    });
  });
}

exports.getTasks = function() {
  return knex.select('task_id', 'input', 'output', 'description', 'name', 'difficulty', 'tags', 'attempts').from('tasks');
}

exports.deleteTask = function(req, res) {
  knex('hasTask').where('task_id', req.body.task_id).del().then(() => {
    knex('tasks').where('task_id', req.body.task_id).del().then(() => {
      res.json({success: true});
    });
  });
}

exports.participateTask = function(req, res) {
  console.log("anfrage ging rein")
  knex('participate').insert({task_id: req.body.task_id, user_id: req.user.github.id}).then((task_id) => {
    res.json({success: true});
  });

  // var tempTask_id = req.body.task_id;
  // var tempUser_id = req.body.user.github.id;
  //
  // knex('participate').insert(knex.select(tempTask_id, tempUser_id).whereNotExists(knex('participate').where(tempTask_id, tempUser_id))).then((task_id) => {
  //   res.json({success: true});
  // })
}
