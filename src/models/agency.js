var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AgencySchema = new Schema({
  name: String,
  desc: String,
  avatar: String,
  default: Boolean
  // user_id: {
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // }
});

var Agency = module.exports = mongoose.model('Agency', AgencySchema);