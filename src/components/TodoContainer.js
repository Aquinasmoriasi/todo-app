import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import Input from './Input';

export default class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  };

  addTodoItem = (title) => {
    const { todos } = this.state;
    const newTodo = { id: uuidv4(), title, completed: false };
    this.setState({ todos: [newTodo, ...todos] });
  }

  handleChecked = (id) => {
    this.setState((prevState) => ({
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

  handleDeleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    const { todos, title } = this.state;
    return (
      <div className="container">
        <Header />
        <Input inputChangeProps={this.handleInputChange} addItem={this.addTodoItem} />
        <TodoList
          todos={todos}
          title={title}
          handleChangeProps={this.handleChecked}
          deleteTodoProps={this.handleDeleteTodo}
        />
      </div>
    );
  }
}
