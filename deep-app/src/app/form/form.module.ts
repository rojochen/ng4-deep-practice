import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTwIdComponent } from './check-tw-id/check-tw-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ReactiveForms need ReactiveFormsModule
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CheckTwIdComponent],
  exports: [CheckTwIdComponent]
})
export class FormModule { }
