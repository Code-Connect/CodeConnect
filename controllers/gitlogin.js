var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var Model = require('../models/User');
var User = Model.User;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK,
    scope: ['user:email', 'repo']
}, function(token, refreshToken, profile, done) {
    console.log(profile);
    process.nextTick(function() {
        new Model.Github({id: profile.id}).fetch().then(function(ghUser) {
            // If there is no user found, then create one
            if (!ghUser) {
                var newGHUser = {
                    token: token,
                    email: profile.emails[0].value,
                    id: profile.id,
                    name: profile.username
                };

                // Create new Facebook user with token.
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
    Model.grabUserCredentials(id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;
