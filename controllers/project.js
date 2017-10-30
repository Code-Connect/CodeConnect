var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.addProject = function(req, res) {
  knex('projects').insert({project_id: req.body.project_id, name: req.body.name, description: req.body.description, repourl: req.body.repourl}).then(() => {
    knex('isMentor').insert({user_id: req.user.github.id, project_id: req.body.project_id}).then(() => {
      res.json({success: true});
    });
  });
}

exports.updateProject = function(req, res, next) {
  console.log("project_id: ", req.params.id);
  console.log("project: ", req.body.project);
  knex('projects').where('project_id', '=', req.params.id).update(req.body.project).then(() => {
    res.json({success: true, message: 'ok'}); // respond back to request
  });
}

exports.deleteProject = function(req, res) {
  var project_id = req.params.id;
  return knex('isMentor').where('project_id', project_id).del().then((id) => {
    return knex('hasTask').where('project_id', project_id).del().returning('task_id').then((tasks) => {
      return Promise.all(tasks.map((task_id) => {
        console.log("task_id");
        console.log(task_id);
        return knex('tasks').where('task_id', task_id).del();
      })).then(() => {
        return knex('projects').where('project_id', project_id).del().then(() => {
          return res.json({success: true});
        });
      });
    });
  });
}

//returns single Project with id
exports.getProject = function(req, res) {
  var project_id = req.params.id;
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description', 'projects.follower', 'projects.image').from('projects').where('projects.project_id', '=', project_id).then(function(rows) {
    return res.send(rows[0]);
  });
}

exports.getOwnProjects = function(req, res) {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description', 'projects.follower', 'projects.image').from('projects').join('isMentor', function() {
    this.on('projects.project_id', '=', 'isMentor.project_id')
  }).where('isMentor.user_id', '=', req.user.github.id).then(function(rows) {
    return res.send(rows);
  });
}

//returns all projects
exports.getAllProjects = function(req, res) {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description', 'projects.follower', 'projects.image').from('projects').then(function(rows) {
    //ich versuche alle sachen zu triggern und am ende dann tasks innerhalb von den projekten wiederfinden kann
    return res.send(rows);
  });
}

exports.getUserProject = function(req, res){
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description', 'projects.follower', 'projects.image').from('projects').join('isMentor', function() {
    this.on('projects.project_id', '=', 'isMentor.project_id')
  }).where('isMentor.user_id', '=', req.params.user_id).then(function(rows) {
    return res.send(rows);
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

//returns all projects and for each project a task
exports.getProjectsAndTasks = function() {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom', 'projects.repourl', 'projects.description', 'projects.follower', 'projects.image').from('projects').then(function(rows) {
    return Promise.all(rows.map((item) => {
      return knex.select('hasTask.task_id').from('hasTask').where('hasTask.project_id', '=', item.project_id).then(function(task) {
        return Promise.all(task.map((task_item) => {
          return task_item.task_id
        })).then((ids) => {
          return knex.select('isMentor.user_id').from('isMentor').where('isMentor.project_id', '=', item.project_id).then(function(mentor_id) {
            return knex.select('github.email', 'github.name').from('github').where('github.id', '=', mentor_id[0].user_id).then(function(mentor) {
              return Object.assign({}, item, {
                tasks: ids,
                mentor: mentor[0]
              });
            });
          });
        });
      });
    }));
  });
}

exports.getYourProjects = function(user) {
  var temp;
  if (typeof user != 'undefined')
    temp = user.github.id;
  else
    temp = 0
  return knex.select('isMentor.project_id').from('isMentor').where('isMentor.user_id', '=', temp).then(function(yourProjects) {
    yourProjects = yourProjects.map((item) => {
      return item.project_id;
    });
    return yourProjects
  });
}
