const todos = require('../controllers/todos');

module.exports = app => {
  app.get('/todos',todos.getAll);
  app.get('/todos/:id',todos.getOne);
  app.post('/todos',todos.createOne);
  app.put('/todos/:id',todos.updateOne);
  app.delete('/todos/:id',todos.destroy);
}