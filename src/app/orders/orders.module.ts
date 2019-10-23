import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './order-list/view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    AddOrderComponent,
    EditOrderComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,  
    SharedModule
  ]
})
export class OrdersModule { }
