import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var instances;
       
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      instances = M.Sidenav.init(elems);
    });
  }

  title = 'Leal To Do List';
}