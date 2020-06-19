import React, { useState } from 'react';

function TodoForm ({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = ev => {
    ev.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder=" +  Write a new task"
        onChange={ev => setValue(ev.target.value)}
      />
    </form>
  )
}

export default TodoForm;