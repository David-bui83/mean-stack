const express = require('express');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const app = express();
app.locals.moment = require('moment');
const PORT = process.env.PORT || 1983;

app.use(session({
  secret: 'blahblah',
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:6000}
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine',ejs);

require('./server/config/mongoos');
require('./server/config/routes')(app);

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});