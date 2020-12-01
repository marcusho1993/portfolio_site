const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
  username: String,
  email: String,
  displayName: String
}, {
  collection: 'user'
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);