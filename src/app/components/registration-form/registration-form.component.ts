import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Priority } from "../../constants/priority.constants";
import {AppTexts} from "../../constants/appTexts.constants";

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
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const instances = M.Dropdown.init(elems, {});
    }

  taskRegistration() {
    if (!(this.taskName === '')) {
      if (this.regex.test(this.taskName) && !this.taskName.includes('Tarefa')) {
        this.taskAdded.emit({ name: this.taskName, priority: this.taskPriority });
        return;
      } else {
        window.alert(
            '\nNome inválido. \n\nO nome não pode conter caracteres especiais\n ou a palavra "Tarefa" ou ter somente números.'
        );
        this.clearTaskName();
        return;
      }
    }
    window.alert('\nO Nome não pode ser vazio.');
  }
  taskCancel() {
    console.log('\n\nCadastro de Tarefa Cancelada');
    this.clearTaskName();
  }
  clearTaskName() {
    this.taskName = '';
  }

  selectPriority(selectedPriority: string) {
    this.taskPriority = selectedPriority;
  }

  protected readonly Priority = Priority;
  protected readonly AppTexts = AppTexts;
}