const express = require('express');
const app = express();
const port = '8000';

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');


app.get('/',function(req,res){
  res.send('Hello')
})

app.get('/users',function(req,res){
  let users_array = [
    {name: 'Michael', email: 'michael@codingdojo.com'},
    {name: 'Jay', email: 'jay@codingdojo.com'},
    {name: 'Brendon', email: 'brendan@codingdojo.com'},
    {anme: 'Andrew', email: 'andrew@codingdojo.com'}
  ];
  res.render('users', {users: users_array})
})

app.listen(port,()=>{console.log(`Listtening on port ${port}`)});