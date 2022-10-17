import React, {useState, useEffect} from 'react';
import AddNewTodo from './AddNewTodo';


const TodoList=()=>{
    const [todos, setTodos]=useState([
        {id:1,text:'pay bills',},
        {id:2, text:'2',},
        {id:3,text:'3',}
    ]);
    const addTodo=(text)=>{
        setTodos([
            ...todos,
            {text:text, id:todos.length+1}
        ]);

    }
    useEffect(()=>{
        console.log('useEffect',todos);
    });
    return(
        <div className='ui segment center'>
            <ul>
                {
                    todos.map(todo=>{
                        return(<li key={todo.id}>{todo.text}</li>)
                    })
                }
            </ul>
            <AddNewTodo addTodo={addTodo}></AddNewTodo>
        </div>
    )
}
export default TodoList;