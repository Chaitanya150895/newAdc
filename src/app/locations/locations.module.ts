import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { NeedAuthGuard } from '../auth.guard';
import { LocationListComponent } from './location-list/location-list.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { ViewLocationComponent } from './location-list/view-location/view-location.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationListComponent,
    AddLocationComponent,
    EditLocationComponent,
    ViewLocationComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,  
    SharedModule
  ],
  exports:[
    
  ],
  providers:[NeedAuthGuard]
})
export class LocationsModule { }
