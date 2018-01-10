import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Route module
import { OptimizeRoutingModule } from './optimize-routing.module';

// component 
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { DetectorRefDemoComponent } from './detector-ref-demo/detector-ref-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OptimizeRoutingModule
  ],
  declarations: [HomeComponent, ItemDetailComponent, ItemMasterComponent, ZoneDemoComponent, DetectorRefDemoComponent],
  exports: []
})
export class OptimizeModule { }
