import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ReactiveForms need ReactiveFormsModule

// core module
import { CoreModule } from '../core/core.module';

// component
import { CheckTwIdComponent } from './check-tw-id/check-tw-id.component';

// route config
const formRoutes: Routes = [{
    path: 'check-tw-id',
    component: CheckTwIdComponent
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterModule.forChild(formRoutes)
    ],
    declarations: [CheckTwIdComponent],
    exports: [RouterModule]
})
export class FormRoutingModule { }
