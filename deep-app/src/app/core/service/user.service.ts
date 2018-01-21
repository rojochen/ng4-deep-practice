import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiDomain
  ) { }
  resolve(): Observable<any> {
    return this.http.get(this.apiDomain + '/users');
  }
}
