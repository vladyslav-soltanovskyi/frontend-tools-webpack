"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = void 0;
var _api = _interopRequireDefault(require("../common/api.js"));
var _storage = _interopRequireDefault(require("../common/storage.js"));
var _renderTasks = require("./renderTasks.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createTask = value => {
  if (!value) {
    return;
  }
  _api.default.createTask({
    text: value
  }).then(task => {
    _storage.default.createTask(task);
    const tasksList = _storage.default.getTasks();
    (0, _renderTasks.renderTasks)(tasksList);
  });
};
exports.createTask = createTask;