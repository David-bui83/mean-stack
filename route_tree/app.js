const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(PORT,()=>{`Listening on port ${PORT}`});