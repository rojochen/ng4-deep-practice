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
        // 若登入成功時才能進入此component
        path: 'login', component: RouteHomeComponent,
      }, {
        path: 'user', component: UserComponent,
        // 透過AuthGuard 檢核user是否能進入該路由
        canActivate: [AuthGuard],
        // 若可以進入該路由, 進入前先取得userList資料
        resolve: {
          userList: UserService
        }
      },
      {
        path: 'user-info/:id', component: UserDetailComponent,
        // 進入路由前先取得userInfo資料
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
