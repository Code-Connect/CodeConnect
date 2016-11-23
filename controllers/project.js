var Projectmodel = require('../models/Project');
var Project = Projectmodel.Project;

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

exports.getProject = function() {
    new Project({
        project_id: "sdfa"
    }).fetch().then(function(model) {
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
            console.log(model.attributes.data);
            return model.attributes.data;
        }
    })
}
