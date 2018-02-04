import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyObservableComponent } from './my-observable/my-observable.component';

const routes: Routes = [{
  path: 'my-observable', component: MyObservableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [MyObservableComponent],
  exports: [RouterModule]
})
export class ObservableDemoRoutingModule { }
