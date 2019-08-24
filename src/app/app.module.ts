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
import { ViewLocationComponent } from './add-location/view-location/view-location.component';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

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
    EditLocationComponent,
    ViewLocationComponent,
    PipeTransformPipe,
    ReplaceUnderscorePipe,
    ContentWrapperComponent,
    ContentHeaderComponent
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
