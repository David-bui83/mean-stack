const express = require('express');
console.log("let's find out what is express is", express);

const app = express();
console.log("Let's find out what app is", app);


app.get('/', function(req,res){
  res.send('Hello Express, Hello Express');
})

app.listen(8000,function(){
  console.log('Listening on 8000');
})