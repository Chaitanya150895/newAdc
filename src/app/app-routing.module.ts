import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//AdminLte
import { DashboardComponent } from './dashboard/dashboard.component';

//Users
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { LoginPageComponent } from './users/login-page/login-page.component';

//Inventories
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './inventory/view-inventory/view-inventory.component';


//Locations
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { ViewLocationComponent } from './locations/location-list/view-location/view-location.component';

//orders
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ViewOrderComponent } from './orders/order-list/view-order/view-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


//products

import { ProductsComponent } from './products/products.component';

//stores
import { StoreComponent } from './store/store.component';

//trailers
import { TrailersComponent } from './trailers/trailers.component';

//Pipes
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
{ path:'',component:DashboardComponent,
  children: [
    //trailers
    { path: 'trailers', component: TrailersComponent , canActivate:[NeedAuthGuard] },

    //orders
    { path:'orders/add', component: AddOrderComponent,canActivate:[NeedAuthGuard]},
    { path: 'orders/view/:orderId', component: ViewOrderComponent , canActivate:[NeedAuthGuard] },
    { path: 'orders/edit/:orderId', component: EditOrderComponent , canActivate:[NeedAuthGuard] },
    { path:'orders', component: OrderListComponent,canActivate:[NeedAuthGuard]},

    //products
    { path:'products', component: ProductsComponent,canActivate:[NeedAuthGuard]},

    //users
    { path: 'users', component: UserListComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/add', component: AddUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/edit/:userId', component: EditUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/view/:userId', component: ViewUserComponent , canActivate:[NeedAuthGuard] },

    //locations
    { path: 'locations/add', component: AddLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations', component: LocationListComponent, canActivate:[NeedAuthGuard] },
    { path: 'locations/edit/:locationId', component: EditLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations', component: LocationListComponent, canActivate:[NeedAuthGuard] },
    { path: 'locations/view/:locationId', component: ViewLocationComponent , canActivate:[NeedAuthGuard] },

    //Inventories
    { path: 'inventories', component: InventoryListComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/add', component: AddInventoryComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/edit/:inventoryId', component: EditInventoryComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/view/:inventoryId', component: ViewInventoryComponent , canActivate:[NeedAuthGuard] },

    //stores
     { path: 'store', component: StoreComponent, canActivate: [NeedAuthGuard] },
  ],canActivate:[NeedAuthGuard]
},
 
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
