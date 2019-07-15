const mongoose = require('mongoose');
const Todos = mongoose.model('Todos');
mongoose.Promise = global.Promise;

module.exports = {
  getAll:(req,res)=>{
    Todos.find({},(err,todos)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({mesasge:'Success',data:todos});
      }
    });
  },
  getOne:(req,res)=>{
    Todos.findOne({_id:req.params.id},(err,todo)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:todo});
      }
    });
  },
  createOne:(req,res)=>{
    const newTodo = new Todos(req.body);
    newTodo.save((err,todo)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:todo});
      }
    });
  },
  updateOne:(req,res)=>{
    Todos.updateOne({id:req.params.id},{$set:{desc:req.body.desc}},(err,todo)=>{
      if(err){
        req.json({message:'Error',data:err});
      }else{
        req.json({message:'Success',data:todo});
      }
    });
  },
  destroy:(req,res)=>{
    Todos.remove({_id:req.params.id},(err,todo)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:todo})
      }
    });
  }
}