import { TASKS_LIST_RECEIVED } from './tasks.actions';

const initState = {
  tasksList: [],
};

export const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};
