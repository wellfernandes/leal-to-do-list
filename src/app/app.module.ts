import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { DynamicBackgroundImageComponentComponent } from './components/dynamic-background-image-component/dynamic-background-image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    DynamicBackgroundImageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
