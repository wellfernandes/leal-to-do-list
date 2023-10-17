import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { DynamicBackgroundImageComponentComponent } from './components/dynamic-background-image-component/dynamic-background-image-component.component';
import { RegistrationFormComponentComponent } from './components/registration-form-component/registration-form-component.component';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';
import { ListItemsComponentComponent } from './components/list-items-component/list-items-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    DynamicBackgroundImageComponentComponent,
    RegistrationFormComponentComponent,
    RegistrationComponentComponent,
    ListingComponentComponent,
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