"use strict";
const express = require('express');
const consign = require('consign')
const bodyParser = require('body-parser')
const db = require('./config/db')
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const app = express();

app.db = db
app.use((req, res, next) => {
    res.set('X-Powered-By', 'PHP/7.1.7');
    next();
});
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(require('express-session')({
    secret: '648c4b84114609edf619be0de4e27fad',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 3}
}));


consign()
    .then('./app/controllers/validation.js')
    .then('./app/controllers/email.js')
    .then('./app/controllers/status.js')
    .then('./app/controllers')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Servidor rodando na Hot Gate')
})