var bookshelf = require('../config/bookshelf');
var Model = require('./User');
var Github = Model.Github;

var Project = bookshelf.Model.extend({
    tableName: 'project',
    idAttribute: 'project_id',
    Task: function() {
        return this.hasOne(Task, 'project_id');
    }
});

var Task = bookshelf.Model.extend({
    tableName: 'task',
    idAttribute: 'task_id',
    Project: function() {
        return this.belongsTo(Project, 'task_id'); //could be 'id' aswell
    }
});

var Projectmentor = bookshelf.Model.extend({
    tableName: 'projectmentor'
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
    Projectmentor : Projectmentor,
    Project: Project,
    Task: Task
};
