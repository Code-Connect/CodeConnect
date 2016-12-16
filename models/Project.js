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
    idAttribute: 'task_id'
});

var Belongsto = bookshelf.Model.extend({
    tableName: 'belongsto'
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
    Belongsto : Belongsto,
    Project: Project,
    Task: Task
};
