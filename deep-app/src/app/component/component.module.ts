import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// improt core module
import { CoreModule } from '../core/core.module';
// shared module
import { SharedModule } from '../shared/shared.module';
// import route module
import { ComponentRoutingModule } from './component-routing.module';

// component 
import { ComHomeComponent } from './Home/com-home.component';
// life
import { LifeParentComponent } from './life-cycle/life-parent/life-parent.component';
import { LifeChildComponent } from './life-cycle/life-child/life-child.component';
// input
import { InputParentComponent } from './input/input-parent/input-parent.component';
import { InputChildComponent } from './input/input-child/input-child.component';
// output
import { OutputChildComponent } from './output/output-child/output-child.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
// extends
import { ExtendsComponent } from './extends/extends.component';
import { SimplePaginationComponent } from './extends/simple-pagination/simple-pagination.component';
import { ExePaginationComponent } from './extends/exe-pagination/exe-pagination.component';
// Broadcaster
import { BroadHomeComponent } from './broadcaster/broad-home/broad-home.component';
import { BroadOneComponent } from './broadcaster/broad-one/broad-one.component';
import { BroadTwoComponent } from './broadcaster/broad-two/broad-two.component';
// bypass-security
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';
// content
import { ContentComponent } from './content/content.component';
// content-child
import { ParentComponent } from './content/child/parent/parent.component';
import { ChildComponent } from './content/child/child/child.component';
// content-children
import { ContentChildrenParentComponent } from './content/children/content-children-parent/content-children-parent.component';
import { ContentChildrenChildComponent } from './content/children/content-children-child/content-children-child.component';
// view-child
import { ViewChildParentComponent } from './view-child/view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './view-child/view-child-child/view-child-child.component';
// view-children
import { ViewChildrenParentComponent } from './view-children/view-children-parent/view-children-parent.component';
import { ViewChildrenChildComponent } from './view-children/view-children-child/view-children-child.component';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ComponentRoutingModule
  ],
  declarations: [
    ComHomeComponent,
    ContentComponent,
    LifeParentComponent,
    LifeChildComponent,
    InputParentComponent,
    InputChildComponent,
    OutputChildComponent,
    OutputParentComponent,
    ParentComponent,
    ChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    ViewChildrenParentComponent,
    ViewChildrenChildComponent,
    ContentChildrenParentComponent,
    ContentChildrenChildComponent,
    SimplePaginationComponent,
    ExePaginationComponent,
    ExtendsComponent,
    BroadHomeComponent,
    BroadOneComponent,
    BroadTwoComponent,
    BypassSecurityComponent
  ],
  exports: []
})
export class ComponentModule { }
