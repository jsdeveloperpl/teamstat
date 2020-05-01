import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuth$ = new BehaviorSubject(false);
  constructor() { }

  saveToken() {
    this.isAuth$.next(true);
  }

  getToken() {
    return this.isAuth$.getValue();
  }

  getToken$() {
    return this.isAuth$;
  }
}
