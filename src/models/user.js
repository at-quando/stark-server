var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number
});

var User = module.exports = mongoose.model('User', UserSchema);