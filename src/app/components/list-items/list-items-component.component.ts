import {Component, Input} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items-component.component.html',
  styleUrls: ['./list-items-component.component.css'],
})
export class ListItemsComponentComponent {
  @Input() tasks: string[] = [];
  constructor(private taskService: TaskService) {}
}