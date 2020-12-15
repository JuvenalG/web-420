 /*
============================================
; Title:  Assignment 1.4
; Author: Professor Krasso
; Date:   October 20 2020
; Modified By: Juvenal Gonzalez
; Description: connect MongoDB database to api-gateway app
;===========================================
*/



var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var favicon = require('get-website-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
mongoose.Promise = require('bluebird')

var indexRouter = require('./routes/index');
var apiCatalog = require("./routes/api-catalog"); 

var app = express();

const conn =  "mongodb+srv://admin:admin@buwebdev-cluster-1.ygmqi.mongodb.net/<dbname>?retryWrites=true&w=majority"


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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//database conn variable

//API Catalog Route
app.use("/api", apiCatalog); 



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

