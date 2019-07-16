const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9876;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});