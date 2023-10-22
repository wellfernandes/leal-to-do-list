import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit{
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