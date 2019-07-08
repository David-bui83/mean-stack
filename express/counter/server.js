const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 7777;

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

  if(req.session.count === undefined){
    req.session['count'] = 0
  }
  const count = {
    count: req.session['count'] += 1
  };
  
  res.render('index', {count});
});

app.post('/click',(req,res)=>{
  req.session['count'] += 1;
  res.redirect('/');
});

app.post('/reset',(req,res)=>{
  req.session['count'] = 0;
  res.redirect('/');
});

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});
