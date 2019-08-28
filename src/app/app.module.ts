import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './main-sidebar/sidebar/location/new-location/new-location.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { SidebarComponent } from './main-sidebar/sidebar/sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { LocationListComponent } from './main-sidebar/sidebar/location/location-list/location-list.component';
import { RouterModule } from '@angular/router';
import { EditLocationComponent } from './main-sidebar/sidebar/location/location-list/edit-location/edit-location.component';
import { ViewLocationComponent } from './main-sidebar/sidebar/location/location-list/view-location/view-location.component';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { LocationComponent } from './main-sidebar/sidebar/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    SidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    LocationListComponent,
    EditLocationComponent,
    ViewLocationComponent,
    PipeTransformPipe,
    ReplaceUnderscorePipe,
    ContentWrapperComponent,
    ContentHeaderComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContentHeaderComponent },
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
