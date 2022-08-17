import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import Input from './Input';

const TodoContainer = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, changeState] = useState(getInitialTodos());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   console.log('test run');

  //   // getting stored items
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     changeState(loadedTodos);
  //   }
  // }, []);

  // const componentDidUpdate = (prevProps, prevState) => {
  //   const { todos } = state;
  //   if (prevState.todos !== todos) {
  //     const temp = JSON.stringify(todos);
  //     localStorage.setItem('todos', temp);
  //   }
  // };

  const handleInputChange = (e) => {
    e.preventDefault();
    changeState({
      title: e.target.value,
    });
  };

  const addTodoItem = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    changeState([newTodo, ...todos]);
  };

  const handleChecked = (id) => {
    changeState(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const handleDeleteTodo = (id) => {
    changeState(
      todos.filter((todo) => todo.id !== id),
    );
  };
  return (
    <div className="container">
      <Header />
      <Input inputChangeProps={handleInputChange} addItem={addTodoItem} />
      <TodoList
        todos={todos}
        title={todos.title}
        handleChangeProps={handleChecked}
        deleteTodoProps={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
