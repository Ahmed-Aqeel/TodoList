import { useState } from "react"
import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggleTodo,deleteTodo}){
    const [completeOnly,setCompleteOnly]=useState(false)
    const [incompleteOnly,setIncompleteOnly]=useState(false)
    const toggleComplete=()=>{
      setCompleteOnly(!completeOnly)
      console.log(completeOnly);
    }
    const toggleIncomplete=()=>{
      
      setIncompleteOnly(!incompleteOnly)
      console.log(incompleteOnly);
    }
    const [comTodos,setComTodos]=useState(
      // [todos.filter(todo=>todo.completed===true)]
      
      )
    // console.log(comTodos)
    const [incomTodos,setIncomTodos]=useState(
      // [todos.filter(todo=>todo.completed===false)]
      )
      
    return(
    <ul className='list'>
        <button onClick={toggleIncomplete} >Show All Incomplete Tasks</button><button onClick={toggleComplete}>Show All Complete Tasks</button>
        {todos.length===0 && 'No Todos'}
        
        {completeOnly===false && incompleteOnly===false && todos.map(todo=>{
            
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> )
        })}

        {completeOnly===true && incompleteOnly===false && comTodos.map(todo=>{
            
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> )
        })}
        {completeOnly===false && incompleteOnly===true && incomTodos.map(todo=>{
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> )
        })}
        {completeOnly===true && incompleteOnly===true && <p>Uncheck one of the buttons</p> }
      </ul>
      )
}