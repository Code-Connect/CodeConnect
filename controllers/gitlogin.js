var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var knex = require('../knexfile');
var User = require('../models/User');

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
        User.where('username', profile.login).save().then(user => {
            console.log("Successful");
            done(null, user);
        }).catch(err => {
            console.log("doesnt work");
            done(err);
        })
    }
));


passport.serializeUser(function(user, done) {
    console.log("serialize");

    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserialize");
    knex('users').where('id', id).first()
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            done(err, null);
        });
});


module.exports = passport;
