import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteHomeComponent } from './home/route-home.component';

const routes: Routes = [
  { path: 'home', component: RouteHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
