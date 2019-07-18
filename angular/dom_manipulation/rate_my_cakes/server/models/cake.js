const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema({
  rating:{type:Number,require:[true,"Enter a rating betwen 1 and 5"]},
  comment:{type:String,required:[true,'Enter a comment']}
},{timestamps:true});

const cakesSchema = new mongoose.Schema({
  baker:{type:String,required:[true,'Enter a name']},
  cake:{type:String,required:[true,'Enter a cake']},
  rating:[ratingsSchema]
},{timestamps:true});


mongoose.model('Ratings',ratingsSchema);
mongoose.model('Cakes',cakesSchema);