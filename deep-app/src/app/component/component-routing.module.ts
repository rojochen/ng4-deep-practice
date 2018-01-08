import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component 
import { HomeComponent } from './home/home.component';
import { LifeParentComponent } from './LifeCycle/life-parent/life-parent.component';
import { LifeChildComponent } from './LifeCycle/life-child/life-child.component';
import { InputParentComponent } from './Input/input-parent/input-parent.component';
import { InputChildComponent } from './Input/input-child/input-child.component';
import { OutputChildComponent } from './Output/output-child/output-child.component';
import { OutputParentComponent } from './Output/output-parent/output-parent.component';

import { ParentComponent } from './ContentChild/parent/parent.component';
import { ChildComponent } from './ContentChild/child/child.component';
import { ViewChildParentComponent } from './ViewChild/view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './ViewChild/view-child-child/view-child-child.component';
import { ViewChilderParentComponent } from './ViewChilderChild/view-childer-parent/view-childer-parent.component';
import { ViewChilderChildComponent } from './ViewChilderChild/view-childer-child/view-childer-child.component';
import { ContentChildrenParentComponent } from './ContentChildren/content-children-parent/content-children-parent.component';
import { ContentChildrenChildComponent } from './ContentChildren/content-children-child/content-children-child.component';
import { SimplePaginationComponent } from './Extends/simple-pagination/simple-pagination.component';
import { ExePaginationComponent } from './Extends/exe-pagination/exe-pagination.component';


const optimizeRoutes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'life-demo', pathMatch: 'full' },
            { path: 'life-demo', component: LifeParentComponent },
            { path: 'input-demo', component: InputParentComponent },
            { path: 'output-demo', component: OutputParentComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(optimizeRoutes)
    ],
    declarations: [
        HomeComponent,
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
    ],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }
