import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NeedAuthGuard } from '../auth.guard';

const routes: Routes = [

  { path: '', component: ProductListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddProductComponent, canActivate: [NeedAuthGuard] }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
