var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  desc: String,
  content: String,
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

var Article = module.exports = mongoose.model('Article', ArticleSchema);