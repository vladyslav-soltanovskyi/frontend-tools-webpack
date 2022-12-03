"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTasks = void 0;
var _storage = _interopRequireDefault(require("../common/storage.js"));
var _api = _interopRequireDefault(require("../common/api.js"));
var _createTask = require("./createTask.js");
var _renderTasks = require("./renderTasks.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const onCreateTask = () => {
  (0, _createTask.createTask)(taskInput.value);
  taskInput.value = '';
};
const initTasks = () => {
  _api.default.getTasks().then(tasksList => {
    _storage.default.setTasks(tasksList);
    (0, _renderTasks.renderTasks)(tasksList);
  });
  createTaskBtn.addEventListener('click', onCreateTask);
};
exports.initTasks = initTasks;