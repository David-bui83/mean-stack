const express = require('express');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const ejs = require('ejs');
const path = require('path');
const app = express();
app.locals.moment = require('moment');
const PORT = process.env.PORT || 9898;

app.use(session({
  secret: 'nononono',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000}
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/static')));
app.use(express.static(__dirname + '/public/dist/public'));
app.use(flash());

app.set('views',path.join(__dirname,'/views'));
app.set('view engine',ejs);

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{`Listening on port${PORT}`});