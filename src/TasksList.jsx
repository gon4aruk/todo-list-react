import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { fetchTasks, createTask, updateTask, deleteTask } from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetchTasks().then(tasks => this.setState({ tasks }));
  };

  handleCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasksList());
  };

  handleChangeStatusCheckbox = id => {
    const task = this.state.tasks.find(task => task.id === id);
    const { done, text } = task;
    const newTask = {
      done: !done,
      text,
    };
    updateTask(id, newTask).then(() => this.fetchTasksList());
  };

  handleDelete = id => {
    deleteTask(id).then(() => this.fetchTasksList());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.handleCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChangeStatus={this.handleChangeStatusCheckbox}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TasksList;
