const authors = require('../controllers/authors');
const path = require('path');

module.exports = app => {
  app.get('/authors', authors.getAll);
  app.get('/authors/:id',authors.getOne);
  app.post('/authors',authors.createOne);
  app.put('/authors/edit/:id',authors.updateOne);
  app.delete('/authors/:id',authors.destroy);
  // Goes here where there is a route and needs to be the last one, else goes in app.js
  app.all('*',(req,res,next)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  })
};