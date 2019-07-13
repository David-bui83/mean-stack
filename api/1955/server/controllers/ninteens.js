const mongoose = require('mongoose');
const Ninteens = mongoose.model('Ninteens');

module.exports = {
  index:(req,res)=>{
    Ninteens.find({},(err,ninteens)=>{
      if(err){
        console.log('Error from index: ', err);
      }else{
        res.json({message: 'Success',data: ninteens});
      }
    });
  },
  newName:(req,res)=>{
    const newPerson = new Ninteens(req.params)
    newPerson.save(err=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:req.params.name});
      }
    });
  },
  removeName:(req,res)=>{
    Ninteens.remove({name:req.params.name},err=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        console.log('Successfully remove', req.params.name);
        res.json({message:'Remove success',data:req.params.name});
      }
    });
  },
  viewOne:(req,res)=>{
    Ninteens.findOne({name:req.params.name},(err,data)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  }
};