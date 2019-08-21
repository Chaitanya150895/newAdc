import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './add-location/new-location/new-location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { SidebarComponent } from './main-sidebar/sidebar/sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    AddLocationComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    SidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
