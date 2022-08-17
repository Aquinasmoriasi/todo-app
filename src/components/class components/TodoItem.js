/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';

const TodoItem = (props) => {
  const { todo, handleChangesEvent, deleteItem } = props;
  const trashIconBtn = {
    backgroundColor: 'rgba(153, 153, 153, 0.4)',
    display: 'flex',
    alignItems: 'center',
    padding: '7px 7px',
    border: 'none',
    alignSelf: 'flex-end',
    borderRadius: '50%',
  };

  const gray = {
    color: 'gray',
  };

  const red = {
    color: 'red',
  };

  const line = {
    textDecoration: 'line-through',
  };

  return (
    <li>
      <div className="addedItems">
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangesEvent(todo.id)} />
        <span style={todo.completed ? line : null}>
          {todo.title}
        </span>
      </div>
      <button type="button" style={trashIconBtn} onClick={() => deleteItem(todo.id)}>
        <BsTrashFill style={todo.completed ? red : gray} />
      </button>
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleChangesEvent: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};
