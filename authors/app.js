const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT = 5555;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,console.log(`Listening on port ${PORT}`));