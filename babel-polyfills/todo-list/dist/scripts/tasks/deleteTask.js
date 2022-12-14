import api from '../common/api.js';
import storage from '../common/storage.js';
import { renderTasks } from "./renderTasks.js";
export const deleteTask = _ref => {
  let {
    target
  } = _ref;
  const {
    taskId
  } = target.dataset;
  api.deleteTask(taskId).then(() => {
    storage.deleteTask(taskId);
    const tasksList = storage.getTasks();
    renderTasks(tasksList);
  });
};