import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleCreate = () => {
    this.props.createTask(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleCreate}>
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);
