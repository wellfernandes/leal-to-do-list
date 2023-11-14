import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../models/task';
import { Router } from "@angular/router";
import { Paths } from "../../constants/paths.constants";
import { AppTexts } from "../../constants/appTexts.constants";
import { Errors } from "../../constants/errors.constants";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
      private taskService: TaskService,
      private router: Router
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      const taskObjects: Task[] | undefined = await this.taskService.getTasks().toPromise();

      if (taskObjects) {
        console.log('Tarefas adicionadas:', taskObjects);
        this.tasks = taskObjects;
      } else {
        console.warn(Errors.NO_TASKS_FOUND);
        this.tasks = [];
      }
    } catch (error) {
      console.error(Errors.LOADING_TASKS_ERROR, error);
    }
  }

  async delete(taskId: number) {
    try {
      await this.taskService.deleteTask(taskId).toPromise();
      this.loadTasks();
    } catch (error) {
      console.error(Errors.DELETE_TASK_ERROR, error);
    }
  }

  edit(taskId: number) {
    this.router.navigate([Paths.EDIT_PAGE, taskId]).then(r => console.log(r));
  }

  protected readonly AppTexts = AppTexts;
}