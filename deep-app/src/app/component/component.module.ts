import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeParentComponent } from './life-parent/life-parent.component';
import { LifeChildComponent } from './life-child/life-child.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LifeParentComponent, LifeChildComponent, InputParentComponent, InputChildComponent],
  exports: [LifeParentComponent, LifeChildComponent, InputParentComponent, InputChildComponent]
})
export class ComponentModule { }
