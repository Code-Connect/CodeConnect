var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var passport = require('passport');
var Provider = require('react-redux').Provider;
var sass = require('node-sass-middleware');
var session = require('express-session');
var webpack = require('webpack');
var config = require('./webpack.config');

// Load environment variables from .env file
dotenv.load();

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// React and Server-Side Rendering
var routes = require('./app/routes');
var configureStore = require('./app/store/configureStore').default;

var app = express();

var compiler = webpack(config);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

//The Sessions gets connected to the Postgres
var pg = require('pg');
const KnexSessionStore = require('connect-session-knex')(session);

const Knex = require('knex');
const knex = Knex(require('./knexfile'));

const store2 = new KnexSessionStore({
  knex: knex, tablename: 'sessions' // optional. Defaults to 'sessions'
})
// git login with session
app.use(session({
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 8 // 8 hours
  },
  store: store2,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/logout', function(req, res) {
  req.logout();
  req.session.save(function(err) {
    res.redirect('/');
  });
});

// Controllers
var projectController = require('./controllers/project');
var taskController = require('./controllers/task');
var passportGithub = require('./controllers/gitlogin');

// app.post('/postccrepo', projectController.saveProject);
app.post('/addproject', projectController.addProject);

app.post('/updatetask', taskController.updateTask);
app.post('/addtask', taskController.addTask);
app.delete('/deletetask', taskController.deleteTask);


app.get('/auth/github', passportGithub.authenticate('github'));
app.get('/auth/github/callback', passportGithub.authenticate('github', {failureRedirect: '/'}), function(req, res) {
  // Successful authentication
  req.session.save(function(err) {
    res.redirect('/');
  });
});

app.get('/auth/gitter', passportGithub.authenticate('gitter'));
app.get('/auth/gitter/callback', passportGithub.authenticate('gitter', {failureRedirect: '/'}), function(req, res) {
  // Successful authentication
  req.session.save(function(err) {
    res.redirect('/');
  });
});

// React server rendering
app.use(function(req, res) {
<<<<<<< HEAD

  var initialState = {
    user: req.user,
    tasks: {
      mockData: [
        {
                  input: 'No input required here!',
                  output: "Hello World!",
                  description: "Program a simple js function that returns hello world",
                  task_id: "taskid",
                  name: "Hello World in JS",
                  difficulty: "0",
                  solutions: "3",
                  attempts: "10",
                  tags: ["#basics","#beginner", "#javascript"]
                },
              {
                        input: 'No input required here!',
                        output: "Hello World!",
                        description: "Program a simple c function that returns hello world",
                        task_id: "taskid-",
                        name: "Hello World in C",
                          difficulty: "0",
                          solutions: "3",
                          attempts: "10",
                          tags: ["#basics","#beginner", "#c"]
                      },
                {
                          input: 'No input required here!',
                          output: "Hello World!",
                          description: "Program a simple c# function that returns hello world",
                          task_id: "taskid-1",
                          name: "Hello World in C#",
                            difficulty: "0",
                            solutions: "3",
                            attempts: "10",
                            tags:["#basics","#beginner", "#c#"]
                        },{
                                  input: 'No input required here!',
                                  output: "Hello World!",
                                  description: "Program a simple python function that returns hello world",
                                  task_id: "taskid-2",
                                  name: "Hello World in python",
                                    difficulty: "0",
                                    solutions: "3",
                                    attempts: "10",
                                    tags:["#basics","#beginner", "#python"]
                                },{
                                          input: 'No input required here!',
                                          output: "Hello World!",
                                          description: "Program a simple rust function that returns hello world",
                                          task_id: "taskid-3",
                                          name: "Hello World in rust",
                                            difficulty: "0",
                                            solutions: "3",
                                            attempts: "10",
                                            tags:["#basics","#beginner", "#rust"]
                                        },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                            output: "output2",
                            description: "its me mario yeah yea yeah",
                              tags: ["#just","#a","#mockUp","#ml"],
                            task_id: "taskid2",
                            name: "Mario",
                              difficulty: "3",
                              solutions: "2",
                              attempts: "100"
                          },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "its me mario yeah yea yeah",
                          task_id: "taskid2ß00",
                            tags: ["#just","#a","#mockUp","#neuralnetwork"],
                          name: "Mario",
                            difficulty: "3",
                            solutions: "2",
                            attempts: "100"
                        },{
                                  input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                                  output: "output2",
                                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                  task_id: "taskid3",
                                  name: "T1Yeah",
                                    difficulty: "5",
                                    solutions: "0",
                                    tags: ["#just","#a","#mockUp","#html"],
                                    attempts: "5"
                                },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid4",
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            tags: ["#just","#a","#mockUp","#jsrocks"],
                            attempts: "5"
                        }
        ,
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid5",
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            tags: ["#just","#a","#mockUp","#reactrocks"],
                            attempts: "5"
                        }
        ,
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid6",
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            tags: ["#yeaa","#a","#mockUp"],
                            attempts: "5"
                        },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid7",
                            tags: ["#just","#a","#mockUp"],
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            attempts: "5"
                        },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid8",
                            tags: ["#just","#a","#mockUp"],
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            attempts: "5"
                        },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid9",
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            tags: ["#why","#a","#mockUp"],
                            attempts: "5"
                        },
                {
                          input: '# it\'s me, some mario\n\n ``js\n//but maybe i have code snippets too...\n``',
                          output: "output2",
                          description: "yeah yea yeah",
                          task_id: "taskid10",
                            tags: ["#beginner","#a","#mockUp"],
                          name: "T1Yeah",
                            difficulty: "5",
                            solutions: "0",
                            attempts: "5"
                        }
              ]
          }
  };
        
  new Promise((resolve, reject) => { //looks for data in the database when logged in
    // if (req.user)
    //   projectController.getProject(initialState, req.user.github.id).then(() => {
    //     resolve();
    //   });
    // else
    resolve();
  }).then(function() {
=======
  projectController.getProjects().then(function(projects) {
    var initialState = {
      user: req.user,
      tasks: {
        mockData: []
      },
      projects: {
        addAbleProjects:[],
        addedProjects: projects
      }
    };
>>>>>>> khiemssubbranch_ofFrontendRefactoring
    var store = configureStore(initialState);

    Router.match({
      routes: routes.default(store),
      location: req.url
    }, function(err, redirectLocation, renderProps) {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Provider, {
          store: store,
          exists: false
        }, React.createElement(Router.RouterContext, renderProps)));
        res.render('layout', {
          html: html,
          initialState: store.getState()
        });
      } else {
        res.sendStatus(404);
      }
    });
  });

});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
