import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
function App() {
 const [count, setCount] = useState(0)
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  // Adds the newTodo object to the existing list
  };
  return (
      <div>
        <h1>Todo List</h1>
        
        <AddTodoForm onAddTodo={addTodo}/>
       
        <p>New Todo: {newTodo}</p>
         
        <TodoList todoList={todoList}/>
        

      </div>
    );
  }
  


export default App
