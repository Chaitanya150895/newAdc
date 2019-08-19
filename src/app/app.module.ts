import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLocationComponent } from './add-location/new-location/new-location.component';
import { AddLocationComponent } from './add-location/add-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLocationComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
