var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
const {User} = require('../model/User');

var localPassport = passport.use(new LocalStrategy(
    async function (username, password, done) {
        var user = await User.findOne(username);
        if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        if (!bcrypt.compareSync(password, user.password)) {
            if (password === user.password) {
                return done(null, user);
            }
            return done(null, false, {message: 'Incorrect password.'});
        } else {
            return done(null, user);
        }
    }
));

localPassport.serializeUser(function (user, done) {
    done(null, user.id);
});

localPassport.deserializeUser(async function (id, done) {
    let user = await User.findById(id);
    if (user) {
        done(null, user);
    }
});

module.export = localPassport;

