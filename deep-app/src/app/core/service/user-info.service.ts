import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {
  userId: number;
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiDomain
  ) { }
  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<any> {
    this.userId = activatedRouteSnapshot.params['id'];
    return this.http.get(this.apiDomain + `/posts/${this.userId}`);
  }

}
