import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
import axios from 'axios';
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
  
  const getData=()=>{
    debugger
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>{
      const da=res
      console.log(da.data[0])
      console.log(da)
    })
    .catch(err=>console.log('Error catching: ',err ))
    // return <p>{data}</p>
  }
  return (
    <>
    <NewTodoForm addTodo={addTodo}/>
      
      <h1 className='header'>Todo List</h1>
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div>{getData()}</div>
    
      </>
  );
}

export default App;
