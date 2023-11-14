import { Component, Input, ViewChild } from '@angular/core';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";
import { AppTexts } from "../../constants/appTexts.constants";
import { Errors } from "../../constants/errors.constants";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  @Input() tasks: string[] = [];
  @ViewChild(RegistrationFormComponent) childComponent!: RegistrationFormComponent;

  counterId: number = 1;

  constructor(private taskService: TaskService) {}

  async addTask(taskName: string, taskPriority: string) {
    try {
      const response = await this.taskService.addTask(new Task(this.counterId, taskName, taskPriority)).toPromise();
      console.log('Tarefa cadastrada:', response);
      window.alert('Tarefa ' + taskName + ' cadastrada!');
      this.counterId++;
      this.clearTaskNameInRegistrationForm();
    } catch (error) {
      console.error(Errors.REGISTERING_TASK_ERROR, error);
    }
  }

  clearTaskNameInRegistrationForm() {
    this.childComponent.clearTaskName();
  }

  protected readonly AppTexts = AppTexts;
}