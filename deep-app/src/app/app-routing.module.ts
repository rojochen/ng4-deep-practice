import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CheckTwIdComponent } from './form/check-tw-id/check-tw-id.component';
const appRoutes: Routes = [
    { path: '', component: CheckTwIdComponent },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }