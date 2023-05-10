const express = require('express')
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../Controllers/TodoController')
const route = express()

route
   .get('/', getTodo)
   .post('/save', saveTodo)
   .put('/save',updateTodo)
   .post('/delete',deleteTodo)


module.exports = route