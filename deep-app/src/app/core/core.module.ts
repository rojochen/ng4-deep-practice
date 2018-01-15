import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ApiInterceptorService } from './service/api-interceptor.service';
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { AuthGuard } from './service/auth.guard';
console.log('environment: ', environment);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [
    LoggerService,
    JsonPlaceholderService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: Configuration, useFactory: apiConfigFactory }
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
