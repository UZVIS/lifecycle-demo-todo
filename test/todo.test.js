import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTask, toggleTask, remaining } from '../site/todo.js';

test('addTask puts the new task at the end', () => {
  const tasks = addTask([{ text: 'Buy milk', done: false }], 'Water the plants');
  assert.deepEqual(tasks.map((task) => task.text), ['Buy milk', 'Water the plants']);
});

test('toggleTask ticks one task and leaves the others alone', () => {
  const tasks = toggleTask([{ text: 'a', done: false }, { text: 'b', done: false }], 1);
  assert.deepEqual(tasks.map((task) => task.done), [false, true]);
});

test('remaining counts only the tasks that are not done', () => {
  assert.equal(remaining([{ text: 'a', done: true }, { text: 'b', done: false }]), 1);
});
