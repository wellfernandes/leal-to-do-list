import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-background-image-component',
  templateUrl: './dynamic-background-image-component.component.html',
  styleUrls: ['./dynamic-background-image-component.component.css']
})
export class DynamicBackgroundImageComponentComponent implements OnInit{
  imageURL: string = './assets/images/bg-leal-todo-list.jpg';

  constructor(){}

  getBgImage(){
    return{
      'background-image':
      'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .8)), url(' + this.imageURL + ')',
    };
  }

  ngOnInit(): void {}
}