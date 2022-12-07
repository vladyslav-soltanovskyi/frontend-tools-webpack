import api from '../common/api';
import storage from '../common/storage';
import { renderTasks } from './renderTasks';

export const createTask = (value) => {
  if (!value) {
    return;
  }

  api.createTask({ text: value })
    .then((task) => {
      storage.createTask(task);
      const tasksList = storage.getTasks();
      renderTasks(tasksList);
    });
};
