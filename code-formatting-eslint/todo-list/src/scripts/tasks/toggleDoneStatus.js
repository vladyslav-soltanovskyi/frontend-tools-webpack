import api from '../common/api';
import storage from '../common/storage';
import { renderTasks } from './renderTasks';

export const toggleDoneStatus = ({ target }) => {
  const { taskId } = target.dataset;
  const done = target.checked;

  api.updateTask(taskId, { done })
    .then((task) => {
      storage.updateTask(taskId, task);
      const tasksList = storage.getTasks();
      renderTasks(tasksList);
    });
};
