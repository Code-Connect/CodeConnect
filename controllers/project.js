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
where projectmentor.user_id = "github_id"
*/

exports.getProject2 = function(initialState, github_id) {
    return knex.select('project.project_id').from('project').join('projectmentor', function() {
        this.on('project.project_id', '=', 'projectmentor.project_id')
    }).where('projectmentor.user_id', '=', github_id).then(function(rows) {
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
join belongsto
on project.project_id = belongsto.project_id
where projectmentor.user_id = 15983559
*/
exports.getProject = function(initialState, github_id) {
    return knex.select('project.project_id', "belongsto.task_id").from('project').join('projectmentor', function() {
        this.on('project.project_id', '=', 'projectmentor.project_id')
    }).join('belongsto', function() {
        this.on('project.project_id', '=', 'belongsto.project_id')
    }).where('projectmentor.user_id', '=', github_id).then(function(rows) {
        console.log("rows");
        console.log(rows);
        initialState.projects.ccrepos = rows;
    });
}

exports.saveProject = function(req, res) {
    var ccprojects = req.body.ccrepos;
    ccprojects.map(function(project) {
        new Project({
            project_id: project.repoid //looks for project_id in database
        }).fetch().then(function(model) { //fetch will create a promise
            if (!model) {
                new Project({
                    project_id: project.repoid //if project is not there create one
                }).save(null, { //save project in database
                    method: 'insert'
                });
            }
        });

        new Projectmentor({
            project_id: project.repoid //looks for project_id in database
        }).fetch().then(function(model) { //fetch will create a promise
            if (!model) {
                console.log("fdsa");
                new Projectmentor({
                    project_id: project.repoid, //if project is not there create one
                    user_id: req.body.github_id
                }).save(null, { //save project in database
                    method: 'insert'
                });
            } else {
                console.log("fdaasassa");
            }
        });
    });
    res.send("done");
};
