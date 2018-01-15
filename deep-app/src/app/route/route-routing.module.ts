import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteHomeComponent } from './home/route-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../core/service/auth.guard';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: 'login', component: RouteHomeComponent
  }, 
  {
    path: 'user', component: UserComponent,
    canActivate: [AuthGuard]
    // children: [
    //   { path: 'user-detail', component: UserDetailComponent },
    //   { path: '', redirectTo: 'user-detail', pathMatch: 'full' },
    // ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
