const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks');

module.exports = {
  getAll:(req,res)=>{
    Tasks.find({},(err,tasks)=>{
      if(err){
        res.json({message:'Error',data:tasks});
      }else{
        res.json({message:'Success',data:tasks});
      }
    });
  },
  getOne:(req,res)=>{
    Tasks.findById({_id:req.params.id},(err,task)=>{
      if(err){
        res.json({message:'Error',data:task});
      }else{
        res.json({message:'Success',data:task});
      }
    });
  },
  createOne:(req,res)=>{
    const newTask = new Tasks(req.body);
    newTask.save((err,task)=>{
      if(err){
        res.json({message:'Error',data:task});
      }else{
        res.json({message:'Success',data:task});
      }
    });
  },
  updateOne:(req,res)=>{
    Tasks.findByIdAndUpdate({_id:req.params.id},{$set:{title:req.body.title,desc:req.body.desc,completed:req.body.completed}},(err,task)=>{
      if(err){
        res.json({message:'Error',data:task});
      }else{
        res.json({message:'Success',data:task});
      }
    })
  },
  destroy:(req,res)=>{
    Tasks.findByIdAndDelete({_id:req.params.id},(err,task)=>{
      if(err){
        res.json({message:'Error',data:task});
      }else{
        res.json({message:'Success',data:task});
      }
    });
  }
};