import { Injectable } from '@angular/core';
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = [];
  private taskIdCounter: number;

  constructor() {
    const storedId = localStorage.getItem('taskIdCounter');
    this.taskIdCounter = storedId ? +storedId : 1;
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    window.addEventListener('beforeunload', () => {
      this.clearLocalStorage();
    });
  }

  addTask(newTask: Task) {
    newTask.id = this.taskIdCounter++;
    this.tasks.push(newTask);

    localStorage.setItem('taskIdCounter', this.taskIdCounter.toString());
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    console.log('Tarefa adicionada:', newTask);
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(taskId: number | undefined): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  deleteTask(taskId: Number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  updateTask(taskId: number, updatedTask: Task) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log('Tarefa atualizada:' + updatedTask.name);
    } else {
      console.error('Tarefa não encontrada.');
    }
  }

  clearLocalStorage() {
    localStorage.removeItem('tasks');
    localStorage.removeItem('taskIdCounter');
  }
}