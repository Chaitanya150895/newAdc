//@angular
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


//AdminLte
import { MainHeaderComponent } from './home/main/main-header/main-header.component';
import { MainSidebarComponent } from './home/main/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './home/main/main-footer/main-footer.component';
import { ContentWrapperComponent } from './home/main/content-wrapper/content-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './home/main/main.component';


//locations
import { LocationListComponent } from './locations/location-list/location-list.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { ViewLocationComponent } from './locations/location-list/view-location/view-location.component';
import { LocationComponent } from './locations/location.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';

//users
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';


//inventory
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ViewInventoryComponent } from './inventory/view-inventory/view-inventory.component';


//products
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';



//orders
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { ViewOrderComponent } from './orders/order-list/view-order/view-order.component';

//trailers
import { AddTrailerComponent } from './trailers/add-trailer/add-trailer.component';
import { TrailerListComponent } from './trailers/trailer-list/trailer-list.component';
import { TrailersComponent } from './trailers/trailers.component';

//status
import { StatusComponent } from './status/status/status.component';
import { DocksComponent } from './status/docks/docks.component';
import { YardsComponent } from './status/yards/yards.component';


//stores
import { StoreComponent } from './store/store.component';
import { ProductInventoryComponent } from './store/product-inventory/product-inventory.component';
import { OutboundInventoryComponent } from './store/outbound-inventory/outbound-inventory.component';
import { BackroomInventoryComponent } from './store/backroom-inventory/backroom-inventory.component';
import { DeliveryScheduleComponent } from './store/delivery-schedule/delivery-schedule.component';
import { ProductOrderComponent } from './store/product-order/product-order.component';

//pipes
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { NeedAuthGuard } from './auth.guard';
import { ReceiveToInventoryComponent } from './status/receive-to-inventory/receive-to-inventory.component';
import { AddToTrailersComponent } from './status/add-to-trailers/add-to-trailers.component';





@NgModule({
  declarations: [
    //App
    AppComponent,

    //AdminLte
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    DashboardComponent,
    MainComponent,
    ContentWrapperComponent,

    //Locations
    LocationComponent,
    LocationListComponent,
    EditLocationComponent,
    ViewLocationComponent,
    AddLocationComponent,
    
    //Users
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    LoginPageComponent,
    ForgotPasswordComponent,

    //Inventories
    InventoryListComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    ViewInventoryComponent,

    //Trailers
    AddTrailerComponent,
    TrailerListComponent,
    TrailersComponent,


    //Status
    StatusComponent,
    DocksComponent,
    YardsComponent,

    //Orders
    EditOrderComponent,
    OrderListComponent,
    ViewOrderComponent,
    AddOrderComponent,

    //Products
    AddProductComponent,
    ProductListComponent,
    ProductsComponent,
 
    
    //Stores
    StoreComponent,
    ProductInventoryComponent,
    OutboundInventoryComponent,
    BackroomInventoryComponent,
    DeliveryScheduleComponent,

    //pipes
    PipeTransformPipe,
    ReplaceUnderscorePipe,
    ReplaceUnderscorePipe,
    ProductOrderComponent,
    ReceiveToInventoryComponent,
    AddToTrailersComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule,
    DateTimePickerModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
