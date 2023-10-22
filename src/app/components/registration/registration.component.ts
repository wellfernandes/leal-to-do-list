import { Component, Input, ViewChild } from '@angular/core';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  @Input() tasks: string[] = [];
  @ViewChild(RegistrationFormComponent) childComponent!: RegistrationFormComponent;

  counterId: number = 1;
  newTask: Task = new Task(this.counterId, '');
  constructor(private taskService: TaskService) {}
  addTask(taskName: string) {
    this.newTask.name = taskName;
    this.newTask.id = this.counterId

    this.taskService.addTask(this.newTask);
    this.counterId++;

    window.alert('Tarefa ' + taskName + ' cadastrada!');
    this.clearTaskNameInRegistrationForm()
  }
  clearTaskNameInRegistrationForm() {
    this.childComponent.clearTaskName();
  }
}