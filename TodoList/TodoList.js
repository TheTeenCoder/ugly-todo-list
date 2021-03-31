import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/ToDo'
function TodoList(props) {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.texft)){
            return 
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }
    let o = (
        <div>
            {todos.map( (todo, id) =>{
                return <Todo content={todo.text}/>
            })}
        </div>
    )
    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <br/>
            {o}
        </div>
    )
}

export default TodoList
