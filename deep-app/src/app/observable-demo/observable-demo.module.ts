import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableDemoRoutingModule } from './observable-demo-routing.module';
import { MyObservableComponent } from './my-observable/my-observable.component';

@NgModule({
  imports: [
    CommonModule,
    ObservableDemoRoutingModule
  ],
  declarations: [MyObservableComponent]
})
export class ObservableDemoModule { }
