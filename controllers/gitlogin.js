var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var User = require('../models/user');


passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK
    },
    function(accessToken, refreshToken, profile, done) {

        var searchQuery = {
            name: profile.username
        };

        var updates = {
            name: profile.username,
            someID: profile.id
        };

        var options = {
            upsert: true
        };

        // update the user if s/he exists or add a new user
        User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
            if (err) {
                return done(err);
            } else {
                return done(null, user);
            }
        });
    }
));


passport.serializeUser(function(user, done) {
    console.log("serialize");

    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    console.log("deserialize");

    User.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = passport;
