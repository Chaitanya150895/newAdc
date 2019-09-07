import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location/location-list/location-list.component';
import { NewLocationComponent } from './location/new-location/new-location.component';
import { EditLocationComponent } from './location/location-list/edit-location/edit-location.component';
import { ViewLocationComponent } from './location/location-list/view-location/view-location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

const routes: Routes = [

  // { path: "", component: DashboardComponent },

  { path: '', component: DashboardComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'userlist/:userId', component: EditUserComponent },
  { path: 'userlist/view/:userId', component: ViewUserComponent },
  { path: 'NewLocation', component: NewLocationComponent },
  { path: 'LocationList', component: LocationListComponent },
  { path: 'LocationList/edit/:locationId', component: EditLocationComponent },
  { path: 'LocationList/view/:locationId', component: ViewLocationComponent },
  { path: 'inventories', component: InventoryListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }