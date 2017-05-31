var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var GitterStrategy = require('passport-gitter').Strategy;

var Model = require('../models/User');
var User = Model.User;
var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK,
    scope: ['user:email', 'repo']
}, function(token, refreshToken, profile, done) {
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

passport.use(new GitterStrategy({
    clientID: process.env.GITTER_CLIENT_ID,
    clientSecret: process.env.GITTER_CLIENT_SECRET,
    callbackURL: process.env.GITTER_CALLBACK,
    scope: ['user:email']//not sure if this is necessary
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("geht hier rein");
    console.log(profile);
    var gitterProfile = {id: profile.id, token: accessToken};
    knex('gitter').update(gitterProfile).then(() => {
      return done(null, gitterProfile);
    });
  }
));

passport.serializeUser(function(user, done) {
    console.log("user is");
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  //TODO not working properly
    // Model.grabUserCredentials(id, function(err, user) {
    //     done(err, user);
    // });
    done(null, id);
});

module.exports = passport;
