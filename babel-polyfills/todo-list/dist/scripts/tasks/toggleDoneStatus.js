import api from '../common/api.js';
import storage from '../common/storage.js';
import { renderTasks } from "./renderTasks.js";
export const toggleDoneStatus = _ref => {
  let {
    target
  } = _ref;
  const {
    taskId
  } = target.dataset;
  const done = target.checked;
  api.updateTask(taskId, {
    done
  }).then(task => {
    storage.updateTask(taskId, task);
    const tasksList = storage.getTasks();
    renderTasks(tasksList);
  });
};