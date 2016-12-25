var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Task = Projectmodel.Task;
var Belongsto = Projectmodel.Belongsto;

exports.addTask = function(req, res) {
    var temp = {
        name: req.body.tasks.task,
        description: req.body.tasks.description
    };
    new Task(temp).save(null, {method: 'insert'}).then(function(item) { //then answer

        new Belongsto({project_id: req.body.ccrepo_id, task_id: item.attributes.task_id}).save(null, { //save project in database
            method: 'insert'
        });
        return(item.id);
    }).then((task_id) => {
        temp.task_id = task_id;
        res.json(temp);
    });
}

exports.getTask = function(req, res) {
    // return knex.select('project.project_id').from('project').join('projectmentor', function() {
    //     this.on('project.project_id', '=', 'projectmentor.project_id')
    // }).where('projectmentor.user_id', '=', id).then(function(rows) {
    //     console.log(rows);
    //     initialState.projects.ccrepos = rows;
    // });
}
