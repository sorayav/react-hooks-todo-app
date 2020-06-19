import React, { useState } from 'react';
import './styles/App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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
      text: "Build really cool to-do app",
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
      // setTimeout((index) => {
      //   newTodos.splice(index, 1);
      // }, 1500);
    setTodos(newTodos);
    const gradient = document.querySelector('.todo-gradient');
    gradient.classList.add('rotate');
    setTimeout(() => {
      gradient.classList.remove('rotate');
    }, 1000);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      {/* <div className="todo-app"> */}
      <div className={`todo-gradient ${todos.isComplete ? "rotate" : ""}`}>
      <div className={`todo-counter`}>
        <span className="todo-counter__number">{todos.length}</span> tareas
      </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
      </div>
      {/* </div> */}
      <TodoForm 
          addTodo={addTodo}
        />
    </div>
  );
}

export default App;
