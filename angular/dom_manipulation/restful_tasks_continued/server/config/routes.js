const tasks = require('../controllers/tasks');

module.exports = app =>{
  app.get('/tasks',tasks.getAll);
  app.get('/tasks/:id',tasks.getOne);
  app.post('/tasks',tasks.createOne);
  app.put('/tasks/:id',tasks.updateOne);
  app.delete('/tasks/:id',tasks.destroy);
};