import {Component} from '@angular/core';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  tasks: string[] = ['First Task', 'Second Task', 'Third Task'];
}