const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  type: {type: String, required: [true, 'Need to enter an animal'], minlength:2},
  name: {type: String, required:[true, 'Name must be longer than 2 characters']},
  age:{type: Number, require:[true, 'Need to have an age']},
  date: {type: Date, default: Date.now()}
})

mongoose.model('Animals', AnimalSchema);