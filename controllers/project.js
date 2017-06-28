var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.addProject = function(req, res) {
  knex('projects').insert({project_id: req.body.project_id, name: req.body.name}).then(() => {
    knex('isMentor').insert({user_id: req.user.github.id, project_id: req.body.project_id}).then(() => {
      res.json({success: true});
    });
  });
}

exports.getProjects = function() {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
      return rows;
  });
}
