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

// Controllers
var contactController = require('./controllers/contact');
var projectController = require('./controllers/project');
var taskController = require ('./controllers/task')

var passportGithub = require('./controllers/gitlogin');

app.post('/contact', contactController.contactPost);
app.post('/submitrepo', function(req, res) {
    console.log(req);
    res.send("hallo");
});

app.get('/project', projectController.getProject);
app.post('/postccrepo', projectController.saveProject);
app.post('/posttask', taskController.addTask);

//The Sessions gets connected to the MongoDB
var pg = require('pg');
const KnexSessionStore = require('connect-session-knex')(session);

const Knex = require('knex');
const knex = Knex(require('./knexfile'));

const store2 = new KnexSessionStore({
    knex: knex, tablename: 'sessions' // optional. Defaults to 'sessions'
});

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

app.get('/auth/github', passportGithub.authenticate('github'));
app.get('/auth/github/callback', passportGithub.authenticate('github', {failureRedirect: '/'}), function(req, res) {
    // Successful authentication
    req.session.save(function(err) {
        res.redirect('/');
    });
});

// React server rendering
app.use(function(req, res) {

    var initialState = {
        ajax: {
            history: [
                {
                    text: "server",
                    completed: false
                }
            ]
        },
        user: req.user,
        projects: {
            repos: [],
            publicprojects: [
                {
                    headerName: "Code Connect",
                    description: "The platform for coders to connect",
                    tasks: [
                        {
                            name: "10: Search Functionality in Navigation Bar",
                            link: "https://github.com/nithishr/codeConnect"
                        }, {
                            name: "12: Improve load times",
                            link: "https://github.com/nithishr/codeConnect"
                        }
                    ]
                }, {
                    headerName: "TowerDefense",
                    description: "A mobile TD Game",
                    tasks: [
                        {
                            name: "11: Add Advertising",
                            link: "https://github.com/gapsong/TowerDefense"
                        }, {
                            name: "13: Add MuteButton",
                            link: "https://github.com/gapsong/TowerDefense"
                        }, {
                            name: "14: Redesign MainMenu",
                            link: "https://github.com/gapsong/TowerDefense"
                        }, {
                            name: "16: Redesign Icon",
                            link: "https://github.com/gapsong/TowerDefense"
                        }
                    ]
                }
            ],
            ccrepos: []
        }
    };

    new Promise((resolve, reject) => { //looks for data in the database when logged in
        if (req.user)
            projectController.getProject(initialState, req.user.github.github_id).then(() => {
                resolve();
            });
        else
            resolve();
        }
    ).then(function() {
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
                    store: store
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
