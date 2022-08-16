/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangesEvent, deleteItem } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangesEvent(todo.id)} />
        {todo.title}
        <button type="button" onClick={() => deleteItem(todo.id)}>
          <BsTrashFill />
        </button>
      </li>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleChangesEvent: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};
