import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkColorDirective } from './directive/nav-link-color.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkColorDirective],
  exports:[
    NavLinkColorDirective
  ] 
})
export class SharedModule { }
