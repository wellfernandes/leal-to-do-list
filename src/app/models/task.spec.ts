import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    const id = 1;
    const name = 'Sample Task';
    const priority = 'low';
    const task = new Task(id, name, priority);

    expect(task).toBeTruthy();
  });
});