import { Component } from '@angular/core';
import { AppTexts } from "../../constants/appTexts.constants";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
    protected readonly AppTexts = AppTexts;
}