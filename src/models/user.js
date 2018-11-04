var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  role: Number,
  phone: String,
  address: String,
  accessToken: String,
  avatar: String,
  agencies: {
    type: Array
  }
});

var User = module.exports = mongoose.model('User', UserSchema);