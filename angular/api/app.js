const express = require('express');
const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});