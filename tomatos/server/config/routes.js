const films = require('../controllers/films');
const path = require('path');

module.exports = (app) => {
  app.get('/api/films',films.getAll);
  app.get('/api/films/:id',films.getOne);
  app.post('/api/films',films.new);
  app.put('/api/films/add/:id',films.add);
  app.delete('/api/films/:id',films.destroy);
  app.all('*',(req,res)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });
};