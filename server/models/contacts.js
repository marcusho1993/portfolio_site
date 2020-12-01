const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contacts = new Schema({
  name: String,
  number: String,
  email: String
}, {
  collection: 'contacts'
});

module.exports = mongoose.model('Contacts', Contacts);