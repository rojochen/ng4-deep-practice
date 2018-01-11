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
import { HomeComponent } from './Home/home.component';
import { LifeParentComponent } from './LifeCycle/life-parent/life-parent.component';
import { LifeChildComponent } from './LifeCycle/life-child/life-child.component';
import { InputParentComponent } from './Input/input-parent/input-parent.component';
import { InputChildComponent } from './Input/input-child/input-child.component';
import { OutputChildComponent } from './Output/output-child/output-child.component';
import { OutputParentComponent } from './Output/output-parent/output-parent.component';
import { ContentComponent } from './Content/content.component';
import { ParentComponent } from './Content/ContentChild/parent/parent.component';
import { ChildComponent } from './Content/ContentChild/child/child.component';
import { ContentChildrenParentComponent } from './Content/ContentChildren/content-children-parent/content-children-parent.component';
import { ContentChildrenChildComponent } from './Content/ContentChildren/content-children-child/content-children-child.component';
import { ViewChildParentComponent } from './ViewChild/view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './ViewChild/view-child-child/view-child-child.component';
import { ViewChilderParentComponent } from './ViewChilderChild/view-childer-parent/view-childer-parent.component';
import { ViewChilderChildComponent } from './ViewChilderChild/view-childer-child/view-childer-child.component';
import { ExtendsComponent } from './extends/extends.component';
import { SimplePaginationComponent } from './Extends/simple-pagination/simple-pagination.component';
import { ExePaginationComponent } from './Extends/exe-pagination/exe-pagination.component';
import { BroadHomeComponent } from './Broadcaster/broad-home/broad-home.component';
import { BroadoneComponent } from './Broadcaster/broadone/broadone.component';
import { BroadtwoComponent } from './Broadcaster/broadtwo/broadtwo.component';
import { BypassSecurityComponent } from './BypassSecurity/bypass-security.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ComponentRoutingModule
  ],
  declarations: [
    HomeComponent,
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
    ViewChilderParentComponent,
    ViewChilderChildComponent,
    ContentChildrenParentComponent,
    ContentChildrenChildComponent,
    SimplePaginationComponent,
    ExePaginationComponent,
    ExtendsComponent,
    BroadHomeComponent,
    BroadoneComponent,
    BroadtwoComponent,
    BypassSecurityComponent
  ],
  exports: []
})
export class ComponentModule { }
