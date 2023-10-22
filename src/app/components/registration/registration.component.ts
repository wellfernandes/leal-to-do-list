import { Component, Input, ViewChild } from '@angular/core';
import { RegistrationFormComponent } from "../registration-form-component/registration-form.component";
import { Task } from "../../models/task";

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  @Input() tasks: string[] = [];

  @ViewChild(RegistrationFormComponent) childComponent!: RegistrationFormComponent;

  addTask(taskName: string) {
    this.tasks.push(taskName);
    window.alert('Tarefa ' + taskName + ' cadastrada!');
    this.clearTaskNameInRegistrationForm()
  }

  clearTaskNameInRegistrationForm() {
    this.childComponent.clearTaskName();
  }
}