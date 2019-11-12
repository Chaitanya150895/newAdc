import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NeedAuthGuard } from '../auth.guard';
import { AppComponent } from '../app.component';
import { PipeTransformPipe } from '../pipe-transform.pipe';
import { ReplaceUnderscorePipe } from '../replace-underscore.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    UserListComponent,    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule, 
    SharedModule
  ],  
  providers: [NeedAuthGuard],
})
export class UsersModule { }
