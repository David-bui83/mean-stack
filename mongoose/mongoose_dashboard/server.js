const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const PORT = process.env.PORT || 7000;

mongoose.connect('mongodb://localhost/dashboard');
const AnimalSchema = new.mongoose.Schema({
  animal: {type: String, required: true, minlength:2},
})

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

app.get('/',(req,res)=>{res.render('index')});

app.get('/mongoose/:id',(req,res)=>{

})

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});