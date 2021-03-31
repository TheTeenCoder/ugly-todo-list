import React, { useState } from 'react'
import './form.css'
function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random(100000)),
            text: input
        })
        setInput('');
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your todo..." 
                    value={input} 
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                /> 
                <button className="todo-input-button">Add</button>
            </form>
        </div>
    )
}

export default ToDoForm
