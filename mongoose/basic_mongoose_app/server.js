const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

mongoose.connect('mongodb://localhost/basic_mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  location: String,
  language: String,
  comment: String
 });
 mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
 const User = mongoose.model('User')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  User.find({},(err, users)=>{
    if(err){
      console.log('There is a problem');
    }else{
      console.log(users);
    }
  })

  res.render('index')
});

app.post('/users',(req,res)=>{
  console.log("POST DATA: ", req.body);

  const user = new User({name: req.body.name, location:req.body.location,language: req.body.language,comment:req.body.comment});
  user.save(err=>{
    if(err){
      console.log('something went wrong');
    }else{
      console.log('successfully added a user!')
    }
  })

  res.redirect('/');
});

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});