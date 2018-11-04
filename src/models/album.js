var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  desc: String,
  pictures: Array,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  user_id: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

var Album = module.exports = mongoose.model('Album', AlbumSchema);