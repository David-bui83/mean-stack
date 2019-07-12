const animals = require('../controllers/animals');

module.exports = (app)=>{
  app.get('/',animals.index);
  app.get('/mongooses/new',animals.new);
  app.get('/mongooses/:id',animals.getOne);
  app.post('/mongooses',animals.create);
  app.get('/mongooses/edit/:id',animals.edit);
  app.post('/mongooses/:id',animals.view);
  app.post('/mongooses/destroy/:id',animals.destroy);
};