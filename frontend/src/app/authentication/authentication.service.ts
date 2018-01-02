import { Injectable } from '@angular/core';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { User } from '../shared/model/user/user.model';
import { BASE_AUTH_URL } from '@app/core/service/base-api-url.default';

@Injectable()
export class AuthenticationService {

  private base: string;

  constructor(private http: AuthHttp) {
    base = BASE_AUTH_URL;
  }

  doLogin(credentials) {
    return this.http.post(this.base, credentials)
      .map(res => {
        const data = res.json();
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      });
  }

  doLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }

  getRoles() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return user.authorities;
  }

}
