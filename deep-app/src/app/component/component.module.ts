import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// improt core module
import { CoreModule } from '../core/core.module';
// import route module
import { ComponentRoutingModule } from './component-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ComponentRoutingModule
  ],
  declarations: [],
  exports: []
})
export class ComponentModule { }
