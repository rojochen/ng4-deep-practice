import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkColorDirective } from './directive/nav-link-color.directive';
import { NameValidatorDirective } from './directive/name-validator.directive';
import { DelayDirective } from './directive/delay.directive';

import { BroadcasterService } from './service/broadcaster.service';
import { SafePipe } from './pipe/safe.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkColorDirective, NameValidatorDirective, DelayDirective, SafePipe],
  exports: [
    NavLinkColorDirective, NameValidatorDirective, DelayDirective, SafePipe
  ],
  providers: [
    BroadcasterService
  ]
})
export class SharedModule { }
