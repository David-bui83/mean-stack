const mongoose = require('mongoose');
const Films = mongoose.model('Films');
const Reviews = mongoose.model('Reviews');

module.exports = {
  getAll:(req,res)=>{
    Films.find({},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  },
  getOne:(req,res)=>{
    Films.findById({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  },
  new:(req,res)=>{
    console.log('new movie from new: ',req.body);
    Films.create({title:req.body.title},(err,film)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        Reviews.create({name:req.body.name,rating:req.body.rating,review:req.body.review},(err,rev)=>{
          if(err){
            res.json({message:'error',data:err});
          }else{
            console.log('film id: ',film._id);
            console.log('film review body: ',rev);
            Films.findByIdAndUpdate({_id:film._id},{$push:{reviews:rev}},{ "upsert": true, "new": true },(err,data)=>{
              console.log('final return from create: ',data)
              if(err){
                res.json({message:'error',data:err});
              }else{
                res.json({message:'success',data:data});
              }
            });
          }
        });
      }
    });
  },
  add:(req,res)=>{
    Reviews.create(req.body,(err,review)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        Films.findByIdAndUpdate({_id:req.params.id},{$push:{reviews:review}},(err,data)=>{
          if(err){
            res.json({message:'error',data:err})
          }else{
            res.json({message:'success',data:data});
          }
        });
      }
    });
  },
  destroy:(req,res)=>{
    Films.findByIdAndDelete({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    });
  }
};