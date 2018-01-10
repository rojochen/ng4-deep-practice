import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
// component
import { CheckTwIdComponent } from './check-tw-id/check-tw-id.component';

// route config
const formRoutes: Routes = [{
    path: 'check-tw-id',
    component: CheckTwIdComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(formRoutes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class FormRoutingModule { }
