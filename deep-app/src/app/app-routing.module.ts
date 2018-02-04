import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Route, PreloadingStrategy, Routes, RouterModule, PreloadAllModules } from '@angular/router';

// index component
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { DirectiveDemoModule } from './directive-demo/directive-demo.module';
import { Observable } from 'rxjs/Observable';
import { ObservableDemoModule } from './observable-demo/observable-demo.module';
import { ObservableDemoRoutingModule } from './observable-demo/observable-demo-routing.module';

// 開啟Hash 模式需要import LocationStrategy & HashLocationStrategy from '@angular/common。
const openHashConfig = { provide: LocationStrategy, useClass: HashLocationStrategy };

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'form', loadChildren: './form/form.module#FormModule' },
    { path: 'optimize', loadChildren: './optimize/optimize.module#OptimizeModule', data: { preload: true } },
    { path: 'component', loadChildren: './component/component.module#ComponentModule', data: { preload: true } },
    { path: 'resolve', loadChildren: './route/route.module#RouteModule' },
    { path: 'directive', component: DirectiveDemoComponent },
    { path: '**', redirectTo: '' }
];
export class AppCustomPreloader implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data.preload ? load() : null;
    }
}
// PreloadAllModules 預設全都preload , 只要在首頁執行時，有載入0.chunk.js就是會預先載入，如果不確定的話可以把預先載入的功能移除，二者交互比對就知道了。
@NgModule({
    imports: [
        ObservableDemoRoutingModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: AppCustomPreloader
        }),
        DirectiveDemoModule
    ],
    declarations: [
    ],
    providers: [
        openHashConfig,
        AppCustomPreloader
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}