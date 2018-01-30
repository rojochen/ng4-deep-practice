import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component 
import { ComHomeComponent } from './Home/com-home.component';
import { LifeParentComponent } from './Life-cycle/life-parent/life-parent.component';
import { InputParentComponent } from './Input/input-parent/input-parent.component';
import { OutputParentComponent } from './Output/output-parent/output-parent.component';
import { ViewChildParentComponent } from './ViewChild/view-child-parent/view-child-parent.component';
import { ViewChilderParentComponent } from './ViewChilderChild/view-childer-parent/view-childer-parent.component';
import { ContentComponent } from './content/content.component';
import { ExtendsComponent } from './extends/extends.component';
import { BroadHomeComponent } from './Broadcaster/broad-home/broad-home.component';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';

const optimizeRoutes: Routes = [
    {
        path: 'home', component: ComHomeComponent,
        children: [
            { path: '', redirectTo: 'life-demo', pathMatch: 'full' },
            { path: 'life-demo', component: LifeParentComponent },
            { path: 'input-demo', component: InputParentComponent },
            { path: 'output-demo', component: OutputParentComponent },
            {
                path: 'view-demo',
                children: [
                    { path: '', redirectTo: 'child', pathMatch: 'full' },
                    { path: 'child', component: ViewChildParentComponent },
                    { path: 'childer', component: ViewChilderParentComponent }
                ]
            },
            { path: 'content-demo', component: ContentComponent },
            { path: 'component-Inheritance-demo', component: ExtendsComponent },
            { path: 'broadcaster', component: BroadHomeComponent },
            { path: 'bypass-security', component: BypassSecurityComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(optimizeRoutes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }
