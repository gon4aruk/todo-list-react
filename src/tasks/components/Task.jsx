import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';

const Task = ({ id, done, text, onChangeStatus, onDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChangeStatus(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
};

const mapDispatch = {
  onChangeStatus: tasksActions.updateTask,
  onDelete: tasksActions.deleteTask,
};

export default connect(null, mapDispatch)(Task);
