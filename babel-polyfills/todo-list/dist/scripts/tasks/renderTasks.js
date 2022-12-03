"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTasks = renderTasks;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _toggleDoneStatus = require("./toggleDoneStatus.js");
var _deleteTask = require("./deleteTask.js");
const list = document.querySelector('.list');
const createCheckbox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.dataset.taskId = id;
  checkbox.addEventListener('click', _toggleDoneStatus.toggleDoneStatus);
  return checkbox;
};
const createDeleteBtn = id => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list-item__delete-btn');
  deleteBtn.dataset.taskId = id;
  deleteBtn.addEventListener('click', _deleteTask.deleteTask);
  return deleteBtn;
};
const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({
    done,
    id
  });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  const textElem = document.createElement('span');
  textElem.textContent = text;
  textElem.classList.add('list-item__text');
  const deleteBtn = createDeleteBtn(id);
  listItemElem.append(checkboxElem, textElem, deleteBtn);
  return listItemElem;
};
function renderTasks(tasksList) {
  const prevCheckboxes = list.querySelectorAll('.list__item-checkbox');
  prevCheckboxes.forEach(checkbox => checkbox.removeEventListener('click', _toggleDoneStatus.toggleDoneStatus));
  list.innerHTML = '';
  const tasksElements = tasksList.sort((a, b) => a.done - b.done).map(createListItem);
  list.append(...tasksElements);
}
;