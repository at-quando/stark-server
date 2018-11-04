var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PictureSchema = new Schema({
  title: String,
  desc: String,
  link: String,
  type: Number,
  agency_id: {
    type: Schema.ObjectId,
    ref: 'Agency'
  },
  album_id: {
    type: Schema.ObjectId,
    ref: 'Album'
  },
  article_id: {
    type: Schema.ObjectId,
    ref: 'Article'
  }
});

var Picture = module.exports = mongoose.model('Picture', PictureSchema);