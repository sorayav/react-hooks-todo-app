import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { 
      text: "Learn about React",
      isComplete: false
    },
    { 
      text: "Meet friend for lunch",
      isComplete: false
    },
    { 
      text: "Build really cool todo app",
      isComplete: false
     }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos]
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            />
        ))}

        <TodoForm 
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
