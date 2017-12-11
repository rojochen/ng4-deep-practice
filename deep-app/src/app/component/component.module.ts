import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeParentComponent } from './life-parent/life-parent.component';
import { LifeChildComponent } from './life-child/life-child.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { ParentComponent } from './content-child/parent/parent.component';
import { ChildComponent } from './content-child/child/child.component';
import { ViewChildParentComponent } from './view-child/view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './view-child/view-child-child/view-child-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LifeParentComponent,
    LifeChildComponent,
    InputParentComponent,
    InputChildComponent,
    OutputChildComponent,
    OutputParentComponent,
    ParentComponent,
    ChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent
  ],
  exports: [
    LifeParentComponent,
    LifeChildComponent,
    InputParentComponent,
    InputChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    ParentComponent,
    ChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent
  ]
})
export class ComponentModule { }
