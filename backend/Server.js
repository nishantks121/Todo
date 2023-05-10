const express =require('express')
const mongoose =require('mongoose')
const cors=require('cors')
require('dotenv').config()

const routes=require('./Routes/Routes')
const app=express()

// Defining Constants
const Port=process.env.PORT || 4000
const Url=process.env.URL || "mongodb://0.0.0.0:27017/todo"


// MiddleWares for sending data to db & routes 
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(routes)


// Database Connectivity
const main=async()=>{
   await mongoose.connect(Url)
}
main().then(()=>console.log("Database Connected")).catch((err)=>console.log("Fail to Connect to DB : "+err))


// Server
app.listen(Port,()=>{
    console.log(`server started at : ${Port}`)
})