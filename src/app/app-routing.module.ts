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

//status
import { StatusComponent } from './status/status/status.component';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
  {
    path: '', component: DashboardComponent,
    children: [
      //trailers
      { path: 'trailers', component: TrailersComponent, canActivate: [NeedAuthGuard] },

      //orders
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
     
      //products
      { path: 'products', component: ProductsComponent, canActivate: [NeedAuthGuard] },

      //users
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

      //locations
      { path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) },
     

      //Inventories
      { path: 'inventories', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
      

      //stores
      { path: 'store', component: StoreComponent, canActivate: [NeedAuthGuard] },

      //status
      { path: 'status', component: StatusComponent, canActivate: [NeedAuthGuard] },
    ], canActivate: [NeedAuthGuard]
  },

  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

  // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },

  // { path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) },


  // { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },

  // { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
