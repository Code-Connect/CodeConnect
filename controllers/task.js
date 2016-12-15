var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Task = Projectmodel.Task;
var Belongsto = Projectmodel.Belongsto;

exports.addTask = function(req, res) {
    console.log("task inc :");
    console.log(req.body);

    //muss noch gefixt werden
    new Task({
        task_id: req.body.github_id //looks for project_id in database
    }).fetch().then(function(model) { //fetch will create a promise
        if (!model) {
            console.log("fdsa");
            new Belongsto({
                project_id: proje0,
                ct.repoid, //if project is not there create one
                user_id: req.body.github_id
            }).save(null, { //save project in database
                method: 'insert'
            });
        } else {
            console.log("fdaasassa");
        }
    });

    res.send("task");
}
