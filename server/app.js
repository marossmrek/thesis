var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');

//passport config
const {localPassport} = require('./config/localPassport');

//app inicializations
var app = express();

//app middlewares
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(expressValidator());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({secret: 'keyboard cat', saveUninitialized: false, provide: false}));
app.use(passport.initialize());
app.use(passport.session());

//api routing
var users = require('./routes/user');
app.use('/', users);

//start server
app.listen(5000, () => {
    console.log("I listen on port 5000");
});