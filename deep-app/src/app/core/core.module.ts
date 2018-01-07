import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Configuration } from './api/index';
import { ConfigurationParameters } from './api/configuration';
export function apiConfigFactory(): Configuration {
  console.log('he');
  const params: ConfigurationParameters = { username: '', password: '', apiKeys: {} };
  return new Configuration(params);
}
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    { provide: Configuration, useFactory: apiConfigFactory },
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
