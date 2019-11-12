import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { NeedAuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: UserListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddUserComponent, canActivate: [NeedAuthGuard] },
  { path: 'edit/:userId', component: EditUserComponent, canActivate: [NeedAuthGuard] },
  { path: 'view/:userId', component: ViewUserComponent, canActivate: [NeedAuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
