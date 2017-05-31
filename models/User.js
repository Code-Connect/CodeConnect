var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

var Github = bookshelf.Model.extend({
    tableName: 'github',
    idAttribute: 'id'
});

// ------------------------------
// createNewUser
// ------------------------------
// Makes a new user in the database with
// automatic incremented ID. Then, returns
// that user's ID after the user is created.
function createNewUser(callback) {
    new User().save().then(function(user) {
        callback(user.toJSON().id);
    });
}

// ------------------------------
// grabUserCredentials
// ------------------------------
// Returns a JSON list of a single user like this:
// {
//     local: {
//          username: 'sampleun'
//          password: 'samplepw'
//     },
//     github: {
//          ...
//     }
// }

function grabUserCredentials(id, callback) {
    // Skeleton JSON
    var loginUser = {
        github: {
            token: null,
            email: null,
            id: id,
            name: null,
        }
    };

    // SQL joins to get all credentials/tokens of a single user
    // to fill in loginUser JSON.
    knex.select('github.token as gh_token', 'github.name as gh_name', 'github.email as gh_email', 'github.id as gh_id')
        .from('github')
        .where('github.id', '=', id).then(function(row) {
            row = row[0];
            if (!row) {
                callback('Could not find user with that ID', null);
            } else {
                // Fill in loginUser JSON which is the deserialized User
                loginUser.github.token = row.gh_token;
                loginUser.github.email = row.gh_email;
                loginUser.github.id = row.gh_id;
                loginUser.github.name = row.gh_name;
                callback(null, loginUser);
            }
        });
};

module.exports = {
    createNewUser: createNewUser,
    grabUserCredentials: grabUserCredentials,
    Github: Github,
};
