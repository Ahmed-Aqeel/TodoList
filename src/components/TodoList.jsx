import { useState } from "react"
import { TodoItem } from "./TodoItem"
import Search from "./Search"

export function TodoList({todos,toggleTodo,deleteTodo,handleSave, handleEdit,editTaskId,editTaskTitle,setEditTaskTitle}){
    return(
      <>
      
      
    <ul className='list'>
        
        
        {todos.length===0 && 'No Todos'}
        <Search todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} handleSave={handleSave} handleEdit={handleEdit} editTaskId={editTaskId} editTaskTitle={editTaskTitle} setEditTaskTitle={setEditTaskTitle}/>
        {todos.map(todo=>{
            
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo} handleSave={handleSave} handleEdit={handleEdit} editTaskId={editTaskId} editTaskTitle={editTaskTitle} setEditTaskTitle={setEditTaskTitle}/> )
        })}

        
      </ul>
      </>
      )
}