import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
function App() {
  
  const [todos,setTodos]=useState(()=>{
  const localvalue=localStorage.getItem('Items')
  if(localvalue==null) return []
  return JSON.parse(localvalue)
  })
  
useEffect(()=>{
  localStorage.setItem('Items',JSON.stringify(todos))
},[todos])

  function addTodo(title){
    setTodos(currentTodos=>{
      return[
        ...currentTodos,{id: crypto.randomUUID(),title,completed:false}
      ]
    } )
  }
  
  const toggleTodo=(id,completed)=>{
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }
  const deleteTodo=(id)=>{
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id !==id)
    })
  }
  
  return (
    <>
    <NewTodoForm addTodo={addTodo}/>
      
      <h1 className='header'>Todo List</h1>
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    
      </>
  );
}

export default App;
