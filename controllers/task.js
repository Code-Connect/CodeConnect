var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Task = Projectmodel.Task;
var Belongsto = Projectmodel.Belongsto;

// exports.addTask = function(req, res) {
//     console.log("task inc :");
//     console.log(req.body);
//
//     //muss noch gefixt werden
//     new Task({
//         task_id: 15 //looks for project_id in database
//     }).fetch().then(function(model) { //fetch will create a promise
//         if (!model) {
//             new Task({name: req.body.tasks.task, description: req.body.tasks.description}).save(null, { //save project in database
//                 method: 'insert'
//             }).then(function() { //then answer
//                 res.send("bäm")
//             });
//         } else {
//             res.send("task");
//         }
//     });
//
// }

exports.addTask = function(req, res) {
    new Task({name: req.body.tasks.task, description: req.body.tasks.description}).save(null, {method: 'insert'}).then(function(item) { //then answer
        new Belongsto({
          project_id: req.body.ccrepo_id,
          task_id: item.attributes.task_id}).save(null, { //save project in database
            method: 'insert'
        });
    });
}
