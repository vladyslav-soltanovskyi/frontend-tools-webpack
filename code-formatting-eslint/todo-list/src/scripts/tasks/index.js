import storage from '../common/storage';
import api from '../common/api';
import { createTask } from './createTask';
import { renderTasks } from './renderTasks';
import './tasks.scss';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const onCreateTask = () => {
  createTask(taskInput.value);
  taskInput.value = '';
};

export const initTasks = () => {
  api.getTasks().then((tasksList) => {
    storage.setTasks(tasksList);
    renderTasks(tasksList);
  });
  createTaskBtn.addEventListener('click', onCreateTask);
};
