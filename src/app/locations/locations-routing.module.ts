import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLocationComponent } from './add-location/add-location.component';
import { NeedAuthGuard } from '../auth.guard';
import { LocationListComponent } from './location-list/location-list.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { ViewLocationComponent } from './location-list/view-location/view-location.component';

const routes: Routes = [
  
  { path: '', component: LocationListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddLocationComponent, canActivate: [NeedAuthGuard] },
  { path: 'edit/:locationId', component: EditLocationComponent, canActivate: [NeedAuthGuard] },
  { path: 'view/:locationId', component: ViewLocationComponent, canActivate: [NeedAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
