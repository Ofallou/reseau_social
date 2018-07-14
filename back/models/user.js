const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  pseudo: String,
  email: String,
   gender: String,
   password: String,
   isAdmin: Boolean,
  picture:String,
  description:String,
  friendList:Array

});

module.exports = mongoose.model('user', userSchema, 'users');
