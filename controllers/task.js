var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.updateTask = function(req, res) {
  knex('tasks').where('id', '=', req.body.task_id).update({
    [req.body.fieldtype]: req.body.newCode
  }).then(() => {
    res.json({success: true, message: 'ok'}); // respond back to request
  });
}
