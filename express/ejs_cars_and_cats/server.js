const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/cars',(req,res)=>{
  res.render('cars');
})

app.get('/cats',(req,res)=>{
  res.render('cats');
})

app.get('/cars/new',(req,res)=>{
  res.render('form')
})

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});