const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  index:(req,res)=>{
    res.render('index')},
    
  create:(req,res)=>{
    console.log(req.body);
    const user = new User({
      name: req.body.name,
      quote: req.body.quote,
      date: Date.now()
    })
    user.save(err=>{
      if(err){
        console.log('We have an error!', err);
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
      }else{
        console.log('successfully added a user!');
        res.redirect('/quotes');
      }
    })
    
  },
  
  show:(req,res)=>{
    User.find({},(err,users)=>{
      if(err){
        console.log('There is a problem');
      }else{
        console.log(users);
        res.render('quotes',{users});
      }
    });
  }
}