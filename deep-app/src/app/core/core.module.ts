import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

// environment
import { environment } from '../../environments/environment';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Configuration } from './api/index';
import { ConfigurationParameters } from './api/configuration';



export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = { username: '', password: '', apiKeys: {} };
  return new Configuration(params);
}
import { LoggerService } from './service/logger.service';

console.log('environment: ', environment);

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    LoggerService,
    { provide: Configuration, useFactory: apiConfigFactory }
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
