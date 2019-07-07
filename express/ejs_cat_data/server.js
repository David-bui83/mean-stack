const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 9999;

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/cats',(req,res)=>{
  res.render('cats');
});

app.get('/cats/fluffy',(req,res)=>{

  const cat = 
    {picture: 'cat1.jpeg',
     name: 'Fluffy',
     food: 'Spaghetti',
     age: 3,
     spots: ['under the bed','in a sunbeam']   
    }
  res.render('details',{cat});
});

app.get('/cats/cotton',(req,res)=>{
  const cat = 
    {picture: 'cat2.jpg',
     name: 'Cotten',
     food: 'Pizza',
     age: 3,
     spots: ['on the tree','in the yard']   
    }
  res.render('details',{cat});
});

app.get('/cats/mitten',(req,res)=>{
  const cat = 
    {picture: 'cat3.jpeg',
     name: 'Mitten',
     food: 'Fish',
     age: 2,
     spots: ['on the pillow','on the floor']   
    }
  res.render('details',{cat});
});


app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});