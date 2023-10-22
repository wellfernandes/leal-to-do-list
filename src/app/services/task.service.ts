import { Injectable } from '@angular/core';
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  constructor() {}

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  getTasks() {
    return this.tasks;
  }
  updateList(task: Task) {}
}
