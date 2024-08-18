import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import React, { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    if (!isLoading) {
      console.log('Сохранение данных в localStorage:', todoList);
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  useEffect(() => {
    console.log('Начало загрузки данных...');
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Загрузка данных из localStorage
        const saved = JSON.parse(localStorage.getItem('savedTodoList')) || [];
        console.log('Загруженные данные из localStorage:', saved);
        resolve({ data: { todoList: saved } });
      }, 2000);
    });

    myPromise
      .then(result => {
        console.log('Данные успешно загружены:', result.data.todoList);
        setTodoList(result.data.todoList);
        setIsLoading(false); // Завершаем загрузку
      })
      .catch(error => {
        console.log('Ошибка при загрузке данных:', error.message);
        setIsLoading(false); // Завершаем загрузку даже в случае ошибки
      });
  }, []);

  const addTodo = (newTodo) => {
    console.log('Добавление новой задачи:', newTodo);
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  };

  return (
    <div className="App">
      <h1>TODO IST</h1>
      {isLoading ? (
        <p>Загрузка...</p> // Если идет загрузка, показываем индикатор
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todoList={todoList} />
        </>
      )}
    </div>
  );
}

export default App;
