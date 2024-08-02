/*import { useState } from 'react'*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//import React, { useState } from 'react'; 
import React, { useState, useEffect } from 'react'; // Добавляем импорт useEffect




function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem('savedTodoList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App