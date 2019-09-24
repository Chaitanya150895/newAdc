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
import { TrailerlistComponent } from './trailer/trailerlist/trailerlist.component';
import { NewTrailerComponent } from './trailer/new-trailer/new-trailer.component';
import { NeedAuthGuard } from './auth.guard';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { AddTrailerComponent } from './trailers/add-trailer/add-trailer.component';
import { EditTrailerComponent } from './trailers/edit-trailer/edit-trailer.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './inventory/view-inventory/view-inventory.component';
import { ViewTrailerComponent } from './trailer/trailerlist/view-trailer/view-trailer.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { ViewOrderComponent } from './order/order-list/view-order/view-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ViewProductComponent } from './product/product-list/view-product/view-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BackroomInventoryComponent } from './backroom-inventory/backroom-inventory.component';

const routes: Routes = [

  // { path: "", component: DashboardComponent },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'orders/add', component: NewOrderComponent, canActivate: [NeedAuthGuard] },
      { path: 'orders/view/:orderId', component: ViewOrderComponent, canActivate: [NeedAuthGuard] },
      { path: 'orders/edit/:orderId', component: EditOrderComponent, canActivate: [NeedAuthGuard] },
      { path: 'orders', component: OrderListComponent, canActivate: [NeedAuthGuard] },
      { path: 'products/add', component: AddProductComponent, canActivate: [NeedAuthGuard] },
      { path: 'products/edit/:productId', component: EditProductComponent, canActivate: [NeedAuthGuard] },
      { path: 'products/view/:productId', component: ViewProductComponent, canActivate: [NeedAuthGuard] },
      { path: 'products', component: ProductListComponent, canActivate: [NeedAuthGuard] },
      { path: 'users', component: UserListComponent, canActivate: [NeedAuthGuard] },
      { path: 'users/add', component: AddUserComponent, canActivate: [NeedAuthGuard] },
      { path: 'users/edit/:userId', component: EditUserComponent, canActivate: [NeedAuthGuard] },
      { path: 'users/view/:userId', component: ViewUserComponent, canActivate: [NeedAuthGuard] },
      { path: 'locations/add', component: AddLocationComponent, canActivate: [NeedAuthGuard] },
      { path: 'locations', component: LocationListComponent, canActivate: [NeedAuthGuard] },
      { path: 'locations/edit/:locationId', component: EditLocationComponent, canActivate: [NeedAuthGuard] },
      { path: 'locations', component: LocationListComponent, canActivate: [NeedAuthGuard] },
      { path: 'locations/view/:locationId', component: ViewLocationComponent, canActivate: [NeedAuthGuard] },
      { path: 'inventories', component: InventoryListComponent, canActivate: [NeedAuthGuard] },
      { path: 'inventories/add', component: AddInventoryComponent, canActivate: [NeedAuthGuard] },
      { path: 'inventories/edit/:inventoryId', component: EditInventoryComponent, canActivate: [NeedAuthGuard] },
      { path: 'inventories/view/:inventoryId', component: ViewInventoryComponent, canActivate: [NeedAuthGuard] },
      { path: 'trailers', component: TrailerListComponent, canActivate: [NeedAuthGuard] },
      { path: 'trailers/add', component: AddTrailerComponent, canActivate: [NeedAuthGuard] },
      { path: 'trailers/edit:trailerId', component: EditTrailerComponent, canActivate: [NeedAuthGuard] },
      { path: 'dashboard', component: BackroomInventoryComponent, canActivate: [NeedAuthGuard] },
], canActivate: [NeedAuthGuard]
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
