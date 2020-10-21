 /*
============================================
; Title:  Exercise 1.4
; Author: Professor Krasso
; Date:   October 20 2020
; Modified By: Juvenal Gonzalez
; Description: connect MongoDB database to api-gateway app
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 1.4"));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
mongoose.Promise = require('bluebird')
var indexRouter = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//database conn variable
const conn =  "mongodb+srv://buwebdev-cluster-1.ygmqi.mongodb.net/api-gateway"

//Database Connection
mongoose.connect(conn,{
  promiseLibrary: require("bluebird"),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.debug("Connection to database instance successful");
}).catch(err => {
  console.log("MongoDB eroor: ${err.message")
});//end mongoose connection

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
