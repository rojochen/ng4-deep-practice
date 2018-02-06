import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService implements Resolve<any>{

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiDomain
  ) { }

  // 實作resolve時才去取資料回來
  // 對應程式：src/app/route/user/user.component.ts
  resolve(): Observable<any> {
    return this.http.get(this.apiDomain + '/users');
  }
}
