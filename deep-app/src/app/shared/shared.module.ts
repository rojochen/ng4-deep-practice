import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkColorDirective } from './directive/nav-link-color.directive';
import { NameValidatorDirective } from './directive/name-validator.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkColorDirective, NameValidatorDirective],
  exports:[
    NavLinkColorDirective, NameValidatorDirective
  ]
})
export class SharedModule { }
