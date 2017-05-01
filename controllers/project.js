var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Project = Projectmodel.Project;
var Task = Projectmodel.Task;
var Projectmentor = Projectmodel.Projectmentor;

/*
SELECT project.project_id
FROM project join projectmentor
on project.project_id = projectmentor.project_id
where projectmentor.user_id = "id"
*/

exports.getProject2 = function(initialState, id) { //gets Projects only
    return knex.select('project.project_id').from('project').join('projectmentor', function() {
        this.on('project.project_id', '=', 'projectmentor.project_id')
    }).where('projectmentor.user_id', '=', id).then(function(rows) {
        console.log("rows");
        console.log(rows);
        initialState.projects.ccrepos = rows;
    });
}

/*
SELECT project.project_id, belongsto.task_id
FROM project
join projectmentor
on project.project_id = projectmentor.project_id
left join belongsto
on project.project_id = belongsto.project_id
join task
on belongsto.task_id = task.task_id
where projectmentor.user_id = 15983559
*/

exports.getProject = function(initialState, id) { //gets Projects and Tasks
    return knex.select('project.project_id', 'belongsto.task_id', 'task.name', 'task.description').from('project').join('projectmentor', function() {
        this.on('project.project_id', '=', 'projectmentor.project_id')
    }).leftJoin('belongsto', function() {
        this.on('project.project_id', '=', 'belongsto.project_id')
    }).leftJoin('task', function() {
        this.on('belongsto.task_id', '=', 'task.task_id')
    }).where('projectmentor.user_id', '=', id).then(function(rows) {

        rows.map((item) => {//cleans the json
            if (item.task_id === null) {
                delete item.description;
                delete item.task_id;
                delete item.name;
                delete item.input;
                delete item.output;
            }
        });

        initialState.projects.tasks = rows;
    });
}

exports.saveProject = function(req, res) {
    var ccprojects = req.body.ccrepos;
    ccprojects.map(function(project) {
        new Project({
            project_id: project.project_id //looks for project_id in database
        }).fetch().then(function(model) { //fetch will create a promise
            if (!model) {
                new Project({
                    project_id: project.project_id //if project is not there create one
                }).save(null, { //save project in database
                    method: 'insert'
                });
            }
        });

        new Projectmentor({
            project_id: project.project_id //looks for project_id in database
        }).fetch().then(function(model) { //fetch will create a promise
            if (!model) {
                console.log("fdsa");
                new Projectmentor({
                    project_id: project.project_id, //if project is not there create one
                    user_id: req.body.id
                }).save(null, { //save project in database
                    method: 'insert'
                });
            }
        });
    });
    res.send("status:success");
};
