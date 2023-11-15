import { Component } from '@angular/core';
import { Paths } from "../../constants/paths.constants";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    currentTime: number;

    constructor() {
        this.currentTime = new Date().getTime();
    }

    ngOnInit() {
        setInterval(() => {
            this.currentTime = new Date().getTime();
        }, 1000);
    }

    protected readonly Paths = Paths;
}