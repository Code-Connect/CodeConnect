var bookshelf = require('../config/bookshelf');

var Task = bookshelf.Model.extend({
    tableName: 'task',
    idAttribute: 'id',
    users: function(){
      return this.belongsToMany(User);
    }
});


var User = bookshelf.Model.extend({
   tableName: 'github',
   idAttribute: 'id',
   tasks: function() {
     return this.hasMany(Task);
   }
});

module.exports = {
    User : User,
    Task : Task
};
