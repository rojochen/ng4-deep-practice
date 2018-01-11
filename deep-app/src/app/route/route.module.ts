import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // ReactiveForms need ReactiveFormsModule
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './route-routing.module';
import { RouteHomeComponent } from './home/route-home.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    RouteRoutingModule
  ],
  declarations: [RouteHomeComponent]
})
export class RouteModule { }
