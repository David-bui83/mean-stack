const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session =require('express-session');
const app = express();
app.locals.moment = require('moment');
const PORT = process.env.PORT || 13000;

mongoose.connect('mongodb://localhost:27017/messageBoard');

const commentSchema = new mongoose.Schema({
  name:{type:String,required:[true,'Please enter a name']},
  comment:{type:String,required:[true,'Please enter a comment']}
},{timestamps:true});
const Comments = mongoose.model('Comments',commentSchema);

const messageSchema = new mongoose.Schema({
  name:{type:String, required:[true,'Please enter a name']},
  message:{type:String,required:[true,'Please enter a comment']},
  comments:[commentSchema]
},{timestamps:true});
const Messages = mongoose.model('Messages',messageSchema);

app.use(session({
  secret: 'ThisIsTheSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  Messages.find({},(err,messages)=>{
    if(err){
      console.log('Errors from index: ', err);
    }else{
      console.log(messages)
      res.render('index',{messages:messages})
    }
  });
});

app.post('/messages/new',(req,res)=>{
  // console.log(req.body);
  Messages.create(req.body,(err,data)=>{
    if(err){
      for(let key in err.errors){
        req.flash('validation', err.errors[key].message);
      }
      console.log('Error from message: ', err);
      res.redirect('/');
    }else{
      console.log(data);
      res.redirect('/');
    }
  });
  
});

app.post('/comments/new/:id',(req,res)=>{
  // console.log(req.body);
  Comments.create(req.body,(err,data)=>{
    if(err){
      console.log('Error from comment: ', err);
      for(let key in err.errors){
        req.flash('commentValidation', err.errors[key].message);
      }
    }else{
      // console.log(data);
      Messages.findOneAndUpdate({_id:req.params.id},{$push:{comments:data}},(err,data)=>{
        if(err){
          console.log('Error from saving comment: ', err);
        }else{
          console.log(data),
          data.save()
        }
      })
    }
  })
  res.redirect('/');
})

app.listen(PORT,()=>{console.log(`Listening on ${PORT}`)});