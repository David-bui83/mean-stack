const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tasks',{useNewUrlParser:true});
const models_path = path.join(__dirname,'./../models');
fs.readdirSync(models_path).forEach(file=>{
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file);
  }
});