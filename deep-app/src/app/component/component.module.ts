import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeParentComponent } from './life-parent/life-parent.component';
import { LifeChildComponent } from './life-child/life-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LifeParentComponent, LifeChildComponent],
  exports: [LifeParentComponent, LifeChildComponent]
})
export class ComponentModule { }
