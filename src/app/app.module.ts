import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { EditingComponent } from './components/editing/editing.component';
import { HttpClientModule } from "@angular/common/http";
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundImageComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    ListingComponent,
    ListItemsComponent,
    EditingComponent,
    CookieConsentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}