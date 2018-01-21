import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteHomeComponent } from './home/route-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../core/service/auth.guard';
import { UserComponent } from './user/user.component';
import { UserService } from '../core/service/user.service';
import { UserInfoService } from '../core/service/user-info.service';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login', component: RouteHomeComponent,
      }, {
        path: 'user', component: UserComponent,
        canActivate: [AuthGuard],
        resolve: {
          userList: UserService
        }
      },
      {
        path: 'user-info/:id', component: UserDetailComponent,
        resolve: {
          userInfo: UserInfoService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
