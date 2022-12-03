"use strict";

var _storage = _interopRequireDefault(require("../storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
it('should return stored tasks', () => {
  expect(_storage.default.getTasks()).toEqual([]);
});
it('should return task by id', () => {
  _storage.default.createTask({
    id: 1,
    text: 'text',
    done: false
  });
  expect(_storage.default.getTask(1)).toEqual({
    id: 1,
    text: 'text',
    done: false
  });
});
it('should delete task', () => {
  _storage.default.deleteTask(1);
  expect(_storage.default.getTasks()).toEqual([]);
});
it('should add task', () => {
  _storage.default.createTask({
    id: 1,
    text: 'text',
    done: false
  });
  expect(_storage.default.getTasks()).toEqual([{
    id: 1,
    text: 'text',
    done: false
  }]);
});
it('should update task', () => {
  _storage.default.updateTask(1, {
    text: 'Some text',
    done: true
  });
  expect(_storage.default.getTasks()).toEqual([{
    id: 1,
    text: 'Some text',
    done: true
  }]);
});
it('should save tasks', () => {
  _storage.default.setTasks([]);
  expect(_storage.default.getTasks()).toEqual([]);
});