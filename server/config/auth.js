const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const lcoalStrategy = passport.Strategy;
const flash = require('connect-flash');
const User = require('../models/user');


module.exports = (app, secret) => {
  // espress-session setup
  app.use(session({
    secret: secret,
    saveUninitialized: false,
    resave: false
  }));

  // initialize flash
  app.use(flash());

  // initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // implement auth Strategy
  passport.use(User.createStrategy());

  // serialize and deserialize the User info
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
}