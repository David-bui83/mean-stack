const mongoose = require('mongoose');
const Cakes = mongoose.model('Cakes');
const Ratings = mongoose.model('Ratings');

module.exports = {
  getAll:(req,res)=>{
    Cakes.find({},(err,cakes)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:cakes});
      }
    });
  },
  getOne:(req,res)=>{
    Cakes.findById({_id:req.params.id},(err,cake)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:cake});
      }
    });
  },
  addCake:(req,res)=>{
    console.log(req.body);
    const newCake = new Cakes(req.body);
    newCake.save((err,cake)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:cake});
      }
    })
  },
  addRating:(req,res)=>{
    console.log(req.body);
    Ratings.create(req.body,(err,rating)=>{
      console.log(rating);
      if(err){
        res.json({message:'Error',data:err});
      }else{
        Cakes.findByIdAndUpdate({_id:req.params.id},{$push:{rating:rating}},(err,cake)=>{
          if(err){
            res.json({message:'Error',data:err});
          }else{
            res.json({message:'Success',data:cake})
          }
        });
      }
    });
  }
}