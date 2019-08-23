import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationListComponent } from './add-location/location-list/location-list.component';
import { NewLocationComponent } from './add-location/new-location/new-location.component';
import { EditLocationComponent } from './add-location/edit-location/edit-location.component';
import { ViewLocationComponent } from './add-location/view-location/view-location.component';

const routes: Routes = [
  { path: 'AddLocation', component: AddLocationComponent },
  { path: 'LocationList', component: LocationListComponent },
  { path: 'LocationList/edit/:locationId', component: EditLocationComponent },
  { path: 'LocationList/view/:locationId', component: ViewLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }