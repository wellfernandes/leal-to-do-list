import { Component } from '@angular/core';
import {Paths} from "../../constants/paths.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    protected readonly Paths = Paths;
}