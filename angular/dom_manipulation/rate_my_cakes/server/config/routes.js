const cakes = require('../controllers/cakes');

module.exports = app =>{
  app.get('/cakes',cakes.getAll);
  app.get('/cakes/:id',cakes.getOne);
  app.post('/cakes',cakes.addCake);
  app.put('/cakes/rating/:id',cakes.addRating);
};