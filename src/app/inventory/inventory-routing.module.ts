import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { NeedAuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: InventoryListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddInventoryComponent, canActivate: [NeedAuthGuard] },
  { path: 'edit/:inventoryId', component: EditInventoryComponent, canActivate: [NeedAuthGuard] },
  { path: 'view/:inventoryId', component: ViewInventoryComponent, canActivate: [NeedAuthGuard] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
