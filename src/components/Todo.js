import React, { useState } from 'react';

function Todo ({ todo, index, completeTodo, removeTodo }) {
  const [colors, setColors] = useState(["red", "yellow", "blue", "green", "purple", "pink"]);
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // const bgColor = () => {  
  //   setColors(color);
  // }

  return (
    <div className={`todo ${todo.isComplete ? "green" : ""}`} style={{ textDecoration: todo.isComplete ? "line-through" : "", backgroundColor: todo.isComplete ? "rgb(58, 188, 97)" : "", boxShadow: todo.isComplete ? `inset 0px 1px 3px green` : "" }}>{todo.text}

      <div className="todo-btns">
        <button className="btn-complete" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn-remove" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
    )
}

export default Todo;