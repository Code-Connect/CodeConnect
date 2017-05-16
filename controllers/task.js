var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;
var Projectmodel = require('../models/Project');
var Task = Projectmodel.Task;
var Belongsto = Projectmodel.Belongsto;

exports.addTask = function(req, res) {
    console.log("body");
    console.log(req.body);
    res.json({test:true});
}
