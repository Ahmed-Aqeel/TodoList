import { TodoItem } from "./TodoItem"
import { useState } from "react"
function Search({todos,toggleTodo,deleteTodo,handleSave,handleEdit,editTaskId,editTaskTitle,setEditTaskTitle}){
  const [search,setSearch]=useState('')
  const searchTasks=todos.filter((todo)=>todo.title.toLowerCase().includes(search.toLowerCase()))
  const handleSearch=(e)=>setSearch(e.target.value)
  return(
    <>
    <div className="input-div"> <input className="input" placeholder="Search Tasks Here" type="text" value={search} onChange={handleSearch} /></div>
    {searchTasks.map(todo=>{
            
            return(
          <TodoItem id={todo.id} completed={todo.completed} title={todo.title} toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos} handleSave={handleSave} handleEdit={handleEdit} editTaskId={editTaskId} editTaskTitle={editTaskTitle} setEditTaskTitle={setEditTaskTitle} /> )
        })}
    </>
  )  
}

export default Search