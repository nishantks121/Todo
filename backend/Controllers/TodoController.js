const todoModel=require('../Models/TodoModel')

// retrive all todo data from database (get)
module.exports.getTodo=async(req,res)=>{
    const todo=await todoModel.find()
    res.send(todo)
}

// send all tododata to database (post)
module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body
   todoModel.create({text})
   .then((data)=>{
    console.log("Added Successfully...")
    console.log(data)
    res.send(data) 
})
   .catch((err)=>console.log("Fail to send data : "+err))
}

// update data from database (update)
module.exports.updateTodo=async(req,res)=>{
    const {_id,text}=req.body
    todoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{
        console.log("Update Successfully...")
        res.send("Updated Successfully...")
    })
    .catch((err)=>console.log("Some error occur : "+err))
}

// delte data from database (delete)
module.exports.deleteTodo=async(req,res)=>{
    const {_id}=req.body
    todoModel.findByIdAndDelete(_id)
    .then(()=>{
        console.log("Delete Successfully")
        res.send("Deleted Successfully...")
    })
    .catch((err)=>console.log("Some error occur : "+err))
}