import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header/header-component.component';
import { FooterComponentComponent } from './components/footer/footer-component.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListItemsComponentComponent } from './components/list-items/list-items-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    BackgroundImageComponent,
    RegistrationFormComponent,
    RegistrationComponent,
    ListingComponent,
    ListItemsComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}