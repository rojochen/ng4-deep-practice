import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDemo1Component } from './component-demo-1/component-demo-1.component';
import { ComponentDemo2Component } from './component-demo-2/component-demo-2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentDemo1Component, ComponentDemo2Component]
})
export class ComponentModule { }
