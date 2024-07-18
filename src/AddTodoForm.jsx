import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {  // Destructure onAddTodo directly from props
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {  // Check to ensure the todo title isn't empty
      onAddTodo({
        title: todoTitle,
        id: Date.now()  // Generates a unique identifier based on the current timestamp
      });
      setTodoTitle('');  // Reset the todo title to an empty string after submitting
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input 
        type="text" 
        id="todoTitle" 
        name="title" 
        value={todoTitle} 
        onChange={handleTitleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
