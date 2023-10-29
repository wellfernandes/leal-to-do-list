import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListingComponent } from './components/listing/listing.component';
import {EditingComponent} from "./components/editing/editing.component";

const routes: Routes = [
  { path: '', component: BackgroundImageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'edit/:id', component: EditingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}