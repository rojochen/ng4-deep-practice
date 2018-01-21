import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiDomain
  ) {
    console.log(this.apiDomain);
  }
  resolve(): Observable<any> {
    return this.http.get(this.apiDomain + '/users');
  }
}
