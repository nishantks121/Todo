import React, { useEffect, useState } from 'react';
import Todo from './Component/Todo';
import { getAllTodo, addTodo, updateTodo, deleteTodo } from './Component/Utils/HandleApi';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]) // contain all todo data
  const [text,setText] =useState('') // contain input box value 
  const [updating,setUpdating]=useState(false) // update mode is on or  off
  const [todoId,setTodoId]=useState("")   // contain id of selected todo


  useEffect(()=>{
    getAllTodo(setTodo)
  },[])

  const updateMode=(_id,text)=>{
    setUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="app">
      <div className='container'>
        <h1>Todo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add Todo..'
           value={text} onChange={(e)=>setText(e.target.value)}/>
          <div className='add' onClick={updating?()=>updateTodo(todoId,text,setText,setTodo,setUpdating):
            ()=>addTodo(text,setText,setTodo)}>
            {updating?"Update":"Add"}</div>
        </div>

        <div className='list'>
          {
            todo.map((item) => {
              return (
                <Todo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteTodo={()=>deleteTodo(item._id,setTodo)} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
