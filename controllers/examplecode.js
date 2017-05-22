var Projectmodel = require('../models/Project');
var Project = Projectmodel.Project;

exports.getUser = function() {
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
            return model.attributes.data;
        }
    })
}
