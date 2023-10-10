import { Component, OnInit } from '@angular/core';

declare var materiallize: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
      materiallize.AutoInit();
  }
  
  title = 'leal-to-do-list';
}
