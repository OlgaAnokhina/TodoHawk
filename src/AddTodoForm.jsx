import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
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
     <InputWithLabel
     Title="Title:"
     todoTitle={todoTitle}
     handleTitleChange={handleTitleChange}
     />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
