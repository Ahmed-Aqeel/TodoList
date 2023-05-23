import React,{useState} from "react";
import '../App.css' 

export function NewTodoForm({addTodo}){
    const [newItem,setNewItem]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        addTodo(newItem)
        setNewItem('')
      }

    return(
       <>
       <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          
          <div><input placeholder="Enter New Task Here" className="input" value={newItem} onChange={e=>setNewItem(e.target.value)} type='text' id='item'/></div>
        </div>  
        <button className='btn'>Add Task</button>
        
      </form>
       
       </> 
    )
}