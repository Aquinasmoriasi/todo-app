import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import Input from './Input';

const TodoContainer = () => {
  const [state, changeState] = useState({ todos: [] });
  const { todos } = state;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // const componentDidMount = () => {
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);
  //   if (loadedTodos) {
  //     changeState({
  //       todos: loadedTodos,
  //     });
  //   }
  // };

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
    const { todos } = state;
    const newTodo = { id: uuidv4(), title, completed: false };
    changeState({ todos: [newTodo, ...todos] });
  };

  const handleChecked = (id) => {
    changeState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const handleDeleteTodo = (id) => {
    const { todos } = state;
    changeState({
      todos: [...todos.filter((todo) => todo.id !== id)],
    });
  };

  const { title } = todos;
  return (
    <div className="container">
      <Header />
      <Input inputChangeProps={handleInputChange} addItem={addTodoItem} />
      <TodoList
        todos={todos}
        title={title}
        handleChangeProps={handleChecked}
        deleteTodoProps={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
