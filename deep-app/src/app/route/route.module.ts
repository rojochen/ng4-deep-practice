import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './route-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouteRoutingModule
  ],
  declarations: [HomeComponent]
})
export class RouteModule { }
