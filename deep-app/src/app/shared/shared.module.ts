import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkColorDirective } from './directive/nav-link-color.directive';
import { NameValidatorDirective } from './directive/name-validator.directive';

import { BroadcasterService } from './service/broadcaster.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkColorDirective, NameValidatorDirective],
  exports: [
    NavLinkColorDirective, NameValidatorDirective
  ],
  providers: [
    BroadcasterService
  ]
})
export class SharedModule { }
