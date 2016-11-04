var fs = require('fs');
var path = require('path');
var express = require('express');
var rewrite = require('express-urlrewrite');
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

exports.login = function(app) {
    ///////////////////////////////////////////////////////////////////////////

    var GITHUB_CLIENT_ID = "c40cd4a33d5dfe4aa2fd";
    var GITHUB_CLIENT_SECRET = "5356c42d117dc11332de87355b3242b4df08d24d";

    ///////////////////////////////////////////////////////////////////////////
    // Passport session setup.
    //   To support persistent login sessions, Passport needs to be able to
    //   serialize users into and deserialize users out of the session.  Typically,
    //   this will be as simple as storing the user ID when serializing, and finding
    //   the user by ID when deserializing.  However, since this example does not
    //   have a database of user records, the complete GitHub profile is serialized
    //   and deserialized.
    passport.serializeUser(function(user, done) {
        done(null, user);
        console.log("the user is: " + user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    //   Use the GitHubStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and GitHub
    //   profile), and invoke a callback with a user object.
    passport.use(new GitHubStrategy({
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "http://127.0.0.1:3000/home"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log("gdsagf");
        }
    ));

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['user:email'],
            successFlash: 'Welcome'
        }),
        function(req, res) {
            // The request will be redirected to GitHub for authentication, so this
            // function will not be called.
        });

    app.get('/auth/github/callback',
        passport.authenticate('github', {
            failureRedirect: '/login'
        }),
        function(req, res) {
            res.redirect('/');
        });

    //////////////////////////////////////////////////////////
    return;
}
