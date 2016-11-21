var bookshelf = require('../config/bookshelf');

var DB = require('../config/bookshelf').DB,
    knex = DB.knex;

var Project = DB.Model.extend({
    tableName: 'project',
    idAttribute: 'id',
    Task: function() {
        return this.hasOne(Task, 'id');
    }
});

var Task = DB.Model.extend({
    tableName: 'task',
    idAttribute: 'task_id',
    Project: function() {
        return this.belongsTo(Project, 'task_id'); //could be 'id' aswell
    }
});

function getProject(userId, callback) {
    // Skeleton JSON
    var loginUser = {
        local: {
            username: null,
            password: null,
        },
        github: {
            id: userId,
            token: null,
            email: null,
            name: null,
        }
    };
};

module.exports = {
    getProject : getProject,
    Project: Project,
    Task: Task,
};
