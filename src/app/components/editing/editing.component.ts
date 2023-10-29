import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../models/task";
import { Router, ActivatedRoute } from "@angular/router";
import { Priority } from "../../constants/priority.constants";
import {Paths} from "../../constants/paths.constants";
import {AppTexts} from "../../constants/appTexts.constants";

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
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.taskId = +params['id'];
      this.loadTask(this.taskId);
    });
  }
  loadTask(taskId: number) {
    this.task = this.taskService.getTaskById(taskId);
    this.updatedTask = { ...this.task } as Task;

    var options :{} = {
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
    }

    setTimeout(() => {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const instances = M.Dropdown.init(elems, options);
    }, 0);
  }
  updateTask() {
    if (this.updatedTask) {
      this.taskService.updateTask(this.taskId, this.updatedTask);
      this.router.navigate([Paths.LISTING_PAGE]).then(r => console.log(r));
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