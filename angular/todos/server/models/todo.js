const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  title:{type:String,required:[true,'Enter a task']},
  desc:{type:String,required:[true,'Enter description']},
  completed:{type:Boolean,default:false}
},{timestamps:true});
mongoose.model('Todos',todosSchema);