var Projectmodel = require('../models/Project');
var Project = Projectmodel.Project;

exports.projectGet = function(req, res) {
    process.nextTick(function() {
        new Project({
            project_id: "sdfa"
        }).fetch().then(function(model) {
            if (!model) {
                new Project({
                    project_id: "sdfa",
                    name: "fdasdf"
                }).save(null, {
                    method: 'update'
                }).then(function() {
                    res.send("bäm")
                });
            } else {
                console.log(model);
                res.send(model);
            }
        });
    });
};
