import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export interface User {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
};
export abstract class API_Method {
    abstract getAllUser(): Observable<any>;
}
@Injectable()
export class JsonPlaceholderService implements API_Method {

  constructor(
    @Inject('API_URL') private apiUrl,
    private http: HttpClient
  ) { 
  }
  getAllUser(): Observable<any> {
    return this.http.get(this.apiUrl + '/users');
  }
}
