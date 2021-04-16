import { createSelector } from 'reselect';

export const tasksListSelector = state => state.tasks.tasksList;

export const sortedTasksList = createSelector([tasksListSelector], tasksList =>
  tasksList.slice().sort((a, b) => a.done - b.done),
);
