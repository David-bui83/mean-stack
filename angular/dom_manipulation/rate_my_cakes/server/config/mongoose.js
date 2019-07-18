const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb://localhost/cakes',{useNewUrlParser:true});

const modelsPath = path.join(__dirname,'./../models');
fs.readdirSync(modelsPath).forEach(file=>{
  require(modelsPath + '/' + file);
});