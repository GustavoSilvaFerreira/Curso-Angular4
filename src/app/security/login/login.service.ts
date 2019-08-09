import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { MEAT_API } from './../../app.api';
import { User } from './user.model';

@Injectable()
export class LoginService {

  user: User;
  lastUrl: string;

  constructor(private httpClient: HttpClient,
              private router: Router) {

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email, password): Observable<User> {
    return this.httpClient.post<User>(`${MEAT_API}/login`, {email: email, password: password})
      .pipe(
        tap(user => this.user = user)
      )
  }

  logout() {
    this.user = undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }
}
