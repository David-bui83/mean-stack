const tasks = require('../controllers/tasks');

module.exports = app => {
  app.get('/tasks',tasks.index);
  app.get('/tasks/:id',tasks.getById);
  app.post('/tasks',tasks.create);
  app.put('/tasks/:id',tasks.editById);
  app.delete('tasks/:id',tasks.destroy);
};