import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// index component
import { HomeComponent } from './home/home.component';

// core module
import { CoreModule } from './core/core.module';
// shared module
import { SharedModule } from './shared/shared.module';
// route module
import { AppRoutingModule } from './app-routing.module';

import { BroadcasterService } from './service/broadcaster.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [BroadcasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
