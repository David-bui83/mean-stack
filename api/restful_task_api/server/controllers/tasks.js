const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks');
mongoose.Promise = global.Promise;

module.exports = {
  index:(req,res)=>{
    Tasks.find({},(err,tasks)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:tasks});
      }
    });
  },
  getById:(req,res)=>{
    Tasks.findOne({_id:req.params.id},(err,tasks)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:tasks});
      }
    });
  },
  create:(req,res)=>{
    const newTask = new Tasks(req.body);
    newTask.save((err,task)=>{
      if(err){
        res.json({message:'Error',data:err});
        console.log('Error from creaet', err);
      }else{
        res.json({message:'Success',data:task})
        console.log('Success from create: ',task);
      }
    });
  },
  editById:(req,res)=>{
    console.log(req.params);
    Tasks.updateOne({_id:req.params.id},{$set: {desc:req.body.desc}},(err,task)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:task});
      }
    });
  },
  destroy:(req,res)=>{
    Tasks.remove({_id:req.params.id},err=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:req.params.id});
      }
    })
  }
}