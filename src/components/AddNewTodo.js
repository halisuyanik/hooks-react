import React, { useState } from 'react';

const AddNewTodo=({addTodo})=>{
    const [todo, setTodo]=useState('');
    const onFormSubmit=e=>{
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };
    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor='todo'></label>
            <div className='ui input focus'>
                <input id='todo' value={todo} type="text" onChange={(e)=>setTodo(e.target.value)} />
            </div>
            <input className='ui purple button' value='add a todo' type="submit"></input>
        </form>
    )
}
export default AddNewTodo;