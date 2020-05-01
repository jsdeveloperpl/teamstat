import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/_services/auth.service';

@Injectable({providedIn: 'root'})
export class AppService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private authService: AuthService) {
    this.authService.getToken$().subscribe((isAuth: boolean) => {
      this.isAuthenticated$.next(true);
    });
  }
}
