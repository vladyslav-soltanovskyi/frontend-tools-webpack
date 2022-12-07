import api from '../common/api';
import storage from '../common/storage';
import { renderTasks } from './renderTasks';

export const deleteTask = ({ target }) => {
  const { taskId } = target.dataset;

  api.deleteTask(taskId)
    .then(() => {
      storage.deleteTask(taskId);
      const tasksList = storage.getTasks();
      renderTasks(tasksList);
    });
};
