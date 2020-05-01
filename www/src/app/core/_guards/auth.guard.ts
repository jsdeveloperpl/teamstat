import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from '../_services/app.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private appService: AppService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    if (this.appService.isAuthenticated$.getValue()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

  canLoad() {
    if (this.appService.isAuthenticated$.getValue()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
