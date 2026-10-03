// The page code: it reads the form and draws the list.
import { addTask, toggleTask, remaining } from './todo.js';

let tasks = [];

const form = document.querySelector('#new-task');
const input = document.querySelector('#task-text');
const list = document.querySelector('#tasks');
const count = document.querySelector('#count');
const themeButton = document.querySelector('#theme-button');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function render() {
  list.replaceChildren();
  tasks.forEach((task, i) => {
    const item = document.createElement('li');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = task.done;
    box.addEventListener('change', () => {
      tasks = toggleTask(tasks, i);
      render();
    });
    item.append(box, ' ', task.text);
    if (task.done) item.classList.add('done');
    list.append(item);
  });
  const left = remaining(tasks);
  count.textContent = `${left} ${left === 1 ? 'task' : 'tasks'} left`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  tasks = addTask(tasks, input.value);
  input.value = '';
  render();
});

render();
