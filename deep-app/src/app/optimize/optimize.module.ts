import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Route module
import { OptimizeRoutingModule } from './optimize-routing.module';

// component 
import { HomeComponent } from './home/home.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { DetectorRefDemoComponent } from './detector-ref-demo/detector-ref-demo.component';
import { CounterComponent } from './counter/counter.component';
import { DetectionStrategyDemoComponent } from './detection-strategy-demo/detection-strategy-demo.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OptimizeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ZoneDemoComponent,
    DetectorRefDemoComponent,
    CounterComponent,
    DetectionStrategyDemoComponent,
    FoodListComponent],
  exports: []
})
export class OptimizeModule { }
