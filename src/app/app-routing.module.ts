import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';


const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'userlist/:userId', component: EditUserComponent },
  { path: 'userlist/view/:userId', component: ViewUserComponent },  
  { path: 'userlist/delete/:userId', component: DeleteUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
