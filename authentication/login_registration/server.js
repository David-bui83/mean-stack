const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const app = express();
const bcrypt = require('bcryptjs');
app.locals.moment = require('moment');
const PORT = process.env.PORT || 8888;
const regex = require('regex');

mongoose.connect('mongodb://localhost/logreg',{ useNewUrlParser: true });
const REG_EMAIL = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

function regValidation(postData){
  const errors = {};
  const bd = new Date(postData.birthday);

  if(postData.first_name.length < 2){
    errors['first_name'] = 'First name needs to be at least 2 characters';
  }
  if(postData.last_name.length < 2){
    errors['last_name'] = 'Last name needs to be at least 2 characters';
  } 
  if(!postData.email.match(REG_EMAIL) || postData.email.length === 0){
    errors['email'] = 'Email must be in a valid format';
  } 
  if(postData.password.length < 8){
    errors['password'] = 'Password must be at least 8 characters'
  } 
  if(postData.cpw !== postData.password){
    errors['cpw'] = 'Confirm Password must match password';
  }
  if(bd == 'Invalid Date'){
    errors['birthday'] = 'Birthday field cannot be empty';
  }else{
    if(bd > Date.now()){
      errors['birthday'] = 'Birthday cannot be in the future';
    }
  } 
  return errors;
}

const userSchema = new mongoose.Schema({
  first_name:{type:String,require:[true,'First name length needs to be at least two characters'],minlength:2},
  last_name:{type:String,require:[true,'Last name length needs to be at least two characters'],minlength:2},
  email:{type:String,trim:true,unique:true,require:[true,'Needs to have a valid email']},
  password:{type:String,require:[true,'Passwords needs to be at least 8 characters'],minlength:8},
  birthday:{type:Date,require:[true,'Please enter a birthday']}
})
const Users = mongoose.model('Users',userSchema);

app.use(session({
  secret: 'KeyKeyKeyKey',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
mongoose.set('useCreateIndex', true);

app.get('/',(req,res)=>{
  Users.find({},(err,users)=>{
    if(err){
      console.log('Error from index:', err);
    }else{
      console.log(users);
    }
  })
  res.render('index');
});

app.post('/registration',(req,res)=>{
  const err = regValidation(req.body);
  console.log(err)
  if(err.length > 0){
    for(let key of err){
      req.flash('reg', err[key]);
      console.log(err[key])
    }
  }else{

    // Users.create(req.body,(err,data)=>{
    //   if(err){
    //     for(let key in err.errors){
    //       req.flash('validation',err.errors[key].message);
    //     }
    //     console.log('Error from registration: ', err);
    //   }else{
    //     console.log(data);
    //   }
    // })
  }

  res.redirect('/');
});

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});

