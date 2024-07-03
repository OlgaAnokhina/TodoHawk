import React from 'react';
import TodoListItem from './TodoListItem';

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
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


