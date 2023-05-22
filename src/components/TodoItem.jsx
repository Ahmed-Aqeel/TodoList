export function TodoItem({completed,id,title,toggleTodo,deleteTodo}){
    return(
        <ul>
            <label>
              <input type='checkbox' checked={completed} onChange={e=>toggleTodo(id,e.target.checked)}/>{title}
            </label>
            <button className="btn edit">Edit</button>
            <button onClick={()=>deleteTodo(id)} className='btn del'>Delete</button>
        </ul>

    )


}