

export function TodoItem({completed,id,title,toggleTodo,deleteTodo,handleSave,handleEdit,editTaskId,editTaskTitle,setEditTaskTitle}){
 

    
    return(
        <ul className="ul">
            <label className="label">
              <input type='checkbox' checked={completed} onChange={e=>toggleTodo(id,e.target.checked)}/>
              {editTaskId===id?(<input className="input" type='text' value={editTaskTitle} onChange={e=>setEditTaskTitle(e.target.value)}/>):(<span className="input">{title}</span>)}
            </label>

            {editTaskId===id?(
                <button className="btn" onClick={()=>handleSave(id)}>Save</button>
            ):(
                <button className="btn" onClick={()=>handleEdit(id,title)}>Edit</button>    
            )}
           
            <button onClick={()=>deleteTodo(id)} className='btn del'>Delete</button>
        </ul>

    )


}