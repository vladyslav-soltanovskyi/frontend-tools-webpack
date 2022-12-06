import storage from "../storage";

it('should return stored tasks', () => {
  expect(storage.getTasks()).toEqual([]);
})

it('should return task by id', () => {
  storage.createTask({ id: 1, text: 'text', done: false });
  expect(storage.getTask(1)).toEqual({ id: 1, text: 'text', done: false });
})

it('should delete task', () => {
  storage.deleteTask(1);
  expect(storage.getTasks()).toEqual([]);
})

it('should add task', () => {
  storage.createTask({ id: 1, text: 'text', done: false });
  expect(storage.getTasks()).toEqual([{ id: 1, text: 'text', done: false }]);
})


it('should update task', () => {
  storage.updateTask(1, { text: 'Some text', done: true });
  expect(storage.getTasks()).toEqual([{ id: 1, text: 'Some text', done: true }]);
})

it('should save tasks', () => {
  storage.setTasks([])
  expect(storage.getTasks()).toEqual([]);
})