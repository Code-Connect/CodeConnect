var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var User = require('../models/user');


passport.use(new GitHubStrategy({
        clientID: "c40cd4a33d5dfe4aa2fd",
        clientSecret: "12fcd087101c17487acc77f388e86e4c58bbd7a2",
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(accessToken);

        var searchQuery = {
            name: profile.displayName
        };

        var updates = {
            name: profile.displayName,
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

// serialize user into the session
var User = require('../models/user');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = passport;
