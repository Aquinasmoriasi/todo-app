import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangesEvent={handleChangeProps} />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.objectOf,
  handleChangeProps: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  todos: [],
};
