var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: String,
  desc: String,
  link: String,
  type: Number,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  user_id: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

var Video = module.exports = mongoose.model('Video', VideoSchema);