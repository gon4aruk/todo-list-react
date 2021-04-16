import * as tasksGateway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECEIVED = 'TASKS/TASKS_LIST_RECEIVED';

export const tasksListReceived = tasksList => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
};

export const fetchTasksList = () => dispatch =>
  tasksGateway.fetchTasks().then(tasksList => dispatch(tasksListReceived(tasksList)));

export const updateTask = taskId => {
  return (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const { done, text } = task;
    const newTask = {
      done: !done,
      text,
    };
    tasksGateway.updateTask(taskId, newTask).then(() => dispatch(fetchTasksList()));
  };
};

export const deleteTask = taskId => {
  return dipatch => {
    tasksGateway.deleteTask(taskId).then(() => dipatch(fetchTasksList()));
  };
};

export const createTask = text => {
  return dispatch => {
    const newTask = {
      text,
      done: false,
    };
    tasksGateway.createTask(newTask).then(() => dispatch(fetchTasksList()));
  };
};
