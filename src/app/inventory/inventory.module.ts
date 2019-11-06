import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    ViewInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
