
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  userId:String,
  room:String,
  pseudo: String,
  message: String,
  ecrit_le: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Chat', chatSchema);