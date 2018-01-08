import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// index component
import { HomeComponent } from './home/home.component';

// 開啟Hash 模式需要import LocationStrategy & HashLocationStrategy from '@angular/common。
const openHashConfig = { provide: LocationStrategy, useClass: HashLocationStrategy };

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'form', loadChildren: './form/form.module#FormModule'},
    { path: 'optimize', loadChildren: './optimize/optimize.module#OptimizeModule'},
    { path: 'component', loadChildren: './component/component.module#ComponentModule'},
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        HomeComponent
    ],
    providers:[
        openHashConfig
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }