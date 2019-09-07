import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './location/new-location/new-location.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { RouterModule } from '@angular/router';
import { EditLocationComponent } from './location/location-list/edit-location/edit-location.component';
import { ViewLocationComponent } from './location/location-list/view-location/view-location.component';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { LocationComponent } from './location/location.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { SchedulesComponent } from './location/new-location/schedules/schedules.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'NewLocation', component: NewLocationComponent },
      { path: 'LocationList', component: LocationListComponent },
      { path: 'LocationList/edit/:locationId', component: EditLocationComponent },
      { path: 'LocationList/view/:locationId', component: ViewLocationComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
