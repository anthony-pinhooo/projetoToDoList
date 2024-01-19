import { useState } from 'react'

import Todo from './component/todo';
import TodoForm from './component/TodoForm';
import Search from './component/Search';

import './App.css'


function App() {
  // eslint-disable-next-line no-unused-vars

  // Lista de mockup para teste
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

  const [search, setSearch] = useState("")

  const addTodo = (text, category) => {
      const newTodos = [...toDos, {
        // Criando um id único para cada item
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    // Setando a nova lista de ToDos
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    // Passando os valores da lista para a variável
    const newTodos = [...toDos]

    // Filtrando os valores que são iguais ao valor retornado pela função
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    // Setando a nova lista
    setTodos(filteredTodos)
  };

  const completeTodo = (id) => {
    const newTodos = [...toDos]
    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo)

    setTodos(newTodos)
  };

  

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {toDos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
          // eslint-disable-next-line react/jsx-key
          <Todo 
            key={todo.id} 
            texto={todo.text} 
            categoria={todo.category} 
            id={todo.id} 
            feito={todo.isCompleted} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App
