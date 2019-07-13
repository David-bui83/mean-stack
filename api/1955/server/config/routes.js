const ninteens = require('../controllers/ninteens');

module.exports = app => {
  app.get('/',ninteens.index);
  app.get('/new/:name',ninteens.newName);
  app.get('/remove/:name',ninteens.removeName);
  app.get('/:name',ninteens.viewOne);
};