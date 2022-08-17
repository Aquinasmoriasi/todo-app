/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangesEvent={handleChangeProps}
            deleteItem={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  todos: [],
};
