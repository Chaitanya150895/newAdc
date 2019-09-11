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
import { LoginPageComponent } from './users/login-page/login-page.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
{ path:'',component:DashboardComponent,
  children: [
   
    
    { path: 'users', component: UserListComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/add', component: AddUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/edit/:userId', component: EditUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/view/:userId', component: ViewUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations/add', component: NewLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations', component: LocationListComponent, canActivate:[NeedAuthGuard] },
    { path: 'locations/edit/:locationId', component: EditLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations/view/:locationId', component: ViewLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories', component: InventoryListComponent , canActivate:[NeedAuthGuard] },
  ]
},
 
  {
    path: 'login',
    component: LoginPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
