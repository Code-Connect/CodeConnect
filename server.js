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

//mongoose DB
//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_LOGIN);

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
app.use(logger('dev'));
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

var passportGithub = require('./controllers/gitlogin');

app.post('/contact', contactController.contactPost);
app.post('/submitrepo', function(req, res) {
    console.log("submitrepo");
    res.send("hallo");
});
app.get('/project', projectController.getProject);

//The Sessions gets connected to the MongoDB
//var MongoDBStore = require('connect-mongodb-session')(session);
var pg = require('pg');

//var store = new MongoDBStore({uri: process.env.MONGODB_LOGIN, collection: 'mySessions'});
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

var tempdata = {};

app.use(function(req, res, next) { //request to the server
    if (req.user)
        console.log("Hello user Logged in");
    else
        console.log("Not logged in");
    next();
});

app.get('/logout', function(req, res){
  req.logout();
  res.end();
  res.redirect('/');
});

app.get('/account', function(req, res) {
    //do something only if user is authenticated
    console.log(req.sessionID);
    console.log(req.user);
    res.json(req.user);
});

app.get('/auth/github', passportGithub.authenticate('github'));
app.get('/auth/github/callback', passportGithub.authenticate('github', {
    failureRedirect: '/'
}), function(req, res) {
    // Successful authentication

    var user = req.user;
    req.login(user, function(error) {
        if (!error) {
            console.log('succcessfully updated user');
        }
    });
    res.end();
    res.redirect('/');
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
            repos: []
        }
    };

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
