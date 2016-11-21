var Projectmodel = require('../models/Project');
var Project = Projectmodel.User;

exports.projectGet = function(req, res) {
    process.nextTick(function() {
        new Model.Github({
            github_id: profile.id
        }).fetch().then(function(ghUser) {
            if (ghUser) {
                // TODO: Handle case where there IS user, but no facebook user
                return done(null, ghUser);
            } else {
                // If there is no user found, then create one
                new User().save().then(function(user) {
                    var newUserId = user.toJSON().id;

                    var newGHUser = {
                        id: newUserId,
                        token: token,
                        github_id: profile.id,
                        name: profile.username
                    };

                    // Create new Facebook user with token.
                    new Model.Github(newGHUser).save({}, {
                        method: 'insert'
                    }).then(function(github) {
                        return done(null, newGHUser);
                    });
                });
            }
        });
    });

};
