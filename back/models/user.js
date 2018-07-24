const mongoose = require('mongoose');
const friends = require("mongoose-friends")

var Schema = mongoose.Schema;
var userSchema = new Schema({
  first_name: String,
  last_name: String,
  pseudo: String,
  email: String,
   gender: String,
   password: String,
   admin: Boolean,
  picture:String,
  description:String,
  friendsList:[],
  online:Boolean,

});

userSchema.plugin(friends)
module.exports = mongoose.model('user', userSchema, 'users');
