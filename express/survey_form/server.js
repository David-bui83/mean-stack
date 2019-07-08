const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const app = express();
const PORT = 5555;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 6000}
}));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index');
});

app.post('/results',(req,res)=>{
  const info = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('result',{info});
})

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});