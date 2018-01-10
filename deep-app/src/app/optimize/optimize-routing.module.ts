import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component 
import { HomeComponent } from './home/home.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { DetectorRefDemoComponent } from './detector-ref-demo/detector-ref-demo.component';

const optimizeRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'zone-demo', pathMatch: 'full' },
      { path: 'zone-demo', component: ZoneDemoComponent },
      { path: 'detector-ref-demo', component: DetectorRefDemoComponent },
      { path: 'item', component: ItemMasterComponent }
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
