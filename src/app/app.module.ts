import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './locations/new-location/new-location.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { RouterModule } from '@angular/router';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { ViewLocationComponent } from './locations/location-list/view-location/view-location.component';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { LocationComponent } from './locations/location.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { SchedulesComponent } from './locations/new-location/schedules/schedules.component';
import { LoginComponent } from './users/login/login.component';
import { MainComponent } from './home/main/main.component';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { NeedAuthGuard } from './auth.guard';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { AddTrailerComponent } from './trailers/add-trailer/add-trailer.component';
import { EditTrailerComponent } from './trailers/edit-trailer/edit-trailer.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './inventory/view-inventory/view-inventory.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { ViewOrderComponent } from './order/order-list/view-order/view-order.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ViewProductComponent } from './product/product-list/view-product/view-product.component';
import { NewTrailerComponent } from './trailer/new-trailer/new-trailer.component';
import { TrailerlistComponent } from './trailer/trailerlist/trailerlist.component';
import { ViewTrailerComponent } from './trailer/trailerlist/view-trailer/view-trailer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { StoreComponent } from './backroom-inventory/backroom-inventory.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { OutboundInventoryComponent } from './outbound-inventory/outbound-inventory.component';
@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    LocationListComponent,
    EditLocationComponent,
    ViewLocationComponent,
    PipeTransformPipe,
    ReplaceUnderscorePipe,
    ContentWrapperComponent,
    LocationComponent,
    UserListComponent,
    AddUserComponent,
    DashboardComponent,
    EditUserComponent,
    ViewUserComponent,
    ReplaceUnderscorePipe,
    InventoryListComponent,
    SchedulesComponent,
    LoginComponent,
    MainComponent,
    LoginPageComponent,
    AddLocationComponent,
    AddTrailerComponent,
    EditTrailerComponent,
    TrailerListComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    ViewInventoryComponent,
    EditOrderComponent,
    NewOrderComponent,
    OrderListComponent,
    ViewOrderComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListComponent,
    ViewProductComponent,
    NewTrailerComponent,
    TrailerlistComponent,
    ViewTrailerComponent,
    StoreComponent,
    ProductInventoryComponent,
    OutboundInventoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DateTimePickerModule,
    DropDownListModule
  ],
  providers: [DatePipe,NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
