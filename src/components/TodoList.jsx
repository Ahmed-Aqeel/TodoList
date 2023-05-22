import { useState } from "react"
import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggleTodo,deleteTodo,filterComplete,filterIncomplete}){
    const [completeOnly,setCompleteOnly]=useState(false)
    const [incompleteOnly,setIncompleteOnly]=useState(false)
    return(
    <ul className='list'>
        <button onClick={()=>filterIncomplete}>Show All Incomplete Tasks</button><button onClick={()=>filterComplete}>Show All Complete Tasks</button>
        {todos.length===0 && 'No Todos'}
        {todos.map(todo=>{
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> )
        })}
      </ul>
      )
}