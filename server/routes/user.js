/**
 * Created by Maroš Smrek on 27.10.2017.
 */
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passport = require('passport');

const {User} = require('../model/User');

//register new user
router.post('/register', (req, res) => {

    req.checkBody('username', 'Username is require').notEmpty().isLength({min: 4, max: 100});
    req.checkBody('email', 'Emial is require').notEmpty().isEmail();
    req.checkBody('password', 'Password is require').notEmpty();
    req.checkBody('password2', 'Repeat password not matches password').notEmpty().matches(req.body.password);

    let errors = req.getValidationResult();
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

//login user
router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    });

//logout user
router.post('/logout', (req, res) => {
    req.logout();
    res.end();
});

//get username, use for asnyc validations, username must be unique
router.get('/usernames', async (req, res) => {
    var result = await User.query();
    res.send(result).end();
});

//get data for user profile
router.get('/profile/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    res.send(user).end();
});

module.exports = router;