const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');
const app = express();
app.locals.moment = require('moment');
const PORT = 9000;

mongoose.connect('mongodb://localhost/quoting_dojo');
const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true,'Need to enter a name'], minlength: 2},
  quote: {type: String, required: [true,'Quote is required'], minlength: 10},
  date: {type: Date, default: Date.now()}
});
mongoose.model('User',UserSchema);
const User = mongoose.model('User');

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  
  res.render('index')});

app.post('/quotes',(req,res)=>{
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    quote: req.body.quote,
    date: Date.now()
  })
  user.save(err=>{
    if(err){
      console.log('We have an error!', err);
      for(var key in err.errors){
        req.flash('registration', err.errors[key].message);
      }
      res.redirect('/');
    }else{
      console.log('successfully added a user!');
      res.redirect('/quotes');
    }
  })
  
});

app.get('/quotes',(req,res)=>{
  User.find({},(err,users)=>{
    if(err){
      console.log('There is a problem');
    }else{
      console.log(users);
      res.render('quotes',{users});
    }
  });
  
})

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});