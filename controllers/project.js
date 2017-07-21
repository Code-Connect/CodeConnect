var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.addProject = function(req, res) {
  knex('projects').insert({project_id: req.body.project_id, name: req.body.name, chatroom: req.body.chatroom, description: req.body.description, repourl: req.body.repourl}).then(() => {
    knex('isMentor').insert({user_id: req.user.github.id, project_id: req.body.project_id}).then(() => {
      res.json({success: true});
    });
  });
}

exports.getProjects = function() {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
    console.log(rows[0]);
    //ich versuche alle sachen zu triggern und am ende dann tasks innerhalb von den projekten wiederfinden kann
    return rows;
  });
}
//
// exports.getProjectsAndTasks = function() {
//   return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
//     return Promise.all(rows.map((item) => {
//       return knex.select('tasks.task_id', 'input', 'output', 'description', 'name', 'difficulty', 'tags', 'attempts').from('tasks').join('hasTask', function() {
//           this.on('tasks.task_id', '=', 'hasTask.task_id')
//       }).where('hasTask.project_id', '=', item.project_id).then(function(task) {
//         return Object.assign({}, item, {tasks: task});
//       });
//     }));
//   });
// }

exports.getProjectsAndTasks = function() {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description').from('projects').then(function(rows) {
    return Promise.all(rows.map((item) => {
      return knex.select('hasTask.task_id').from('hasTask').where('hasTask.project_id', '=', item.project_id).then(function(task) {
        return Promise.all(task.map((task_item) => {
          return task_item.task_id
        })).then((ids) => {
          return Object.assign({}, item, {tasks: ids});
        });
      });
    }));
  });
}
