import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import feature module
import { ComponentModule } from './component/component.module';

// import global service
import { LoggerService } from './service/logger.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
