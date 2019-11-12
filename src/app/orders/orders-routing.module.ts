import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './order-list/view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NeedAuthGuard } from '../auth.guard';

const routes: Routes = [

  { path: '', component: OrderListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddOrderComponent, canActivate: [NeedAuthGuard] },
  { path: 'view/:orderId', component: ViewOrderComponent, canActivate: [NeedAuthGuard] },
  { path: 'edit/:orderId', component: EditOrderComponent, canActivate: [NeedAuthGuard] },
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
