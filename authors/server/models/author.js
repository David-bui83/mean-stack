const mongoose = require('mongoose');
const authorsSchema = new mongoose.Schema({
  first_name:{type:String,required:[true,'First name must be at least 3 characters'], minlength:3},
  last_name:{type:String,required:[true,'Last name must be at least 3 charaters'],minlength:3}
},{timestamps:true});
mongoose.model('Authors',authorsSchema);
