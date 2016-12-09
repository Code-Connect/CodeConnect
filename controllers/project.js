var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Project = Projectmodel.Project;
var Projectmentor = Projectmodel.Projectmentor;

exports.setProject = function(req, res) {
    process.nextTick(function() {
        new Project({
            project_id: "sdfa" //looks for project_id in database
        }).fetch().then(function(model) { //fetch will create a promise
            if (!model) {
                new Project({
                    project_id: "sdfa", //if project is not there create one
                    name: "fdasdf",
                    data: {
                        "data1": "ewfew",
                        "data2": "hallo"
                    }
                }).save(null, { //save project in database
                    method: 'insert'
                }).then(function() { //then answer
                    res.send("bäm")
                });
            } else {
                console.log(model);
                res.send(model);
            }
        });
    });
};

exports.getProject = function(initialState, github_id, callback) {
    knex.select('project.project_id')
        .from('project').join('projectmentor', function() {
            this.on('project.project_id', '=', 'projectmentor.project_id')
        })
        .where('projectmentor.user_id', '=', github_id).then(function(rows) {
            console.log(rows);
            initialState.projects.ccrepos = rows;
        }).then(callback);
}

exports.saveProject = function(req, res) {
    console.log("saveProject");
    console.log(req.body);
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
