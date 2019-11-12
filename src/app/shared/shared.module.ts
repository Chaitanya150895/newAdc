import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceUnderscorePipe } from '../replace-underscore.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ReplaceUnderscorePipe
  ],
  imports: [
    // CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // BrowserModule, 
  ],
  exports:[
    ReplaceUnderscorePipe,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // BrowserModule,
  ]
})
export class SharedModule { }
