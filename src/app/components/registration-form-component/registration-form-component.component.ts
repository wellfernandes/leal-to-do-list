import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form-component',
  templateUrl: './registration-form-component.component.html',
  styleUrls: ['./registration-form-component.component.css']
})
export class RegistrationFormComponentComponent {

  constructor(private router: Router) {}

  taskRegistration() {
    console.log('Nova Tarefa Cadastrada');
  }

  taskCancel() {
    console.log('Cadastro de Tarefa Cancelada');
    this.router.navigate(['']);
  }
}
