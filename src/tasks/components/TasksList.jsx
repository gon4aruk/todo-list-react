import React, { useEffect } from 'react';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { connect } from 'react-redux';
import { sortedTasksList } from '../tasks.selectors';
import PropTypes from 'prop-types';

const TasksList = ({ tasksList, fetchTasksList }) => {
  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);

  return (
    <ul className="list">
      {tasksList.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchTasksList: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    tasksList: sortedTasksList(state),
  };
};

const mapDispatch = {
  fetchTasksList: tasksActions.fetchTasksList,
};

export default connect(mapState, mapDispatch)(TasksList);
