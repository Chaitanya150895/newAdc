import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { TrailersComponent } from './trailers.component';
import { AddTrailerComponent } from './add-trailer/add-trailer.component';
import { TrailerListComponent } from './trailer-list/trailer-list.component';
import { NeedAuthGuard } from '../auth.guard';

const routes: Routes = [

  { path: '', component: TrailerListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddTrailerComponent, canActivate: [NeedAuthGuard] }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailersRoutingModule { }
