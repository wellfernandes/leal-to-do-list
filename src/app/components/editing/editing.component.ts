import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../models/task";
import { Router, ActivatedRoute } from "@angular/router";
import { Priority } from "../../constants/priority.constants";
import { Paths } from "../../constants/paths.constants";
import { AppTexts } from "../../constants/appTexts.constants";
import { Errors } from "../../constants/errors.constants";

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
})
export class EditingComponent {
  task: Task | undefined;
  updatedTask: Task = new Task(0, '', '');
  taskId!: number;

  constructor(
      private taskService: TaskService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.taskId = +params['id'];
      await this.loadTask(this.taskId);
    });
  }

  async loadTask(taskId: number) {
    try {
      const task = await this.taskService.getTaskById(taskId).toPromise();
      this.task = task;
      this.updatedTask = { ...this.task } as Task;

      var options: {} = {
        alignment: 'center',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
      };

      setTimeout(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');
        const instances = M.Dropdown.init(elems, options);
      }, 0);
    } catch (error) {
      console.error(Errors.LOADING_TASKS_ERROR, error);
    }
  }

  async updateTask() {
    if (this.updatedTask) {
      try {
        await this.taskService.updateTask(this.updatedTask).toPromise();
        this.router.navigate([Paths.LISTING_PAGE]).then(r => console.log(r));
      } catch (error) {
        console.error(Errors.UPDATE_TASK_ERROR, error);
      }
    }
  }

  updateCancel() {
    this.router.navigate([Paths.LISTING_PAGE]).then(r => console.log(r));
  }

  changePriority(newPriority: string) {
    this.updatedTask.priority = newPriority;
  }

  protected readonly Priority = Priority;
  protected readonly AppTexts = AppTexts;
}