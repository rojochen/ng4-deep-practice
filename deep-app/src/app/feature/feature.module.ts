import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';

// import core module
import { CoreModule } from '../core/core.module';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureComponent]
})
export class FeatureModule { }
