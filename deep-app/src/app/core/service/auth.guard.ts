import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard#canActivate called');

    // route-home.component.ts 裡面 若user登入成功就 localStorage.setItem('login') = 'ok'
    if(localStorage.getItem('login')) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivateChild called');
    if(localStorage.getItem('login')) {
      this.router.navigate(['/route/user']);
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}