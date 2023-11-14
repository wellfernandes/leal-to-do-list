import { Component, OnInit } from '@angular/core';
import { AppTexts } from "../../constants/appTexts.constants";

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent implements OnInit {
  cookieAccepted: boolean | undefined;
  userChoice = false;

  ngOnInit() {
    const userChoice = localStorage.getItem('userChoice');
    if (userChoice) {
      this.userChoice = true;
      this.cookieAccepted = JSON.parse(localStorage.getItem('cookieAccepted') || 'false');
    }
  }

  onCookieChange(accepted: boolean) {
    this.cookieAccepted = accepted;
    this.userChoice = true;

    localStorage.setItem('userChoice', 'true');
    localStorage.setItem('cookieAccepted', JSON.stringify(accepted));
  }

  protected readonly AppTexts = AppTexts;
}