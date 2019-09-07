import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { NewLocationComponent } from './locations/new-location/new-location.component';
import { EditLocationComponent } from './locations/location-list/edit-location/edit-location.component';
import { ViewLocationComponent } from './locations/location-list/view-location/view-location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [

  // { path: "", component: DashboardComponent },

  { path: '', component: DashboardComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/edit/:userId', component: EditUserComponent },
  { path: 'users/view/:userId', component: ViewUserComponent },
  { path: 'locations/add', component: NewLocationComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'locations/edit/:locationId', component: EditLocationComponent },
  { path: 'locations/view/:locationId', component: ViewLocationComponent },
  { path: 'inventories', component: InventoryListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
