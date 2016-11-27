var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

var User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    Github: function() {
        return this.hasOne(Github, 'id');
    }
});

var Github = bookshelf.Model.extend({
    tableName: 'github',
    idAttribute: 'id',
    User: function() {
        return this.belongsTo(User, 'id');
    }
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
function grabUserCredentials(userId, callback) {
    // Skeleton JSON
    var loginUser = {
        github: {
            id: userId,
            token: null,
            email: null,
            github_id: null,
            name: null,
        }
    };

    // SQL joins to get all credentials/tokens of a single user
    // to fill in loginUser JSON.
    knex.select('users.id', 'users.username', 'users.password',
            'github.token as gh_token', 'github.name as gh_name', 'github.email as gh_email', 'github.github_id as gh_id')
        .from('users')
        .leftOuterJoin('github', 'github.id', '=', 'users.id')
        .where('users.id', '=', userId).then(function(row) {
            row = row[0];

            if (!row) {
                callback('Could not find user with that ID', null);
            } else {
                // Fill in loginUser JSON which is the deserialized User
                loginUser.github.token = row.gh_token;
                loginUser.github.email = row.gh_email;
                loginUser.github.github_id = row.gh_id;
                loginUser.github.name = row.gh_name;
                callback(null, loginUser);
            }
        });
};

module.exports = {
    createNewUser: createNewUser,
    grabUserCredentials: grabUserCredentials,
    User: User,
    Github: Github,
};
