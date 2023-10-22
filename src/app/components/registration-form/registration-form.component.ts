import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form-component',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  @Input () taskName: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  regex = /^(?!.*Tarefa)(?=.*[a-zA-Z])[A-Za-z0-9\s]+$/i;
  constructor(private router: Router) {}

  taskRegistration() {
    if (!(this.taskName === '')) {
      if (this.regex.test(this.taskName) && !this.taskName.includes('Tarefa')) {
        this.taskAdded.emit(this.taskName);
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
}