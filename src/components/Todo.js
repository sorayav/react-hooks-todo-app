import React from 'react';

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>{todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)} >x</button>
      </div>
    </div>
    )
}

export default Todo;