import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component 
import { HomeComponent } from './home/home.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { DetectorRefDemoComponent } from './detector-ref-demo/detector-ref-demo.component';
import { CounterComponent } from './counter/counter.component';
import { DetectionStrategyDemoComponent } from './detection-strategy-demo/detection-strategy-demo.component';

const optimizeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'detection-strategy-demo', pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'detection-strategy-demo', component: DetectionStrategyDemoComponent },
      { path: 'zone-demo', component: ZoneDemoComponent },
      { path: 'detector-ref-demo', component: DetectorRefDemoComponent }
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
export class OptimizeRoutingModule { }
