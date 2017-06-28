var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var Model = require('../models/User');
var User = Model.User;
var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK,
    scope: ['user:email', 'repo', 'read:org']
}, function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      console.log(profile);
        new Model.Github({id: profile.id}).fetch().then(function(ghUser) {
            // If there is no user found, then create one
            if (!ghUser) {
                var newGHUser = {
                    token: token,
                    email: profile.emails[0].value,
                    id: profile.id,
                    name: profile.username
                };

                // Create new Github user with token.
                new Model.Github(newGHUser).save({}, {method: 'insert'}).then(function(github) {
                    return done(null, newGHUser);
                });
            } else {
                return done(null, ghUser);
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  //TODO not working properly
    Model.grabUserCredentials(id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;
