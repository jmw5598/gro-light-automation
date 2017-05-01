import { Injectable } from '@angular/core';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { User } from '../core/model/user/user.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: AuthHttp) { }

  doLogin(credentials) {
    return this.http.post('http://localhost:8080/auth', credentials)
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
