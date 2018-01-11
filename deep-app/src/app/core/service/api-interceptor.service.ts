import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  // HttpRequest 請求URL，header etc.
  // HttpHandler 處理攔截
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //header set  Authorization token
    // const authReq = req.clone({ headers: req.headers.set('Authorization', 'my-auth-token') });
    return;
  }
}
