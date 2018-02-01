import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkColorDirective } from './directive/nav-link-color.directive';
import { NameValidatorDirective } from './directive/name-validator.directive';
import { DelayDirective } from './directive/delay.directive';

import { BroadcasterService } from './service/broadcaster.service';
import { SafePipe } from './pipe/safe.pipe';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { FieldErrorDisplayComponent } from './component/field-error-display/field-error-display.component';
import { ChangeColorDirective } from './directive/change-color.directive.';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkColorDirective, NameValidatorDirective, DelayDirective, ChangeColorDirective, SafePipe, FieldErrorDisplayComponent, AlertMessageComponent],
  exports: [
    NavLinkColorDirective, NameValidatorDirective, DelayDirective, ChangeColorDirective, SafePipe, FieldErrorDisplayComponent, AlertMessageComponent
  ],
  providers: [
    BroadcasterService
  ]
})
export class SharedModule { }
