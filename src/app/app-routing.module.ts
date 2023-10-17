import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicBackgroundImageComponentComponent } from './components/dynamic-background-image-component/dynamic-background-image-component.component';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';

const routes: Routes = [
  { path: '', component: DynamicBackgroundImageComponentComponent },
  { path: 'registration', component: RegistrationComponentComponent },
  { path: 'listing', component: ListingComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}