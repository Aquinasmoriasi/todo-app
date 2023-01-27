import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { handleChangeProps, deleteTodoProps, todos } = props;
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
};

TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  todos: [],
};

export default TodosList;
