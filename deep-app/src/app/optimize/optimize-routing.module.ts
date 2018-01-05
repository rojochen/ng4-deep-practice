import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';

const routes: Routes = [
  { path: 'optimize/onpush', component: ItemMasterComponent },
  { path: 'optimize/zone', component: ZoneDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class OptimizeRoutingModule { }
