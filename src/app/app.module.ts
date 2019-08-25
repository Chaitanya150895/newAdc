import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { UserListComponent } from './user/user-list/user-list.component';

import { HttpClientModule }    from '@angular/common/http';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    UserListComponent,
    AddUserComponent,
    DashboardComponent,
    EditUserComponent,
    ViewUserComponent,
    DeleteUserComponent,
    ReplaceUnderscorePipe
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'adduser', component: AddUserComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
