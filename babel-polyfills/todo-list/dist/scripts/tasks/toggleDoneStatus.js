"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDoneStatus = void 0;
var _api = _interopRequireDefault(require("../common/api.js"));
var _storage = _interopRequireDefault(require("../common/storage.js"));
var _renderTasks = require("./renderTasks.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const toggleDoneStatus = _ref => {
  let {
    target
  } = _ref;
  const {
    taskId
  } = target.dataset;
  const done = target.checked;
  _api.default.updateTask(taskId, {
    done
  }).then(task => {
    _storage.default.updateTask(taskId, task);
    const tasksList = _storage.default.getTasks();
    (0, _renderTasks.renderTasks)(tasksList);
  });
};
exports.toggleDoneStatus = toggleDoneStatus;