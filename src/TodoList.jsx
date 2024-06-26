import React from 'react';

var todoList = [
  { id: 1, title: 'make a homework' },
  { id: 2, title: 'play with kids' },
  { id: 3, title: 'read a book' }
];

function TodoList() {
  return (
    <div>
      
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


