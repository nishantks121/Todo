const mongoose=require('mongoose')

const todoSchema= new mongoose.Schema({
    text:String
})

module.exports=new mongoose.model('tododata',todoSchema)