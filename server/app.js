var express = require('express');
var bodyParser = require('body-parser');
var objection = require('objection');
var Model = objection.Model;
var Knex = require('knex');
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var cors = require('cors');

var api = express();

passport.use(new LocalStrategy(
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

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    let user = await User.findById(id);
    if (user) {
        done(null, user);
    }
});

api.use(cors({origin: 'http://localhost:3000', credentials: true}));
api.use(expressValidator());
api.use(cookieParser());
api.use(bodyParser.json());
api.use(session({secret: 'keyboard cat', saveUninitialized: false, provide: false}));
api.use(passport.initialize());
api.use(passport.session());

var knex = Knex({
    client: 'pg',
    connection: {
        user: 'marossmrek',
        password: '12345',
        database: 'diplom'
    }
});

Model.knex(knex);

class Base extends Model {

    static get tableName() {
        return this.name.toLowerCase();
    }

    static async findById(id) {
        return await this.query().where({id: id}).limit(1).first();
    }
}

class User extends Base {

    static async findOne(username) {
        return await this.query().where({username: username}).limit(1).first();
    }
}

api.post('/register', (req, res) => {

    req.checkBody('username', 'Username is require').notEmpty().isLength({min: 4, max: 100});
    req.checkBody('email', 'Emial is require').notEmpty().isEmail();
    req.checkBody('password', 'Password is require').notEmpty();
    req.checkBody('password2', 'Repeat password not matches password').notEmpty().matches(req.body.password);

    let errors = req.validationErrors();
    if (errors) {
        res.status(500).end();
    }

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
            let newUser = {username: req.body.username, email: req.body.email, password: hash};
            let result = await User.query().insert(newUser);

            if (result) {
                res.status(204).end();
            } else {
                res.status(500).end();
            }
        });
    });

});

api.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    });

api.post('/logout', (req, res) => {
    req.logout();
    res.end();
});

api.get('/usernames', async (req, res) => {
    var result = await User.query();
    res.send(result).end();
});

api.get('/profile/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    res.send(user).end();
});

api.listen(5000, () => {
    console.log("I listen on port 5000");
});