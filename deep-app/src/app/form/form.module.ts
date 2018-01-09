import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// form rout module
import { FormRoutingModule } from './form-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormRoutingModule
  ],
  declarations: [],
  exports: []
})
export class FormModule { }
