import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';
import axios from 'axios';
import { TodoItem } from './components/TodoItem';
import { Route, Routes } from 'react-router-dom';
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
  // const filterComplete=()=>{
    // setTodos(currentTodos=>{
    //   return currentTodos.filter(todo=>todo.completed==true)
    // }) 
  // }
  // const filterIncomplete=()=>{
    // setTodos(currentTodos=>{
    //   return currentTodos.filter(todo=>todo.completed==false)
    // }) 
  // }
   useEffect(()=>{
    let da
     axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res=>{
       da=res.data
       
      setTodos(...todos,JSON.parse(da))
      
      })
      .catch(err=> {console.log('Error:',err)})
  },[])
  return (
    <>
    <h1 className='header'>Todo List</h1>
    <div className='links'><a href='/list'>Check Your Todo List</a></div><div><a href='/todoForm'>Add a New Task</a> </div>
    <Routes>
      <Route path='/todoForm' element={<NewTodoForm addTodo={addTodo}/>} />
      <Route path='/list' element={<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>}/>
      <Route path='*' element={<h3>Welcome to Todo List App</h3>}/>
    </Routes>
    {/* <NewTodoForm addTodo={addTodo}/> */}
      
      
      
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> */}
      
    
      </>
  );
}

export default App;
