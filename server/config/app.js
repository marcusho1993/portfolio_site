// requrie server modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const Auth = require('./auth');

// Load env config
if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: './server/config/dev.env'
  });
}

// Router alias
const indexRouter = require('../routes/index');
const contactsRouter = require('../routes/contacts');
const usersRouter = require('../routes/users');

// express app set up
const app = express();

// logging
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// static folders
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Authdication setup
Auth(app, process.env.SECRET);

app.use('/', indexRouter);
app.use('/contact-list', contactsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;