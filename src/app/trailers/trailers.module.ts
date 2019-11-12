import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersComponent } from './trailers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { TrailerListComponent } from './trailer-list/trailer-list.component';
import { AddTrailerComponent } from './add-trailer/add-trailer.component';

@NgModule({
  declarations: [
    TrailersComponent,
    TrailerListComponent,
    AddTrailerComponent
  ],
  imports: [
    CommonModule,
    TrailersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,  
    SharedModule
  ]
})
export class TrailersModule { }
