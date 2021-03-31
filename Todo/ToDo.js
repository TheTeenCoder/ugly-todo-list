import React, {useState} from 'react';
import './ToDo.css'
const Todo = ({content}) => {
  const [done, setCount] = useState(false);
  const click = (e) => {
    e.preventDefault();
    setCount(!done);
  }
  return <h1 className="todo" onClick={click} styles={done?{color: 'blue'}:null}> - {content}</h1>
};

export default Todo;