const mongoose = require('mongoose');
const Animals = mongoose.model('Animals');
module.exports ={
  index:(req,res)=>{
    Animals.find({},(err,animals)=>{
      if(err){
        console.log('Error from index: ' , err);
        res.render('index');
      }else{
        console.log(animals)
        res.render('index',{animals:animals});
      }
    });
  }, 
  new:(req,res)=>{
    res.render('new');
  },
  getOne:(req,res)=>{
    console.log("Animal id from view: ", req.params.id);
    Animals.findOne({_id:req.params.id},(err,animals)=>{
      if(err){
        console.log('Error from view: ', err);
        res.render('view');
      }else{
        console.log('Successfully retrieved one animal');
        console.log('Animal from view: ', animals);
        res.render('view',{animals});
      }
    });
  },
  create:(req,res)=>{
    const animal = new Animals({
      type: req.body.type,
      name: req.body.name,
      age: req.body.age,
      date: Date.now()
    })
    animal.save(err=>{
      if(err){
        console.log('the error is', err);
        for(let key in err.errors){
          req.flash('validation', err.errors[key].message);
        }
        res.redirect('/mongooses/new');
      }else{
        console.log('successfully added an animal');
        res.redirect('/');
      }
    })
  },
  edit:(req,res)=>{
    console.log('animal id: ',req.params.id);
    Animals.findOne({_id:req.params.id},(err, animals)=>{
      if(err){
        console.log('Error from edit ', err);
        res.render('edit');
      }else{
        console.log("From findOne: ",animals);
        res.render('edit',{animals});
      }
    })
  },
  view:(req,res)=>{
    console.log('Animal Id: ', req.params.id);
    Animals.findOne({_id:req.params.id},(err, animals)=>{
      if(err){
        for(let key in err.errors){
          req.flash('validation', err.errors[key].message);
        }
        res.redirect('/')
      }else{
        animals.type = req.body.type;
        animals.name = req.body.name;
        animals.age = req.body.age;
        animals.save(err=>{
          if(err){
            console.log('Error from update: ', err);
            res.redirect(`/mongooses/${req.params.id}`);
          }else{
            console.log("From findOne: ",animals)
            res.redirect(`/mongooses/${req.params.id}`);
          }
        });
      }
    });
  },
  destroy:(req,res)=>{
    Animals.remove({_id:req.params.id},err=>{
      if(err){
        console.log('Error from delete: ', err);
        res.redirect('/');
      }else{
        console.log('Successfully deleted: ', req.params.id);
        res.redirect('/');
      }
    })
  }
};