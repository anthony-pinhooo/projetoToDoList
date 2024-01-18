import { useState } from 'react'
import Todo from './component/Todo';
import TodoForm from './component/TodoForm';

import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [toDos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema", 
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia", 
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React", 
      category: "Estudo",
      isCompleted: false
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...toDos, ]
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {toDos.map((todo) => (
          // eslint-disable-next-line react/jsx-key
          <Todo key={todo.id} texto={todo.text} categoria={todo.category}/>
   