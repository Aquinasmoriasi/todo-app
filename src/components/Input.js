import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addItem } = this.props;
    if (title.trim()) {
      addItem(title);
    }
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new ToDo... "
          value={title}
          onChange={this.onChange}
        />
        <button type="submit">
          <BsPlusCircle />
        </button>
      </form>
    );
  }
}

Input.propTypes = {
  addItem: PropTypes.func.isRequired,
};
