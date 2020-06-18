import React from 'react';

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo ${todo.isComplete ? "green" : ""}`} style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>{todo.text}

      <div>
        <button className="btn-complete" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn-remove" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
    )
}

export default Todo;