import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // ReactiveForms need ReactiveFormsModule

// core module
import { CoreModule } from '../core/core.module';
// shared model
import { SharedModule } from './../shared/shared.module';
// form rout module
import { FormRoutingModule } from './form-routing.module';

// component
import { CheckTwIdComponent } from './check-tw-id/check-tw-id.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  declarations: [CheckTwIdComponent],
  exports: []
})
export class FormModule { }
