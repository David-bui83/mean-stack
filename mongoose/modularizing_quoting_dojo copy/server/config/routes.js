const quotes = require('../controllers/users');

module.exports = (app)=>{
  app.get('/',quotes.index);
    
  app.post('/quotes',quotes.create);
  
  app.get('/quotes',quotes.show);
};

