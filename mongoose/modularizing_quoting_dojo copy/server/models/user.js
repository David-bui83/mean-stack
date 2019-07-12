const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true,'Need to enter a name'], minlength: 2},
  quote: {type: String, required: [true,'Quote is required'], minlength: 10},
  date: {type: Date, default: Date.now()}
});

mongoose.model('User',UserSchema);