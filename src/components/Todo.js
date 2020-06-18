import React, { useState } from 'react';

function Todo ({ todo, index, completeTodo, removeTodo }) {
  const [colors, setColors] = useState(["red", "yellow", "blue", "green", "purple", "pink"]);

  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`todo ${todo.isComplete ? "green" : ""}`} style={{ textDecoration: todo.isComplete ? "line-through" : "", backgroundColor: todo.isComplete ? "rgb(58, 188, 127)" : "" }}>{todo.text}

      <div>
        <button className="btn-complete" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn-remove" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
    )
}

export default Todo;