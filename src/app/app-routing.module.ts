import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationListComponent } from './add-location/location-list/location-list.component';
import { NewLocationComponent } from './add-location/new-location/new-location.component';

const routes: Routes = [
  { path: 'AddLocation', component: AddLocationComponent },
  { path: 'LocationList', component: LocationListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
