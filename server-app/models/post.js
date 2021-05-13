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
  }
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);