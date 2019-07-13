const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
app.locals.moment = require('moment');
const PORT = process.env.PORT || 9999;

app.use(session({
  secret: 'notsosecret',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/static')));
app.use(flash());

app.set('view',path.join(__dirname,'/views'));
app.set('views engine', ejs);

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});
