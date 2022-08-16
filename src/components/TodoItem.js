import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangesEvent } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangesEvent(todo.id)} />
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.objectOf,
  handleChangesEvent: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};
