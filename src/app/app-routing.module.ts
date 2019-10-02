import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { NewLocationComponent } from './locations/new-location/new-location.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
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
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { AddTrailerComponent } from './trailers/add-trailer/add-trailer.component';
import { EditTrailerComponent } from './trailers/edit-trailer/edit-trailer.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './inventory/view-inventory/view-inventory.component';
import { ViewTrailerComponent } from './trailers/trailer-list/view-trailer/view-trailer.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ViewOrderComponent } from './orders/order-list/view-order/view-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ViewProductComponent } from './products/product-list/view-product/view-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { StoreComponent } from './store/store.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
{ path:'',component:DashboardComponent,
  children: [



    { path: 'trailers', component: TrailerListComponent , canActivate:[NeedAuthGuard] },
    { path:'trailers/add', component: AddTrailerComponent,canActivate:[NeedAuthGuard]},
    { path: 'trailers/view/:trailerId', component: ViewTrailerComponent , canActivate:[NeedAuthGuard] },
    { path: 'trailers/edit/:trailerId', component: EditTrailerComponent , canActivate:[NeedAuthGuard] },
    { path:'orders/add', component: AddOrderComponent,canActivate:[NeedAuthGuard]},
    { path: 'orders/view/:orderId', component: ViewOrderComponent , canActivate:[NeedAuthGuard] },
    { path: 'orders/edit/:orderId', component: EditOrderComponent , canActivate:[NeedAuthGuard] },
    { path:'orders', component: OrderListComponent,canActivate:[NeedAuthGuard]},
    { path:'products/add', component: AddProductComponent,canActivate:[NeedAuthGuard]},
    { path: 'products/edit/:productId', component: EditProductComponent , canActivate:[NeedAuthGuard] },
    {path:'products/view/:productId', component:ViewProductComponent,canActivate:[NeedAuthGuard] },
    { path:'products', component: ProductListComponent,canActivate:[NeedAuthGuard]},
    { path: 'users', component: UserListComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/add', component: AddUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/edit/:userId', component: EditUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'users/view/:userId', component: ViewUserComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations/add', component: AddLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations', component: LocationListComponent, canActivate:[NeedAuthGuard] },
    { path: 'locations/edit/:locationId', component: EditLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'locations', component: LocationListComponent, canActivate:[NeedAuthGuard] },
    { path: 'locations/view/:locationId', component: ViewLocationComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories', component: InventoryListComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/add', component: AddInventoryComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/edit/:inventoryId', component: EditInventoryComponent , canActivate:[NeedAuthGuard] },
    { path: 'inventories/view/:inventoryId', component: ViewInventoryComponent , canActivate:[NeedAuthGuard] },
    { path: 'trailers', component: TrailerListComponent, canActivate:[NeedAuthGuard] },
    { path: 'trailers/add', component: AddTrailerComponent, canActivate:[NeedAuthGuard] },
    { path: 'trailers/edit:trailerId', component: EditTrailerComponent, canActivate:[NeedAuthGuard] },
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
