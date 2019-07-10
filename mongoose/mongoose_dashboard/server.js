const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
app.locals.moment = require('moment');
const PORT = process.env.PORT || 7000;

mongoose.connect('mongodb://localhost/dashboard');
const AnimalSchema = new mongoose.Schema({
  type: {type: String, required: [true, 'Need to enter an animal'], minlength:2},
  name: {type: String, required:[true, 'Name must be longer than 2 characters']},
  age:{type: Number, require:[true, 'Need to have an age']},
  date: {type: Date, default: Date.now()}
})
const Animals = mongoose.model('Animals',AnimalSchema);

app.use(session({
  secret: 'theverysecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  Animals.find({},(err,animals)=>{
    if(err){
      console.log('Error from index: ' , err);
      res.render('index');
    }else{
      console.log(animals)
      res.render('index',{animals:animals});
    }
  });
});

app.get('/mongooses/new',(req,res)=>{
  res.render('new');
});

app.get('/mongooses/:id',(req,res)=>{
  console.log("Animal id from view: ", req.params.id);
  Animals.findOne({_id:req.params.id},(err,animals)=>{
    if(err){
      console.log('Error from view: ', err);
      res.render('view');
    }else{
      console.log('Successfully retrieved one animal');
      console.log('Animal from view: ', animals);
      res.render('view',{animals});
    }
  });
});

app.post('/mongooses',(req,res)=>{
  const animal = new Animals({
    type: req.body.type,
    name: req.body.name,
    age: req.body.age,
    date: Date.now()
  })
  animal.save(err=>{
    if(err){
      console.log('the error is', err);
      for(let key in err.errors){
        req.flash('validation', err.errors[key].message);
      }
      res.redirect('/mongooses/new');
    }else{
      console.log('successfully added an animal');
      res.redirect('/');
    }
  })
});

app.get('/mongooses/edit/:id',(req,res)=>{
  console.log('animal id: ',req.params.id);
  Animals.findOne({_id:req.params.id},(err, animals)=>{
    if(err){
      console.log('Error from edit ', err);
      res.render('edit');
    }else{
      console.log("From findOne: ",animals);
      res.render('edit',{animals});
    }
  })
})

app.post('/mongooses/:id',(req,res)=>{
  console.log('Animal Id: ', req.params.id);
  Animals.findOne({_id:req.params.id},(err, animals)=>{
    if(err){
      for(let key in err.errors){
        req.flash('validation', err.errors[key].message);
      }
      res.redirect('/')
    }else{
      animals.type = req.body.type;
      animals.name = req.body.name;
      animals.age = req.body.age;
      animals.save(err=>{
        if(err){
          console.log('Error from update: ', err);
          res.redirect(`/mongooses/${req.params.id}`);
        }else{
          console.log("From findOne: ",animals)
          res.redirect(`/mongooses/${req.params.id}`);
        }
      });
    }
  });
});

app.post('/mongooses/destroy/:id',(req,res)=>{
  Animals.remove({_id:req.params.id},err=>{
    if(err){
      console.log('Error from delete: ', err);
      res.redirect('/');
    }else{
      console.log('Successfully deleted: ', req.params.id);
      res.redirect('/');
    }
  })
});

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`);});