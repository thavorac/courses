const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  nbLike: {
    type: Number,
    required: true
  },
  nbShare: {
    type: Number,
    required: true
  },
  nbComment: {
    type: Number,
    required: true
  }
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);