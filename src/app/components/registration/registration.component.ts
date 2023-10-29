import { Component, Input, ViewChild } from '@angular/core';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";
import {AppTexts} from "../../constants/appTexts.constants";

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
  addTask(taskName: string, taskPriority: string) {
    this.taskService.addTask(new Task(this.counterId, taskName, taskPriority));
    this.counterId++;

    window.alert('Tarefa ' + taskName + ' cadastrada!');
    this.clearTaskNameInRegistrationForm()
  }
  clearTaskNameInRegistrationForm() {
    this.childComponent.clearTaskName();
  }

    protected readonly AppTexts = AppTexts;
}