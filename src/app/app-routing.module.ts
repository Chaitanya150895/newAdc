import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//AdminLte
import { DashboardComponent } from './dashboard/dashboard.component';

//Users
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { LoginPageComponent } from './users/login-page/login-page.component';

//Inventories

//Locations

//orders

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
