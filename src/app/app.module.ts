import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './add-location/new-location/new-location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { SidebarComponent } from './main-sidebar/sidebar/sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { LocationListComponent } from './add-location/location-list/location-list.component';
import { RouterModule } from '@angular/router';
import { EditLocationComponent } from './add-location/edit-location/edit-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    AddLocationComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    SidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    LocationListComponent,
    EditLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'NewLocation', component: NewLocationComponent },
      { path: 'LocationList', component: LocationListComponent },
      { path: 'LocationList/:locationId', component: EditLocationComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
