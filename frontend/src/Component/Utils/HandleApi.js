import axios from 'axios'

const baseUrl = "http://localhost:5000"


// Get all todo for backend
const getAllTodo = (setTodo) => {
    axios.get(baseUrl)
        .then(({ data }) => {
            console.log("data fetch successfully")
            setTodo(data)
        })
        .catch((err)=>console.log("error in getting todo : ",err))
}

// post data to backend
const addTodo=(text,setText,setTodo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log("data send successfully : ")
        console.log(data)
        setText('')
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log("error in adding data : "+err))
}

// update data to backend
const updateTodo=(todoId,text,setText,setTodo,setUpdating)=>{
  axios.put(`${baseUrl}/save`,{_id:todoId,text})
  .then((data)=>{
    setText('')
    getAllTodo(setTodo)
    setUpdating(false)
    console.log("data updateed successfully")
  })
  .catch((err)=>console.log("fail to update : "+err))
}

// deleting todo
const deleteTodo=(_id,setTodo)=>{
   axios.post(`${baseUrl}/delete`,{_id})
   .then((data)=>{
    console.log("data deleted successfully :"+data)
    getAllTodo(setTodo)
})
   .catch((err)=>console.log("fail to delete data"))
}

export {getAllTodo, addTodo, updateTodo, deleteTodo}