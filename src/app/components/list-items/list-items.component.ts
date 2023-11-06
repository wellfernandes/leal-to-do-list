import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../models/task';
import { Router } from "@angular/router";
import { Paths } from "../../constants/paths.constants";
import { AppTexts } from "../../constants/appTexts.constants";
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent {
  tasks: Task[] = [];

  constructor(
      private taskService: TaskService,
      private router: Router
  ) {}

  ngOnInit() {
    const taskObjects: Task[] = this.taskService.getTasks();
    console.log('Tarefas adicionadas:', taskObjects);
    this.tasks = taskObjects;
  }

    delete(taskId: number) {
        this.taskService.deleteTask(taskId);
    }

    edit(taskId: number) {
      this.router.navigate([Paths.EDIT_PAGE, taskId]).then(r => console.log(r));
    }

    protected readonly AppTexts = AppTexts;
}
