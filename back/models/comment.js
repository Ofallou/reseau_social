
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: String,
  author: String,
  authorId: String,
  content: String,
  date: Date

});

module.exports = mongoose.model('comment', commentSchema, 'comment');
