import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptimizeRoutingModule } from './optimize-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';

@NgModule({
  imports: [
    CommonModule,
    OptimizeRoutingModule,
    FormsModule
  ],
  declarations: [ItemDetailComponent, ItemMasterComponent, ZoneDemoComponent]
})
export class OptimizeModule { }
