// The to-do list logic. There is no page code in this file,
// so Node can test it without a browser.

// Return a new list with one more task at the end.
export function addTask(tasks, text) {
  return [...tasks, { text, done: false }];
}

// Return a new list with task number `index` ticked (or unticked).
export function toggleTask(tasks, index) {
  return tasks.map((task, i) => (i === index ? { ...task, done: !task.done } : task));
}

// How many tasks are not done yet.
export function remaining(tasks) {
  return tasks.filter((task) => !task.done).length;
}
