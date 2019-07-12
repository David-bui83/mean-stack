const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const flash = require('express-flash');
const session = require('express-session');
const app = express();
app.locals.moment = require('moment');
const PORT = 9000;

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/static')));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});