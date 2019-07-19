const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(PORT,()=>{`Listening on port ${PORT}`});