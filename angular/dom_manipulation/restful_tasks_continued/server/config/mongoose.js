const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb://localhost/tasks',{useNewUrlParser:true});

const modelsPath = path.join(__dirname,'./../models');
fs.readdirSync(modelsPath).forEach(file=>{
  if(file.indexOf('js')>=0){
    require(modelsPath + '/' + file);
  }
});