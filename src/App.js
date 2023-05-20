import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
import axios from 'axios';
import { TodoItem } from './components/TodoItem';
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
  // useEffect(()=>{
  //   let da
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then(res=>{
  //     da=res.data
  //     console.log(da)
  //   })
  //   return(
  //   <div>{da.map(todo=>{
  //     <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  //   })}</div>
  // )
  // },[])
  // const getData=()=>{
  //   // debugger
  // return  axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then(res=>{
  //     const da=res.data
  //     console.log(da)
  //     return(
  //       <div>{da.map(todo=>{
  //       return  <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> 
  //       })}</div>
      
  //     )
          
      
  //   })
  //   .catch(err=>console.log('Error catching: ',err ))
  //   // return <p>{data}</p>
  // }
  return (
    <>
    <NewTodoForm addTodo={addTodo}/>
      
      <h1 className='header'>Todo List</h1>
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      
    
      </>
  );
}

export default App;
