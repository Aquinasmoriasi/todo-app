import React, { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [state, changeState] = useState(
    { title: '' },
  );

  const onChange = (e) => {
    changeState({ title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = state;
    const { addItem } = props;
    if (title.trim()) {
      addItem(title);
    }
    changeState({ title: '' });
  };

  const { title } = state;
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new ToDo... "
        value={title}
        onChange={onChange}
      />
      <button type="submit">
        <BsPlusCircle />
      </button>
    </form>
  );
};

Input.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Input;
