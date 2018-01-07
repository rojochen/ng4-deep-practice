import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import global service
import { LoggerService } from './core/service/logger.service';

// core module
import { CoreModule } from './core/core.module';

// import feature module
import { ComponentModule } from './component/component.module';
import { FormModule } from './form/form.module';

// route module
import { AppRoutingModule } from './app-routing.module';

import { FeatureModule } from './feature/feature.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ComponentModule,
    FormModule,
    FeatureModule,
    AppRoutingModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
