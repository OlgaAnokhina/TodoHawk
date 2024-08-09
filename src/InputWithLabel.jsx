import React from 'react';

function InputWithLabel({ Title, todoTitle, handleTitleChange,autoFocus = false }) {
  return (
    <>
      <label htmlFor="todoTitle">{Title}</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        autoFocus={autoFocus}
      />
    </>
  );
}

export default InputWithLabel;