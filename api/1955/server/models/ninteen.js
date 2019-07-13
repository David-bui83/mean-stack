const mongoose = require('mongoose');

const ninteenSchema = new mongoose.Schema({
  name: {type:String, require:[true,'Need a name'], minlength:2}
},{timestamps:true}) 

mongoose.model('Ninteens',ninteenSchema);