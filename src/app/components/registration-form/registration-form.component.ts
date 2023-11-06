import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Priority } from "../../constants/priority.constants";
import { AppTexts } from "../../constants/appTexts.constants";
import { Errors } from "../../constants/errors.constants";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements AfterViewInit {
  taskName: string = '';
  @Output() taskAdded = new EventEmitter<{ name: string; priority: string }>();
  @Input() taskPriority: string = Priority.TASK_PRIORIRY_LOW;

  regex = /^(?!.*Tarefa)(?=.*[a-zA-Z])[A-Za-z0-9\s]+$/i;
  isButtonDisabled: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const instances = M.Dropdown.init(elems, {});
    }

  taskRegistration() {
    if (this.isButtonDisabled) {
      return;
    }else{
      if (!(this.taskName === '')) {
        if (this.regex.test(this.taskName) && !this.taskName.includes('Tarefa')) {
          this.taskAdded.emit({ name: this.taskName, priority: this.taskPriority });
          this.errorMessage = '';
          return;
        }
      }
      this.isButtonDisabled = true;
    }
  }

  taskCancel() {
    this.clearTaskName();
  }

  clearTaskName() {
    this.taskName = '';
    this.validateInput();
  }

  selectPriority(selectedPriority: string) {
    this.taskPriority = selectedPriority;
    this.validateInput();
  }

  validateInput() {
    if (this.taskName === '') {
      this.isButtonDisabled = true;
      this.errorMessage = Errors.EMPTY_FIELD_ERROR;
    } else {
      if (this.regex.test(this.taskName) && !this.taskName.includes('Tarefa')) {
        this.isButtonDisabled = false;
        this.errorMessage = '';
      } else {
        this.isButtonDisabled = true;
        this.errorMessage = Errors.INVALID_TASK_NAME_ERROR;
      }
    }
  }

  onInputChange() {
    this.validateInput();
  }

  protected readonly Priority = Priority;
  protected readonly AppTexts = AppTexts;
}